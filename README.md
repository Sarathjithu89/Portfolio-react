# Sarath A — Portfolio

A personal portfolio for **Sarath A**, a MERN stack developer based in Thrissur, Kerala. The site presents my experience, skills, projects and contact details with a responsive single-page layout, light/dark themes and a subtle animated background.

## Tech stack

- **React 19** with Vite
- **Tailwind CSS 4**
- **React Router** for routing and the 404 page
- **Lucide React** for icons
- **Space Grotesk + Inter** for typography

## Features

- Data-driven content: update the whole site from one file
- Responsive layout with mobile navigation
- Light/dark theme with system preference detection and persistence
- Animated starfield background in both themes
- “Behind the Build” case studies with architecture, challenges and key decisions
- Project cards linked to GitHub repositories and live demos
- Downloadable resume
- Accessible labels, focus styles and reduced-motion support

## Project structure

```text
Portfolio-react/
├── public/
│   ├── icons/profile.png
│   └── resume/Sarath-A-Resume.pdf
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections (hero, about, skills, etc.)
│   │   ├── CaseStudyModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── StarBackground.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/portfolio.js    # All resume and portfolio content
│   ├── hooks/useTheme.js    # Theme state and persistence
│   ├── lib/utils.js         # Tailwind class helper
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Theme

The theme is stored in `localStorage` under the `theme` key. On a first visit, the site follows the operating system preference. An inline script in `index.html` applies the saved theme before paint to avoid a flash of the wrong theme.

## Links

- GitHub: [github.com/Sarathjithu89](https://github.com/Sarathjithu89)
- LinkedIn: [linkedin.com/in/sarath-a-8601a5201](https://www.linkedin.com/in/sarath-a-8601a5201)
- LeetCode: [leetcode.com/u/SdcKy3s6bH](https://leetcode.com/u/SdcKy3s6bH/)
