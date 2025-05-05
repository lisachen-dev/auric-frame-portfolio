# Auric Frame (Demo Portfolio)

This is a public demo version of the Auric Frame portfolio template. It’s built with **React**, powered by **Vite**, styled using **Tailwind CSS**, and designed to showcase fictional projects and frontend structure.

All links, images, and content are placeholders or representative only. This repo is intended for layout inspiration, portfolio scaffolding, or experimentation with component-based design.

No private data or production keys are included.

---

## 🧠 Project Summary

- **Framework**: React (via Vite)
- **Styling**: Tailwind CSS v3+
- **Form**: Formspree contact form
- **Hosting**: Vercel

---

## 📦 Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/lisa-chen-58/portfolio
npm install
```

Start local dev server:

```bash
npm run dev
```

---

## 🛠️ Formspree Configuration

The contact form uses [Formspree](https://formspree.io/) for handling submissions.

### To update or change Formspree settings:

1. Visit: https://formspree.io/forms
2. Log in and open the form associated with this site.
3. Copy your **Form ID** (it will look like `https://formspree.io/f/abcxyz`)
4. In the project, update the form action URL inside the contact form:

```jsx
<form action="https://formspree.io/f/abcxyz" method="POST">
```

---

### Deploy:

This project was deployed with Vercel

---

## 🧼 Project Maintenance

### Update dependencies:

```bash
npm update
```

### Tailwind config changes:

- `tailwind.config.js` controls theme, colors, fonts, etc.
- Use `@apply` for reusability when necessary

---

## 📂 Folder Structure Overview

```text
├── public/
│   ├── assets/         # images
├── src/
│   ├── components/     # Portfolio sections (About, Projects, Contact, etc.)
│   ├── data/           # Where you can update your current data
│   ├── App.jsx         # App layout & routing
│   └── main.jsx        # React entry point
├── tailwind.config.js  # Tailwind setup
└── README.md           # You're here!
```

---

## 🧠 Future Considerations

- Add analytics (privacy-focused analytics)
- Consider i18n support or accessibility review
- Reassess section content every 6–12 months

---


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## ✍️ Last Updated

April 14, 2025

