# Quick Start Guide

Get your portfolio up and running in 3 steps.

## Step 1: Install Dependencies

```bash
npm install
```

This installs React, Vite, Tailwind CSS, and other dependencies.

## Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173` 🚀

## Step 3: Customize Your Portfolio

Follow the steps in `CUSTOMIZE.md` to:
1. Add your name
2. Update project information
3. Add project images
4. Add demo videos
5. Update contact links

---

## File Structure Overview

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          👤 Name & Navigation
│   │   ├── Projects.jsx        📋 Project data & layout
│   │   ├── ProjectCard.jsx     🎴 Individual project card
│   │   └── Footer.jsx          📞 Contact & links
│   ├── App.jsx                 ⚙️  Main app (dark mode toggle)
│   ├── main.jsx                🚀 React entry point
│   └── index.css               🎨 Global styles
│
├── public/                      📁 Add your images/videos here
│   ├── images/                 (Create this folder)
│   │   ├── project1.jpg
│   │   └── ...
│   └── videos/                 (Create this folder)
│       ├── demo.mp4
│       └── ...
│
├── index.html                  🌐 HTML file
├── vite.config.js             ⚡ Build config
├── tailwind.config.js         🎨 Tailwind config
├── package.json               📦 Dependencies
├── README.md                  📚 Full documentation
├── CUSTOMIZE.md               ✏️  Customization guide
└── QUICKSTART.md              👈 This file

```

## Key Features Already Implemented

✅ Responsive mobile-first design
✅ Dark/light mode toggle
✅ Smooth animations & transitions
✅ Project cards with hover effects
✅ Video embedding (YouTube & local)
✅ Contact section
✅ Fast development with Vite

## Next Steps

1. **Read `CUSTOMIZE.md`** - Step-by-step instructions for your content
2. **Create folders:**
   - `public/images/` - Add project thumbnails
   - `public/videos/` - Add demo videos (optional)
3. **Update project data** in `src/components/Projects.jsx`
4. **Update contact info** in `src/components/Footer.jsx`
5. **Deploy** when ready!

## Common Tasks

### Add a new project
Edit `src/components/Projects.jsx` and add to `projectsData` array

### Change colors
Edit `tailwind.config.js` to customize the theme

### Add more sections
Create new components in `src/components/` and import in `App.jsx`

### Build for production
```bash
npm run build
```

Deploy the `dist/` folder to any hosting service.

---

**Questions?** Check `README.md` for more detailed documentation.

**Ready to customize?** Open `CUSTOMIZE.md` and start personalizing! 🎉
