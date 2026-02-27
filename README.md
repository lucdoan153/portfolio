# Portfolio

Personal portfolio website built with React + Vite, hosted on GitHub Pages.

## Setup

1. **Clone and install**
   ```bash
   npm install
   npm run dev
   ```

2. **Customize your info** — edit these files:
   - `src/components/Hero.jsx` — name, tagline, bio
   - `src/components/Projects.jsx` — your projects array
   - `src/components/Work.jsx` — work experience array
   - `src/components/Education.jsx` — education array
   - `src/components/Footer.jsx` — update `LAST_UPDATED` date
   - `index.html` — update `<meta>` tags and `<title>`
   - `public/favicon.svg` — change initials `YN` to yours

3. **Update the base path** in `vite.config.js`:
   ```js
   base: '/your-actual-repo-name/',
   ```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` — the workflow auto-builds and deploys

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## Adding Sections (for bonus points)

Copy the pattern from any existing section. Add a new file in `src/components/`, import it in `App.jsx`, and add a nav link in `Header.jsx`.

Ideas for bonus sections: Skills, Awards, Certifications, Extracurriculars, Publications.
