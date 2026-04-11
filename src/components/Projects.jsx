import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: 'Privacy Gateway on Microsoft Azure',
    description: 'Deployed an OpenVPN server on an Azure VM to establish encrypted tunnels and mask client IPs. Integrated a Pi-hole DNS sinkhole with a ~180,000-domain blocklist to block ads and minimize latency. Validated IP masking and ad-blocking effectiveness through end-to-end testing with third-party tools.',
    technologies: ['Azure VM', 'OpenVPN', 'Pi-hole', 'DNS'],
    image: null, // Add image path later
    video: null, // Add YouTube embed or local video path later
    videoType: 'local', // 'youtube' or 'local'
    liveLink: null, // Add live link later
    githubLink: null, // Add GitHub link later
  },
  {
    id: 2,
    title: 'Full-Stack School Decision-Support Tool',
    description: 'Built a Vue.js and Node.js platform integrating government APIs for real-time school data comparison. Implemented Auth0 Headless Authentication (ROPC) to secure APIs with JWTs and retain custom UI. Engineered a dual-write mechanism via Express.js to sync MongoDB as the single Source of Truth.',
    technologies: ['Vue.js', 'Node.js', 'Express', 'Auth0', 'MongoDB'],
    image: null, // Add image path later
    video: null, // Add YouTube embed or local video path later
    videoType: 'local', // 'youtube' or 'local'
    liveLink: null, // Add live link later
    githubLink: null, // Add GitHub link later
  },
  {
    id: 3,
    title: 'Real-Time Synchronized Painting Application',
    description: 'Engineered a backend server to convert a single-player app into a real-time multiplayer canvas. Utilized Java Sockets to efficiently handle concurrent client connections and data synchronization. Led server-side development and system integration to ensure timely project completion.',
    technologies: ['Java', 'Sockets', 'Real-time Sync'],
    image: null, // Add image path later
    video: null, // Add YouTube embed or local video path later
    videoType: 'local', // 'youtube' or 'local'
    liveLink: null, // Add live link later
    githubLink: null, // Add GitHub link later
  },
]

export default function Projects({ isDarkMode }) {
  return (
    <section id="projects" className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-beige-200'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-stone-500'} text-lg max-w-2xl mx-auto`}>
            A selection of projects showcasing my expertise in full-stack development, cloud infrastructure, and real-time systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  )
}
