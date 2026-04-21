import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import './index.css'

export default function App() {
  return (
    <div style={{ background: '#0d0d0f', minHeight: '100vh' }}>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="block lg:hidden">
        <MobileNav />
      </div>

      <main className="lg:pl-64">
        <div className="max-w-4xl mx-auto px-8 sm:px-14">
          <Hero />
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a35, transparent)' }} />
          <Experience />
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a35, transparent)' }} />
          <Projects />
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a35, transparent)' }} />
          <Skills />
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a35, transparent)' }} />
          <Education />
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, #2a2a35, transparent)' }} />
          <Contact />
        </div>
      </main>
    </div>
  )
}
