import { useEffect, useRef } from 'react'

interface Job {
  company: string
  location: string
  period: string
  role: string
  bullets: string[]
  tags: string[]
}

const JOBS: Job[] = [
  {
    company: 'Help is Here!',
    location: 'Collingwood, ON',
    period: 'Mar 2026 – Present',
    role: 'Freelance Website Developer & Digital Growth Consultant',
    tags: ['React 18', 'TypeScript', 'Tailwind CSS', 'React Router v6', 'Vite', 'SEO'],
    bullets: [
      'Designed and developed a responsive 4-page website for a local transportation business using React 18, TypeScript, Tailwind CSS, React Router v6, and Vite.',
      'Formulating and executing a custom digital growth strategy covering SEO, Google Business Profile, Google Maps, paid advertising, and social media.',
    ],
  },
  {
    company: "Mother Nature's Cupboard",
    location: 'Collingwood, ON',
    period: 'Mar 2026 – Present',
    role: 'Freelance Website Developer & Digital Growth Consultant',
    tags: ['React', 'TypeScript', 'SEO', 'Google Business', 'Google Maps'],
    bullets: [
      'Built a responsive website for a Collingwood farmers market natural foods and supplement vendor.',
      'Configured Google Business Profile and Maps presence to drive local visibility.',
      'Developed a digital growth strategy covering SEO, social media, and targeted advertising to grow beyond the farmers market into a delivery business.',
    ],
  },
  {
    company: 'Blue Mountain Resort',
    location: 'The Blue Mountains, ON',
    period: 'Nov 2021 – Present',
    role: 'Team Lead',
    tags: ['Leadership', 'Operations', 'Team Management'],
    bullets: [
      "Awarded the 'Golden Nametag' for exceptional problem solving out of ~1,800 candidates.",
      'Coordinated daily operations for a frontline team across multiple high-volume attractions.',
      'Selected for Tech Team, a group of 5 employees from a 107-person department responsible for periodic technical inspection, department logs and documentation, and maintenance.',
    ],
  },
]

const GRADIENT_BORDER: React.CSSProperties = {
  background:
    'linear-gradient(#141418, #141418) padding-box, linear-gradient(135deg, #7C3AED 0%, #F0C040 100%) border-box',
  border: '1.5px solid transparent',
  borderRadius: '10px',
}

export default function Experience() {
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
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="fade-in mb-12">
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#F0C040' }}>
          Where I&apos;ve worked
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
      </div>

      <div className="flex flex-col gap-6">
        {JOBS.map((job, i) => (
          <article
            key={job.company + job.period}
            className={`fade-in fade-in-delay-${Math.min(i + 1, 4)} p-7`}
            style={GRADIENT_BORDER}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <div>
                <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                <p className="text-sm mt-0.5" style={{ color: '#6b6b7a' }}>
                  {job.location}
                </p>
              </div>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded shrink-0"
                style={{ background: '#1c1c22', color: '#F0C040' }}
              >
                {job.period}
              </span>
            </div>

            <p className="text-sm font-medium mb-5" style={{ color: '#F0C040' }}>
              {job.role}
            </p>

            <ul className="flex flex-col gap-3 mb-5">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#9090a0' }}>
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ background: '#7C3AED' }} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid #2a2a35' }}>
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(124,58,237,0.12)',
                    color: '#a78bfa',
                    border: '1px solid rgba(124,58,237,0.25)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
