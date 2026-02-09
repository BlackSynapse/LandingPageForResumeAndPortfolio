About the Project:

This is a personal landing page website showcasing my work, skills, and CV. It features:

Responsive UI built with Tailwind CSS and React components.

Interactive tabs for “About” and “Work” sections.

Embedded CV displayed directly on the Work tab using an iframe.

External links to GitHub, LinkedIn, and email using react-icons.

Environment variables to store personal links and profile name.

Mobile-friendly design with smooth transitions and animations.

This project is built using Next.js 13+, leveraging modern React features for fast, client-friendly rendering.

Tech Stack

Next.js 13+ – React framework with App Router

React – Frontend library

TypeScript – Strongly typed JavaScript

Tailwind CSS – Utility-first styling

React Icons – Iconography for LinkedIn, GitHub, etc.

Environment Variables – Store profile links and GitHub/LinkedIn URLs

PDF Embedding – <iframe> to show CV in-page

Responsive Design – Works on mobile, tablet, and desktop

How to Run Locally

Clone the repository:

git clone https://github.com/BlackSynapse/LandingPageForResumeAndPortfolio
cd LandingPageForResumeAndPortfolio

Install dependencies:

npm install

Set up environment variables:

Create a .env.local file in the root directory (same level as package.json) with your links:

NEXT_PUBLIC_GITHUB_HREF=https://github.com/BlackSynapse
NEXT_PUBLIC_LINKEDIN_HREF=https://www.linkedin.com/in/jsei/
NEXT_PUBLIC_PROFILE_NAME=Johannes Seitalahti
NEXT_PUBLIC_CV_HREF=/cv.pdf

Run the development server:

npm run dev

Open in browser:

Visit http://localhost:3000
to see resume

Build for production (optional):

npm run build
npm start
