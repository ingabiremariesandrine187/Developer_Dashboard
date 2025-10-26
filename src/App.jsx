import React from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
const THEME_STORAGE_KEY = 'developer_dashboard_theme'
function App() {
    // State to manage dark mode (true = dark, false = light)
  const [isDarkMode , setIsDarkMode] = React.useState(false)
// Load theme preference from localStorage when app starts
React.useEffect(function() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark')
      }
  } catch (error) {
    console.log('error loading theme:',error)
  }
}, [])

// Save theme preference to localStorage whenever it changes

React.useEffect(function() {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light')
    } catch (error) {
      console.log('Error saving theme:', error)
    }
  }, [isDarkMode])
// Function to toggle between light and dark mode
function toggleTheme() {
    setIsDarkMode(function(previousMode) {
      return !previousMode
    })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
    }`}>
     <Navbar toggleTheme={toggleTheme}
     isDarkMode={isDarkMode}/>
     <main className="max-w-7xl mx-auto px-4 py-8 md:px-8">
     <Dashboard isDarkMode={isDarkMode}/>

     </main>
    </div>
  )
}

export default App
