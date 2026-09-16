import { Routes, Route } from 'react-router-dom'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import ScrollManager from './components/ScrollManager'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
