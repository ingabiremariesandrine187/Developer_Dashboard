import { FaSun, FaMoon } from "react-icons/fa"; 
export default function Navbar({isDarkMode, toggleTheme}){
    return(
        <nav
        className={`w-full px-6 py-6 flex items-center justify-between border-b-2 shadow-md transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900 border-gray-700 shadow-black/30"
          : "bg-white border-gray-300 shadow-black/10"
      }`}
        
        >
     <h1
     className={`text-3xl font-extrabold ${
          isDarkMode ? "text-black-400" : "text-black-700"
        }`}
     >Developer Dashboard</h1>
     <div className="flex items-center gap-4">
        <button
  onClick={toggleTheme}
  aria-label="Toggle theme"
  className={`px-4 py-2 rounded-full shadow-md border border-transparent hover:opacity-90 transition-all duration-300 flex items-center gap-2 ${
    isDarkMode
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-gradient-to-b from-sky-500 to-sky-700 text-white"
  }`}
>

 {isDarkMode ? (
            <>
              <FaSun size={18} />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <FaMoon size={18} />
              <span>Dark Mode</span>
            </>
          )}

</button>
     </div>
        </nav>
    )
}