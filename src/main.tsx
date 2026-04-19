import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import './index.css'
import App from './App.tsx'
import WritingPage from './pages/WritingPage.tsx'
import AIAbstinencePage from './pages/AIAbstinencePage.tsx'
import LegoReadingPage from './pages/LegoReadingPage.tsx'
import FeelTheirLearningPage from './pages/FeelTheirLearningPage.tsx'
import EmpowerPlayPage from './pages/EmpowerPlayPage.tsx'
import PersonalizedLearningPage from './pages/PersonalizedLearningPage.tsx'
import DeathOfCuriosityPage from './pages/DeathOfCuriosityPage.tsx'
import QuestionBasedReadingPage from './pages/QuestionBasedReadingPage.tsx'
import RubricForEngagingEducationalGamesPage from './pages/RubricForEngagingEducationalGamesPage.tsx'
import KhanmigoPage from './pages/KhanmigoPage.tsx'
import TeacherAdoptionPage from './pages/TeacherAdoptionPage.tsx'
import LegoTechnicPage from './pages/LegoTechnicPage.tsx'
import DesigningWonderIoPage from './pages/DesigningWonderIoPage.tsx'
import LowesPage from './pages/LowesPage.tsx'
import LevelUpPage from './pages/LevelUpPage.tsx'
import LevelUpProductPage from './pages/LevelUpProductPage.tsx'
import MiddleSchoolTestsPage from './pages/MiddleSchoolTestsPage.tsx'
import BoysGirlsClubReadingPage from './pages/BoysGirlsClubReadingPage.tsx'
import RemoteClassroomsPage from './pages/RemoteClassroomsPage.tsx'
import PortfolioPage from './pages/PortfolioPage.tsx'
import EmpoweringParentsPage from './pages/EmpoweringParentsPage.tsx'
import AddingRewardsPage from './pages/AddingRewardsPage.tsx'
import DigitalMathPage from './pages/DigitalMathPage.tsx'
import EducationComPage from './pages/EducationComPage.tsx'
import OgPreviewPage from './pages/OgPreviewPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/ai-abstinence" element={<AIAbstinencePage />} />
        <Route path="/writing/lego-reading" element={<LegoReadingPage />} />
        <Route path="/writing/lego-reading/prototypes" element={<EmpowerPlayPage />} />
        <Route path="/writing/feel-their-learning" element={<FeelTheirLearningPage />} />
        <Route path="/writing/personalized-learning" element={<PersonalizedLearningPage />} />
        <Route path="/writing/death-of-curiosity" element={<DeathOfCuriosityPage />} />
        <Route path="/writing/question-based-reading" element={<QuestionBasedReadingPage />} />
        <Route path="/writing/rubric-for-engaging-educational-games" element={<RubricForEngagingEducationalGamesPage />} />
        <Route path="/writing/khanmigo" element={<KhanmigoPage />} />
        <Route path="/writing/teacher-adoption" element={<TeacherAdoptionPage />} />
        <Route path="/writing/lego-technic" element={<LegoTechnicPage />} />
        <Route path="/writing/designing-wonder-io" element={<DesigningWonderIoPage />} />
        <Route path="/writing/lowes-vacuum" element={<LowesPage />} />
        <Route path="/writing/level-up" element={<LevelUpPage />} />
        <Route path="/level-up" element={<LevelUpProductPage />} />
        <Route path="/writing/middle-school-tests" element={<MiddleSchoolTestsPage />} />
        <Route path="/writing/boys-girls-club-reading" element={<BoysGirlsClubReadingPage />} />
        <Route path="/writing/remote-classrooms" element={<RemoteClassroomsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/writing/empowering-parents" element={<EmpoweringParentsPage />} />
        <Route path="/writing/adding-rewards" element={<AddingRewardsPage />} />
        <Route path="/writing/digital-math" element={<DigitalMathPage />} />
        <Route path="/writing/education-com-gamification" element={<EducationComPage />} />
        <Route path="/_og-preview" element={<OgPreviewPage />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
