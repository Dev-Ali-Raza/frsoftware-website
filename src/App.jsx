import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Portfolio from './components/Portfolio'
import DevWork from './components/DevWork'
import Team from './components/Team'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Industries from './components/Industries'
import Technologies from './components/Technologies'
import Testimonials from './components/Testimonials'
import CtaBand from './components/CtaBand'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Products />
        <Portfolio />
        <DevWork />
        <Team />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Technologies />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
