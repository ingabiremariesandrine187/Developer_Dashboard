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
     




     </div>




        </nav>
    )
}