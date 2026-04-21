import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: 'rgba(13,13,15,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1e1e28' }}
    >
      <button onClick={() => scrollTo('hero')} className="text-sm font-semibold text-white">
        Matthew Hewlitt
      </button>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        className="flex flex-col gap-1.5 p-1"
      >
        <span
          className="block h-0.5 w-6 transition-all duration-200"
          style={{
            background: open ? '#F0C040' : '#c9c9d4',
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          className="block h-0.5 w-6 transition-all duration-200"
          style={{ background: open ? 'transparent' : '#c9c9d4', opacity: open ? 0 : 1 }}
        />
        <span
          className="block h-0.5 w-6 transition-all duration-200"
          style={{
            background: open ? '#F0C040' : '#c9c9d4',
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {open && (
        <nav
          className="absolute top-full left-0 right-0 flex flex-col py-4"
          style={{ background: 'rgba(13,13,15,0.98)', borderBottom: '1px solid #1e1e28' }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-6 py-3 text-sm text-left transition-colors duration-150"
              style={{ color: '#c9c9d4' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F0C040')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#c9c9d4')}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
