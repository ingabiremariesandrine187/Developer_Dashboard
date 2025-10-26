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
    <>
     
    </>
  )
}

export default App
