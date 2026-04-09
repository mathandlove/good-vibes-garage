import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import WritingPage from './pages/WritingPage.tsx'
import AIAbstinencePage from './pages/AIAbstinencePage.tsx'
import LegoReadingPage from './pages/LegoReadingPage.tsx'
import FeelTheirLearningPage from './pages/FeelTheirLearningPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/ai-abstinence" element={<AIAbstinencePage />} />
        <Route path="/writing/lego-reading" element={<LegoReadingPage />} />
        <Route path="/writing/feel-their-learning" element={<FeelTheirLearningPage />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
