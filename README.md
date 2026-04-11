# Modern Portfolio Website

A responsive, modern portfolio website built with React and Tailwind CSS. Features a clean design with dark/light mode toggle, project showcase with embedded videos, and smooth animations.

## Features

✨ **Responsive Design** - Mobile-first approach with breakpoints for all device sizes
🌓 **Dark/Light Mode** - Toggle between dark and light themes
🎥 **Embedded Videos** - Support for both YouTube and local video files
🎨 **Beautiful Animations** - Smooth hover effects and transitions
📱 **Mobile Menu** - Responsive navigation for smaller screens
⚡ **Fast Performance** - Built with Vite for optimal load times

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar with dark mode toggle
│   │   ├── Projects.jsx        # Projects section
│   │   ├── ProjectCard.jsx     # Individual project card component
│   │   └── Footer.jsx          # Footer with contact links
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML entry point
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Customization Guide

### Update Your Name

Edit `src/components/Header.jsx` and replace "Your Name" with your actual name:

```jsx
<h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  Your Name  // ← Change this
</h1>
```

### Update Projects

All projects are defined in `src/components/Projects.jsx`. Modify the `projectsData` array:

```jsx
const projectsData = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description here...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    image: '/images/project1.jpg',           // Add image path
    video: 'https://www.youtube.com/embed/VIDEO_ID',  // YouTube URL
    // OR for local video:
    // video: '/videos/demo.mp4',
    videoType: 'youtube',  // 'youtube' or 'local'
    liveLink: 'https://project-live-url.com',
    githubLink: 'https://github.com/username/project',
  },
  // Add more projects...
]
```

### Add Project Images

1. Create an `public/images/` folder in the root directory
2. Add your project thumbnail images
3. Reference them in `projectsData`:
```jsx
image: '/images/privacy-gateway.jpg'
```

### Add Videos

#### YouTube Videos
Get the embed URL from YouTube:
1. Right-click the video → "Copy embed code"
2. Extract the video ID from `src="https://www.youtube.com/embed/VIDEO_ID"`
3. Use the full embed URL in the `video` field

#### Local Videos
1. Create a `public/videos/` folder
2. Add your MP4 files
3. Reference them:
```jsx
video: '/videos/demo.mp4',
videoType: 'local'
```

### Update Contact Information

Edit `src/components/Footer.jsx`:

```jsx
<a href="mailto:your.email@example.com">  // Update email
<a href="https://linkedin.com/in/yourprofile">  // Update LinkedIn
<a href="https://github.com/yourprofile">  // Update GitHub
```

### Customize Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
  },
},
```

Currently uses blue (`from-blue-500`) and purple (`to-purple-600`) for the gradient.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Vercel automatically detects it's a Vite project and deploys

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to [Netlify](https://netlify.com)

### Other Hosting

Build and deploy the `dist/` folder to any static hosting:
- GitHub Pages
- Firebase Hosting
- AWS S3
- Any CDN

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Notes

- Replace all placeholder links with your actual URLs
- Add your actual email address in the Footer
- Add project images and videos to complete the portfolio
- Update "Your Name" in the Header with your actual name
