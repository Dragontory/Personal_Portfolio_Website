# Personal Portfolio Website

This repository contains a React + Vite powered personal portfolio website that showcases projects, experience, and contact information. The site uses Three.js via @react-three/fiber for 3D canvas components and Tailwind CSS for styling.

## Features

- React 18 with Vite for fast development and build
- 3D canvas components powered by three.js and @react-three/fiber
- Tailwind CSS + PostCSS for utility-first styling
- Email contact form using EmailJS
- Framer Motion animations

## Tech stack

- Node.js + npm
- Vite
- React 18
- three, @react-three/fiber, @react-three/drei
- Tailwind CSS, PostCSS, Autoprefixer
- styled-components
- Framer Motion
- EmailJS (@emailjs/browser)

## Getting started (Windows PowerShell)

1. Clone the repository and install dependencies:

```powershell
git clone <repo-url>
cd "Personal_Portfolio_Website"
npm install
```

2. Run the development server:

```powershell
npm run dev
```

3. Build for production:

```powershell
npm run build
```

4. Preview the production build locally:

```powershell
npm run preview
```

## Available npm scripts

- `npm run dev` - start Vite dev server
- `npm run build` - create a production build
- `npm run preview` - locally preview the production build
- `npm run lint` - run ESLint across the project

These are defined in `package.json`.

## Environment & EmailJS

The contact form uses EmailJS via `@emailjs/browser`. Currently the service ID, template ID, and user/public key are included directly in `src/components/Contact.jsx` (hard-coded). For security and portability you should move these to environment variables and reference them in code. Example with Vite:

1. Create a `.env` file in the project root (do not commit it):

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. In code, access them with `import.meta.env.VITE_EMAILJS_SERVICE_ID` etc. Example in `src/components/Contact.jsx`:

```js
emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

Notes:
- Never commit secrets or private keys. Add `.env` to `.gitignore`.
- If you keep the keys hard-coded during development, be aware they will be visible in client bundles.

## Project structure (important files)

- `index.html` - main HTML file for Vite
- `src/main.jsx` - application entry
- `src/App.jsx` - main app component and routes
- `src/index.css` - global CSS + Tailwind imports
- `src/components/` - React components (Contact form, Navbar, Footer, 3D canvas components, etc.)
- `src/components/canvas/` - 3D scenes and canvases (Earth, Stars, Ball)
- `public/planet/textures` - 3D textures and static assets

## Notes, improvements & next steps

- Move EmailJS keys to environment variables as described above.
- Consider removing hard-coded email addresses and moving them to a configuration file.
- Add a small CONTRIBUTING.md if you expect outside contributions.
- Add automated linting or pre-commit hooks (husky, lint-staged) to enforce code quality.

## License & attribution

This project includes multiple third-party packages; check their licenses in `package.json` if you plan to redistribute. Any assets (textures, images) under `public/planet` may have separate license files — check `public/planet/license.txt`.

---

If you'd like, I can (a) move the EmailJS keys into environment variables and update `src/components/Contact.jsx` for you, (b) add a `.env.example` with safe placeholders, and (c) run a quick lint to confirm there are no obvious issues. Which would you prefer next?
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
