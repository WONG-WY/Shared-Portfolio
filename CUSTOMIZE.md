# Portfolio Customization Guide

Quick step-by-step instructions to personalize your portfolio with your own information.

## 1. Update Your Name

**File:** `src/components/Header.jsx` (Line 8)

Find:
```jsx
<h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  Your Name
</h1>
```

Replace `Your Name` with your actual name.

## 2. Update Your Projects

**File:** `src/components/Projects.jsx`

### For Project 1: Privacy Gateway on Microsoft Azure

Find the first project object and update:

```jsx
{
  id: 1,
  title: 'Privacy Gateway on Microsoft Azure',
  description: 'Deployed an OpenVPN server on an Azure VM to establish encrypted tunnels and mask client IPs. Integrated a Pi-hole DNS sinkhole with a ~180,000-domain blocklist to block ads and minimize latency. Validated IP masking and ad-blocking effectiveness through end-to-end testing with third-party tools.',
  technologies: ['Azure VM', 'OpenVPN', 'Pi-hole', 'DNS'],
  image: '/images/privacy-gateway.jpg',  // 👈 Add image path
  video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // 👈 Add YouTube video
  // OR for local video: video: '/videos/privacy-gateway-demo.mp4',
  videoType: 'youtube', // Change to 'local' if using local video
  liveLink: 'https://your-live-link.com', // 👈 Add live link
  githubLink: 'https://github.com/yourname/privacy-gateway', // 👈 Optional
}
```

### For Project 2: Full-Stack School Decision-Support Tool

```jsx
{
  id: 2,
  title: 'Full-Stack School Decision-Support Tool',
  description: 'Built a Vue.js and Node.js platform integrating government APIs for real-time school data comparison. Implemented Auth0 Headless Authentication (ROPC) to secure APIs with JWTs and retain custom UI. Engineered a dual-write mechanism via Express.js to sync MongoDB as the single Source of Truth.',
  technologies: ['Vue.js', 'Node.js', 'Express', 'Auth0', 'MongoDB'],
  image: '/images/school-tool.jpg',  // 👈 Add image path
  video: '/videos/school-tool-demo.mp4', // 👈 Add local video path
  videoType: 'local',
  liveLink: 'https://your-school-tool.com', // 👈 Add live link
  githubLink: 'https://github.com/yourname/school-decision-tool',
}
```

### For Project 3: Real-Time Synchronized Painting Application

```jsx
{
  id: 3,
  title: 'Real-Time Synchronized Painting Application',
  description: 'Engineered a backend server to convert a single-player app into a real-time multiplayer canvas. Utilized Java Sockets to efficiently handle concurrent client connections and data synchronization. Led server-side development and system integration to ensure timely project completion.',
  technologies: ['Java', 'Sockets', 'Real-time Sync'],
  image: '/images/painting-app.jpg',  // 👈 Add image path
  video: '/videos/painting-demo.mp4', // 👈 Add local video path
  videoType: 'local',
  liveLink: 'https://your-painting-app.com', // 👈 Add live link (if applicable)
  githubLink: 'https://github.com/yourname/painting-app',
}
```

## 3. Add Images

### Create Image Folder
1. Create a `public/images/` folder in the root directory
2. Add thumbnail images for each project (recommended size: 800x600px or 16:10 aspect ratio)

### Suggested Filenames
- `public/images/privacy-gateway.jpg`
- `public/images/school-tool.jpg`
- `public/images/painting-app.jpg`

### Update Image Paths
In `Projects.jsx`, update each project's `image` property:
```jsx
image: '/images/privacy-gateway.jpg'  // Path from public folder
```

## 4. Add Videos

### Option A: YouTube Videos

1. Upload your demo video to YouTube
2. Get the video ID from the URL: `https://www.youtube.com/watch?v=**VIDEO_ID**`
3. Update the `video` field:
```jsx
video: 'https://www.youtube.com/embed/VIDEO_ID',
videoType: 'youtube'
```

### Option B: Local Videos

1. Create a `public/videos/` folder
2. Add your MP4 files (keep file sizes reasonable, ~20-50MB for demos)
3. Update the project:
```jsx
video: '/videos/project-demo.mp4',
videoType: 'local'
```

## 5. Update Contact Information

**File:** `src/components/Footer.jsx`

### Email
Find:
```jsx
<a href="mailto:your.email@example.com">
```
Replace with your email address.

### LinkedIn
Find:
```jsx
<a href="https://linkedin.com">
```
Replace with your LinkedIn profile URL.

### GitHub
Find:
```jsx
<a href="https://github.com">
```
Replace with your GitHub profile URL.

## 6. Optional: Add Resume Link

**File:** `src/components/Footer.jsx`

Find the "Resume" link (around line 57) and update:
```jsx
<a href="your-resume-url-or-file">
  → Resume
</a>
```

You can:
- Link to a PDF: `href="/resume.pdf"` (upload to `public/`)
- Link to your portfolio site
- Link to Google Drive: `href="https://drive.google.com/file/d/..."`

## 7. Test Your Changes

1. Run the dev server:
```bash
npm run dev
```

2. Check your portfolio at `http://localhost:5173`

3. Test:
   - [ ] All project titles and descriptions show correctly
   - [ ] Project images load (or fallback emoji shows)
   - [ ] Videos play (YouTube embeds or local videos)
   - [ ] Live links work
   - [ ] Contact links are correct
   - [ ] Dark mode toggle works
   - [ ] Responsive design works on mobile (resize browser)

## 8. Deploy

When ready, deploy to production:

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Build for Manual Deployment
```bash
npm run build
# Upload the 'dist/' folder to your hosting
```

---

## Troubleshooting

### Images not showing?
- Check the file path is correct: `/images/filename.jpg`
- Ensure the file is in the `public/images/` folder
- File extensions matter: `.jpg`, `.png`, `.webp`

### Videos not playing?
- For YouTube: Make sure the video ID is correct
- For local: Check the file path: `/videos/filename.mp4`
- Ensure the video file exists in `public/videos/`

### Styles look wrong?
- This shouldn't happen, but you can rebuild CSS:
```bash
npm run dev
```

### Need help with links?
- Live Link: The URL where your project is hosted
- GitHub Link: Your GitHub repository URL
- These are optional - remove the link if you don't have them

---

**Once you've completed these steps, your portfolio will be fully customized and ready to share!**
