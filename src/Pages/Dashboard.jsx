import React from 'react'
import GithubCard from '../Components/GithubCard'
import WeatherCard from '../Components/WeatherCard'


function Dashboard(props){

return(
<div className="w-full">
{/* Dashboard Cards Grid */}
    <div className= "grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
{/* Weather Card */}
<WeatherCard latitude={51.5074}
longitude={-0.1278}
isDarkMode={props.isDarkMode}
/>

 {/* GitHub Card - Your GitHub profile */}
 <GithubCard
 username="ingabiremariesandrine187"
 isDarkMode={props.isDarkMode}
 />
    </div>
</div>


)

}
export default Dashboard