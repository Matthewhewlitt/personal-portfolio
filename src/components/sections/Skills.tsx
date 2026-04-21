import { useEffect, useRef } from 'react'
import {
  SiPython, SiJavascript, SiTypescript, SiNodedotjs, SiReact,
  SiDocker, SiGit, SiGithub, SiPostgresql, SiPandas, SiNumpy,
  SiPytorch, SiGnubash, SiC, SiR,
} from 'react-icons/si'
import { FaJava, FaDatabase } from 'react-icons/fa'
import { BsCpuFill, BsLightningChargeFill, BsBarChartFill } from 'react-icons/bs'

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
}

const SKILLS: Skill[] = [
  { name: 'Python',      icon: <SiPython />,                     color: '#3776AB' },
  { name: 'Java',        icon: <FaJava />,                       color: '#ED8B00' },
  { name: 'R',           icon: <SiR />,                          color: '#276DC3' },
  { name: 'C',           icon: <SiC />,                          color: '#A8B9CC' },
  { name: 'JavaScript',  icon: <SiJavascript />,                 color: '#F7DF1E' },
  { name: 'TypeScript',  icon: <SiTypescript />,                 color: '#3178C6' },
  { name: 'Bash',        icon: <SiGnubash />,                    color: '#4EAA25' },
  { name: 'Assembly',    icon: <BsCpuFill />,                    color: '#9090a0' },
  { name: 'SQL',         icon: <FaDatabase />,                   color: '#F29111' },
  { name: 'Pandas',      icon: <SiPandas />,                     color: '#150458' },
  { name: 'NumPy',       icon: <SiNumpy />,                      color: '#013243' },
  { name: 'Numba',       icon: <BsLightningChargeFill />,        color: '#00A3E0' },
  { name: 'Matplotlib',  icon: <BsBarChartFill />,               color: '#11557C' },
  { name: 'PyTorch',     icon: <SiPytorch />,                    color: '#EE4C2C' },
  { name: 'Node.js',     icon: <SiNodedotjs />,                  color: '#339933' },
  { name: 'React.js',    icon: <SiReact />,                      color: '#61DAFB' },
  { name: 'Docker',      icon: <SiDocker />,                     color: '#2496ED' },
  { name: 'Git',         icon: <SiGit />,                        color: '#F05032' },
  { name: 'GitHub',      icon: <SiGithub />,                     color: '#c9c9d4' },
  { name: 'PostgreSQL',  icon: <SiPostgresql />,                 color: '#4169E1' },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in').forEach((child) => child.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24">
      <div className="fade-in mb-12">
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#F0C040' }}>
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
      </div>

      <div className="fade-in fade-in-delay-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2.5 p-4 rounded-lg transition-all duration-200 cursor-default group"
            style={{ background: '#141418', border: '1px solid #2a2a35' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F0C040'
              e.currentTarget.style.background = 'rgba(240,192,64,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a35'
              e.currentTarget.style.background = '#141418'
            }}
          >
            <span
              className="text-2xl transition-colors duration-200"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </span>
            <span className="text-xs text-center font-medium leading-tight" style={{ color: '#9090a0' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
