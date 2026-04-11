import { useState } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-beige-100 text-[#3C3028]'} min-h-screen transition-colors duration-300`}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}

export default App
