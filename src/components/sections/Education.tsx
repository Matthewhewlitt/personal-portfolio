import { useEffect, useRef } from 'react'

const COURSES = [
  'Operating Systems',
  'Data Structures & Algorithms',
  'Computer Architecture',
  'Micro & Macro Economics',
  'Econometrics',
  'Statistics',
  'Linear Algebra',
  'Calculus',
  'Physics',
]

const GRADIENT_BORDER: React.CSSProperties = {
  background:
    'linear-gradient(#141418, #141418) padding-box, linear-gradient(135deg, #7C3AED 0%, #F0C040 100%) border-box',
  border: '1.5px solid transparent',
  borderRadius: '10px',
}

export default function Education() {
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
    <section id="education" ref={ref} className="py-24">
      <div className="fade-in mb-12">
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#F0C040' }}>
          Where I study
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
      </div>

      <article className="fade-in fade-in-delay-1 p-7" style={GRADIENT_BORDER}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="text-xl font-bold text-white">Queen&apos;s University</h3>
            <p className="text-sm mt-0.5" style={{ color: '#6b6b7a' }}>Kingston, ON</p>
          </div>
          <span
            className="text-xs font-mono px-2.5 py-1.5 rounded shrink-0"
            style={{ background: '#1c1c22', color: '#F0C040' }}
          >
            Sept 2024 – Apr 2028
          </span>
        </div>

        <div className="flex flex-col gap-3 mb-7">
          <div className="flex gap-3 items-start">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#7C3AED' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#c9c9d4' }}>
              <span className="font-semibold text-white">B.CMPH.</span> in Computer Science
              <span style={{ color: '#6b6b7a' }}> (Fundamental Computation)</span>
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#F0C040' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#c9c9d4' }}>
              <span className="font-semibold text-white">B.AH.</span> in Applied Economics
            </p>
          </div>
        </div>

        <div className="pt-5" style={{ borderTop: '1px solid #2a2a35' }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#6b6b7a' }}>
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {COURSES.map((course) => (
              <span
                key={course}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  color: '#a78bfa',
                  border: '1px solid rgba(124,58,237,0.25)',
                }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </article>

      <article className="fade-in fade-in-delay-2 mt-6 p-7" style={GRADIENT_BORDER}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Accelerated Computing with CUDA Python</h3>
            <p className="text-sm mt-0.5" style={{ color: '#6b6b7a' }}>NVIDIA Deep Learning Institute</p>
          </div>
          <span
            className="text-xs font-mono px-2.5 py-1.5 rounded shrink-0"
            style={{ background: '#1c1c22', color: '#F0C040' }}
          >
            Dec 2025
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: '#9090a0' }}>
          CPU-to-GPU memory transfer, thread execution, and CUDA kernels to parallelize numerical workloads.
        </p>
      </article>
    </section>
  )
}
