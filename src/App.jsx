import Tabs from './tabs.jsx'
import React from'react';
function App () {
    return (
   <section
  className="min-h-screen bg-[url('/src/images/wallpaperflare.com_wallpaper.jpg')] bg-cover bg-no-repeat bg-[80%_15%]">

<header className="flex w-fit items-start ml-4 pt-2">
    <img src="src/images/logo-removebg-preview.png" alt="logo" className="w-16 md:w-20 lg:w-24"/>
    <h1 className="font-blackbones lg:text-6xl md:text-5xl text-4xl tracking-wider text-white">Anime Profiles</h1>
</header>
<p className='text-base text-gray-100 font-serif mt-6 mb-12 mx-8'>Discover your favorite anime characters one profile at a time.</p>
<Tabs/>
</section>
    )
}
export default App;
