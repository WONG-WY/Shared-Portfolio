export default function ProjectCard({ project, isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-beige-50 border-beige-300 hover:border-[#C4916A]'} border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
      {/* Image/Thumbnail */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#D4B49A] to-[#C4A0C0] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-4xl">📦</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>

        <p className={`${isDarkMode ? 'text-gray-300' : 'text-stone-500'} text-sm sm:text-base mb-4 leading-relaxed`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-stone-400'} text-xs font-semibold uppercase tracking-wide mb-2`}>
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`${isDarkMode ? 'bg-gray-700 text-blue-300' : 'bg-[#F5EDE0] text-[#8B5E3C]'} text-xs px-3 py-1 rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Video Section */}
        {project.video && (
          <div className="mb-6">
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-stone-400'} text-xs font-semibold uppercase tracking-wide mb-3`}>
              Demo Video
            </p>
            {project.videoType === 'youtube' ? (
              <iframe
                width="100%"
                height="200"
                src={project.video}
                title={`${project.title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            ) : (
              <video
                width="100%"
                height="200"
                controls
                className="rounded-lg bg-black"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t" style={{ borderColor: isDarkMode ? '#374151' : '#e5e7eb' }}>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gradient-to-r from-[#C4916A] to-[#A87BA0] text-white'
              }`}
            >
              View Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-beige-200 hover:bg-beige-300 text-stone-700'
              }`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
