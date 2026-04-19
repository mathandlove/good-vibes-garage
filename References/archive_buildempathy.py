#!/usr/bin/env python3
"""
Archive all buildempathy.com case studies:
- Full raw HTML saved per page
- All text extracted verbatim (no paraphrasing)
- All images downloaded
- All links extracted and saved

Output structure:
  buildempathy_archive/
    index/
      raw.html
      text.txt
      links.txt
    casestudies/
      <slug>/
        raw.html
        text.txt
        links.txt
        images/
          <filename>
"""

import urllib.request
import urllib.parse
import os
import re
import html
import time
import json
from pathlib import Path

BASE_URL = "https://www.buildempathy.com"
OUTPUT_DIR = Path(__file__).parent / "buildempathy_archive"

SLUGS = [
    "aitutor",
    "lowes",
    "wonderstory",
    "legotechnic",
    "addition",
    "addition-lbmkg",
    "digitalmath",
    "cancerdetection",
    "digitalelementary",
    "digitalmiddle",
    "engagedreading",
    "learningrewards",
    "middleschooltests",
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read().decode("utf-8", errors="replace")


def fetch_binary(url: str) -> bytes:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as resp:
        return resp.read()


def extract_text_verbatim(raw_html: str) -> str:
    """Extract all visible text from HTML, preserving it verbatim."""
    # Remove style and script blocks entirely
    text = re.sub(r"<style[^>]*>.*?</style>", "", raw_html, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r"<script[^>]*>.*?</script>", "", text, flags=re.DOTALL | re.IGNORECASE)
    # Replace block-level tags with newlines to preserve structure
    text = re.sub(r"<(br|p|div|h[1-6]|li|tr|blockquote|section|article|header|footer|main|nav)[^>]*>", "\n", text, flags=re.IGNORECASE)
    # Strip remaining tags
    text = re.sub(r"<[^>]+>", "", text)
    # Decode HTML entities verbatim
    text = html.unescape(text)
    # Normalize whitespace but preserve paragraph breaks
    lines = [line.strip() for line in text.split("\n")]
    # Collapse multiple blank lines to one
    result = []
    prev_blank = False
    for line in lines:
        if line == "":
            if not prev_blank:
                result.append("")
            prev_blank = True
        else:
            result.append(line)
            prev_blank = False
    return "\n".join(result).strip()


def extract_links(raw_html: str, page_url: str) -> list[dict]:
    """Extract all href links from the page with their anchor text."""
    links = []
    for match in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', raw_html, re.DOTALL | re.IGNORECASE):
        href = match.group(1).strip()
        anchor = re.sub(r"<[^>]+>", "", match.group(2))
        anchor = html.unescape(anchor).strip()
        # Resolve relative URLs
        full_url = urllib.parse.urljoin(page_url, href)
        links.append({"url": full_url, "text": anchor})
    return links


def extract_images(raw_html: str, page_url: str) -> list[dict]:
    """Extract all image src and alt attributes."""
    images = []
    for match in re.finditer(r'<img[^>]+>', raw_html, re.IGNORECASE):
        tag = match.group(0)
        src_match = re.search(r'src=["\']([^"\']+)["\']', tag, re.IGNORECASE)
        alt_match = re.search(r'alt=["\']([^"\']*)["\']', tag, re.IGNORECASE)
        if src_match:
            src = src_match.group(1).strip()
            alt = alt_match.group(1).strip() if alt_match else ""
            full_url = urllib.parse.urljoin(page_url, src)
            images.append({"url": full_url, "alt": alt})
    return images


def safe_filename(url: str) -> str:
    """Convert a URL to a safe local filename."""
    parsed = urllib.parse.urlparse(url)
    path = parsed.path.lstrip("/")
    # Replace path separators and query chars
    name = re.sub(r'[^\w.\-]', '_', path)
    # Keep query string as suffix if present
    if parsed.query:
        query = re.sub(r'[^\w.\-]', '_', parsed.query)
        name = f"{name}__{query}"
    return name or "index"


def archive_page(url: str, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    images_dir = out_dir / "images"

    print(f"  Fetching: {url}")
    try:
        raw_html = fetch(url)
    except Exception as e:
        print(f"  ERROR fetching {url}: {e}")
        return

    # Save raw HTML
    (out_dir / "raw.html").write_text(raw_html, encoding="utf-8")
    print(f"    Saved raw.html ({len(raw_html):,} bytes)")

    # Save verbatim text
    text = extract_text_verbatim(raw_html)
    (out_dir / "text.txt").write_text(text, encoding="utf-8")
    print(f"    Saved text.txt ({len(text):,} chars)")

    # Save links
    links = extract_links(raw_html, url)
    links_out = "\n".join(f"{l['url']}  [{l['text']}]" for l in links)
    (out_dir / "links.txt").write_text(links_out, encoding="utf-8")
    (out_dir / "links.json").write_text(json.dumps(links, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"    Saved {len(links)} links")

    # Download images
    images = extract_images(raw_html, url)
    print(f"    Found {len(images)} images")
    if images:
        images_dir.mkdir(parents=True, exist_ok=True)
        image_manifest = []
        for img in images:
            img_url = img["url"]
            # Skip data URIs
            if img_url.startswith("data:"):
                continue
            filename = safe_filename(img_url)
            # Ensure reasonable extension
            if not re.search(r'\.(jpg|jpeg|png|gif|webp|svg|ico)$', filename, re.IGNORECASE):
                # Try to get extension from URL
                ext_match = re.search(r'\.(jpg|jpeg|png|gif|webp|svg|ico)', img_url, re.IGNORECASE)
                if ext_match:
                    filename += ext_match.group(0)
            out_path = images_dir / filename
            try:
                img_bytes = fetch_binary(img_url)
                out_path.write_bytes(img_bytes)
                print(f"      Downloaded: {filename} ({len(img_bytes):,} bytes)")
                image_manifest.append({"url": img_url, "alt": img["alt"], "local": str(out_path.relative_to(OUTPUT_DIR))})
            except Exception as e:
                print(f"      SKIP {img_url}: {e}")
                image_manifest.append({"url": img_url, "alt": img["alt"], "local": None, "error": str(e)})
            time.sleep(0.2)

        (out_dir / "images.json").write_text(json.dumps(image_manifest, indent=2, ensure_ascii=False), encoding="utf-8")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Archive output: {OUTPUT_DIR}\n")

    # Archive the index page
    print("=== INDEX PAGE ===")
    archive_page(f"{BASE_URL}/casestudies/", OUTPUT_DIR / "index")
    time.sleep(1)

    # Archive each case study
    for slug in SLUGS:
        print(f"\n=== {slug.upper()} ===")
        url = f"{BASE_URL}/casestudies/{slug}"
        archive_page(url, OUTPUT_DIR / "casestudies" / slug)
        time.sleep(1)

    print(f"\nDone. Archive saved to: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
