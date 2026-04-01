# Personal Portfolio

A modern and responsive personal portfolio website built with **React** and **Vite** to showcase my profile, skills, projects, and contact information.

## Preview

This portfolio is designed to present my work in a clean and professional way, with a focus on performance, responsive design, and smooth user experience.

## Features

- Responsive design for desktop, tablet, and mobile
- Modern and clean UI
- Built with React components
- Fast development and build with Vite
- Projects section to showcase my work
- Skills and about sections
- Contact section with useful links
- Smooth and professional portfolio layout

## Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**

## Project Structure

```bash
portfolio/
│── public/
│── src/
│   │── assets/
│   │── components/
│   │── App.jsx
│   │── main.jsx
│── index.html
│── package.json
│── vite.config.js


## Component Layout

- Hero and header live in `src/components/hero/` with the canvas background in `HeroBackground.tsx`.
- Page sections are grouped by feature under `src/components/sections/` (about, experience, skills, projects, certificates, contact).
- Shared styles remain in `src/styles/` with hero-specific styles in `heroHeader.css`.

## Getting Started

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Build for production: `npm run build`
