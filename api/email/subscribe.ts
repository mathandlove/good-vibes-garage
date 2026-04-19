import type { VercelRequest, VercelResponse } from '@vercel/node'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = process.env.BREVO_LIST_ID ? parseInt(process.env.BREVO_LIST_ID, 10) : undefined

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  if (!BREVO_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  try {
    const payload: Record<string, unknown> = {
      email: email.toLowerCase().trim(),
      updateEnabled: true,
      ...(BREVO_LIST_ID && { listIds: [BREVO_LIST_ID] }),
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    })

    if (response.status === 201) {
      return res.status(201).json({ success: true, message: 'Successfully subscribed' })
    }
    if (response.status === 204) {
      return res.status(200).json({ success: true, message: 'Subscription updated' })
    }

    const errorData = await response.json()
    if (errorData.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true, message: 'Already subscribed' })
    }

    return res.status(response.status).json({ error: errorData.message || 'Failed to subscribe' })

  } catch {
    return res.status(500).json({ error: 'Failed to process subscription' })
  }
}
