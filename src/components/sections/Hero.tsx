import { useEffect, useRef } from 'react'

export default function Hero() {
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
    <section id="hero" ref={ref} className="min-h-screen flex flex-col justify-center py-24">
      <div className="fade-in">
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: '#F0C040' }}>
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4">
          <span className="gradient-text">Matthew Hewlitt</span>
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium mb-6" style={{ color: '#9090a0' }}>
          Full-Stack Developer &amp; Digital Growth Consultant
        </h2>
      </div>

      <p
        className="fade-in fade-in-delay-1 text-base leading-relaxed max-w-xl mb-8"
        style={{ color: '#9090a0' }}
      >
        Computer Science and Applied Economics student at Queen&apos;s University. I build full-stack
        web apps and data tools, and consult on digital growth for small businesses. I am always
        looking to learn something new or take on a new challenge!
      </p>

      <div className="fade-in fade-in-delay-2 flex flex-wrap gap-3">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2.5 text-sm font-semibold rounded transition-all duration-200"
          style={{ background: '#F0C040', color: '#0d0d0f' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#f5cc55')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#F0C040')}
        >
          View Projects
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-5 py-2.5 text-sm font-semibold rounded transition-all duration-200"
          style={{ border: '1px solid #F0C040', color: '#F0C040', background: 'transparent' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(240,192,64,0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Get In Touch
        </button>
      </div>

      <div className="fade-in fade-in-delay-3 flex flex-wrap gap-6 mt-16 pt-10" style={{ borderTop: '1px solid #1e1e28' }}>
        {[
          { label: 'University', value: "Queen's University" },
          { label: 'Program', value: 'CS & Applied Economics' },
          { label: 'Location', value: 'Kingston, ON' },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: '#6b6b7a' }}>
              {stat.label}
            </p>
            <p className="text-sm font-medium text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
