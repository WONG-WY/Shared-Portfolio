export default function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-beige-200 border-beige-300'} border-t transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-stone-500'} mb-6 leading-relaxed`}>
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className={`flex items-center space-x-3 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#A87BA0] hover:text-[#C4916A]'} transition-colors`}
              >
                <span className="text-xl">✉️</span>
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#A87BA0] hover:text-[#C4916A]'} transition-colors`}
              >
                <span className="text-xl">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-[#A87BA0] hover:text-[#C4916A]'} transition-colors`}
              >
                <span className="text-xl">💻</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#projects"
                className={`block ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-stone-500 hover:text-[#C4916A]'} transition-colors`}
              >
                → Projects
              </a>
              <a
                href="#contact"
                className={`block ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-stone-500 hover:text-[#C4916A]'} transition-colors`}
              >
                → Contact
              </a>
              <a
                href="#"
                className={`block ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-stone-500 hover:text-[#C4916A]'} transition-colors`}
              >
                → Resume
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-beige-300'} my-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-stone-400'} text-sm`}>
            © {currentYear} Wong Wing Yin. All rights reserved.
          </p>
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-stone-400'} text-sm mt-4 sm:mt-0`}>
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
