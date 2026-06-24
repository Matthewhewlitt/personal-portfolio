import { useEffect, useRef } from 'react'

interface Project {
  name: string
  context: string
  date: string
  description: string[]
  tags: string[]
  links?: { label: string; href: string }[]
}

const PROJECTS: Project[] = [
  {
    name: 'Algorithmic Trading Program',
    context: 'Personal Project',
    date: 'Jun 2026 – Present',
    description: [
      'Autonomous trading program that analyses and buys stocks in real time.',
      'Examines 2,000+ stocks across multiple markets within seconds using parallel GPU computation (CUDA).',
    ],
    tags: ['Python', 'CUDA', 'GPU Computing'],
  },
  {
    name: 'TradeGuard',
    context: 'National Bank of Canada × QHacks',
    date: 'Feb 2026',
    description: [
      'Behavioural bias detection engine that ingests raw CSV trading data and identifies overtrading, loss aversion, and revenge trading patterns using behavioural finance heuristics.',
      'Analyzed data-sets as large as 200,000 trades, with a personalised AI feedback layer for actionable recommendations: daily trade limits, stop-loss discipline, cooldown periods.',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Behavioural Finance', 'AI'],
    links: [{ label: 'GitHub', href: 'https://github.com/Matthewhewlitt/NBC-Bias-Detector---QHacks-2026' }],
  },
  {
    name: 'nodebility',
    context: 'Backboard.io',
    date: 'Jan – Feb 2026',
    description: [
      'City-scale road safety analytics platform using Next.js, FastAPI, and PostgreSQL that transforms unstructured near-collision reports into infrastructure insights for municipal administrators.',
      'Integrated Backboard.io as a stateful AI memory layer for per-intersection incident history, automated urgency classification, fix-cost estimation, and AI-generated pattern summaries.',
    ],
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Backboard.io', 'TypeScript', 'Python'],
    links: [{ label: 'GitHub', href: 'https://github.com/jasonchencode/backboard.io' }],
  },
  {
    name: 'Owen Osteo',
    context: "Client Project — Dynamic Recovery And Restoration",
    date: 'Jun 2026',
    description: [
      "Mock website built for a client's academic project, for an osteopathic therapy practice.",
    ],
    tags: ['HTML', 'CSS'],
    links: [
      { label: 'Live', href: 'https://owen-osteo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Matthewhewlitt/owen-osteo' },
    ],
  },
  {
    name: 'Help is Here',
    context: 'Client Project — Collingwood Transportation',
    date: 'Mar 2026 – Present',
    description: [
      'Responsive 4-page site for a local transportation business, built with React 18, TypeScript, Tailwind CSS, and React Router v6.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    links: [{ label: 'GitHub', href: 'https://github.com/Matthewhewlitt/help-is-here' }],
  },
  {
    name: 'Gabriele Photography',
    context: 'Client Project — Collingwood Camera Shop, est. 1989',
    date: 'May – Jun 2026',
    description: [
      'Landing page developed for a local boutique camera shop & print studio.',
    ],
    tags: ['HTML', 'CSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/Matthewhewlitt/gabriele-photography' }],
  },
]

const GRADIENT_BORDER: React.CSSProperties = {
  background:
    'linear-gradient(#141418, #141418) padding-box, linear-gradient(135deg, #7C3AED 0%, #F0C040 100%) border-box',
  border: '1.5px solid transparent',
  borderRadius: '10px',
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24">
      <div className="fade-in mb-12">
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#F0C040' }}>
          What I&apos;ve built
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
      </div>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project, i) => (
          <article
            key={project.name}
            className={`fade-in fade-in-delay-${Math.min(i + 1, 4)} flex flex-col p-7`}
            style={GRADIENT_BORDER}
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              {project.links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs shrink-0 px-3 py-1.5 rounded transition-colors duration-150"
                  style={{ color: '#6b6b7a', background: '#1c1c22' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#F0C040')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#6b6b7a')}
                >
                  {link.label} <ExternalLinkIcon />
                </a>
              ))}
            </div>

            <p className="text-sm mb-5" style={{ color: '#6b6b7a' }}>
              {project.context} &mdash; {project.date}
            </p>

            <ul className="flex flex-col gap-3 mb-6 flex-1">
              {project.description.map((d, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#9090a0' }}>
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ background: '#F0C040' }} />
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid #2a2a35' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(240,192,64,0.08)',
                    color: '#F0C040',
                    border: '1px solid rgba(240,192,64,0.2)',
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
