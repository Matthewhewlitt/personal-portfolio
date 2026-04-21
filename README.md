# Matthew Hewlitt — Personal Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a fixed sidebar navigation, smooth scroll-spy, scroll-triggered fade-in animations, and a dark theme with a purple → yellow gradient accent system.

**Live at:** *(deploy URL here)*

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Bundler | Vite 8 |
| Icons | react-icons (Simple Icons + Bootstrap Icons) |

## Features

- Fixed left sidebar with scroll-spy active indicator
- Responsive — collapses to animated hamburger nav on mobile
- Scroll-triggered fade-in animations via `IntersectionObserver`
- Gradient borders (purple `#7C3AED` → yellow `#F0C040`) on all cards
- Sections: About, Experience, Projects, Skills, Education, Contact

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx          # Fixed left nav with scroll-spy
│   ├── MobileNav.tsx        # Hamburger nav for mobile
│   └── sections/
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── hooks/
│   ├── useScrollSpy.ts      # Highlights active nav item
│   └── useIntersectionObserver.ts
└── App.tsx
```

## Contact

- Email: [matthew.hewlitt@queensu.ca](mailto:matthew.hewlitt@queensu.ca)
- LinkedIn: [linkedin.com/in/matthew-hewlitt](https://www.linkedin.com/in/matthew-hewlitt)
- GitHub: [github.com/Matthewhewlitt](https://github.com/Matthewhewlitt)
