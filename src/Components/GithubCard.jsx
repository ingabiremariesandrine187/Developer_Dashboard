import React from 'react'
export default function GithubCard({username = "octocat" ,isDarkMode}) {
    const [data,setData] = React.useState(null);
    const [loading, setLoading] =React.useState(true);
    const [error,setError] =React.useState(null);

    React.useEffect(() => {
        async function fetchData() {

           setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("User not found");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }  
        }
        fetchData();
    },[username]);
    if(loading) {
        return(
            <div
        className={`p-6 rounded-2xl shadow-md min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
        }`}
      >
  <p
          className={`text-center ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Loading GitHub...
        </p>

      </div>
        );
    }

    //  Error state
   if(error) {
    return (
       <div
        className={`p-6 rounded-2xl shadow-md min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
          isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
        }`}
      >
<p className={`text-center ${
            isDarkMode ? "text-red-400" : "text-red-600"
          }`}>{error}</p>
      </div> 
    );
   }

   //  No data case
   if (!data) return null;
   //  Display user info
   return(
  <div className={`p-6 rounded-2xl shadow-md w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDarkMode ? "bg-gray-800 shadow-black/30" : "bg-white shadow-black/10"
      }`}>
<h2 className={`text-xl font-semibold mb-4  ${
          isDarkMode ? "text-gray-100" : "text-gray-900"
        }`}>Github</h2>
{/* Profile Section */}
<div className="flex items-center gap-4">
<img
src={data.avatar_url}
alt={data.login}
className="w-20 h-20 rounded-full border-2 border-black-500 object-cover"
        />
<div>
<h3 className={`text-lg font-bold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}>
                {data.login}
            </h3>
  <p  className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}>{data.bio || "No bio available"}</p>

</div>
</div>
{/* Stats Section */}



  </div>



   )
}