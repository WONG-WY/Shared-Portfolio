import { useState } from 'react'

export default function Header({ isDarkMode, onToggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-beige-100 border-beige-300'} border-b sticky top-0 z-50 transition-colors duration-300`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C4916A] to-[#A87BA0] bg-clip-text text-transparent">
            Wong Wing Yin
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#projects" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-[#C4916A]'} transition-colors`}>
            Projects
          </a>
          <a href="#contact" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-[#C4916A]'} transition-colors`}>
            Contact
          </a>
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-beige-200 text-stone-600'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-beige-200 text-stone-600'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-beige-200'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 md:hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-beige-100 border-beige-300'} border-b`}>
            <div className="px-4 py-4 space-y-4">
              <a href="#projects" className="block" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="block" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
