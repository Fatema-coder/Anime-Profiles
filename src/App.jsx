import Tabs from './tabs.jsx'
import AnimeData from './data.js'
import { useState } from 'react';

function App () {
    const [currentArchive, setCurrentArchive] = useState(null);
    const [showArchive, setShowArchive] = useState(false);
    const [animeIndex, setAnimeIndex] = useState(0);
    const [characterIndex, setCharacterIndex]= useState(0);
    const currentAnime = AnimeData[animeIndex];
    const currentCharacter = currentAnime.characters[characterIndex];

    return (
   <section
  className="min-h-screen bg-[url('/images/wallpaperflare.com_wallpaper.jpg')] bg-cover bg-no-repeat bg-[80%_15%]">

<header className="flex w-fit items-start ml-4 pt-2">
    <img src="/images/logo-removebg-preview.png" alt="logo" className="w-16 md:w-20 lg:w-24"/>
    <h1 className="font-blackbones lg:text-6xl md:text-5xl text-4xl tracking-wider text-white">Anime Profiles</h1>
</header>
<p className='text-base text-gray-100 font-serif mt-6 mb-12 mx-8'>Discover your favorite anime characters one profile at a time.</p>
<div className="relative">
  {showArchive && currentArchive && currentCharacter && (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm">
      {/* Close Button */}
      <button 
        onClick={() => setShowArchive(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white font-bold text-2xl transition-colors"
      >
        ✕
      </button>

      {/* DIALOGUE BOX*/}
      <div className="absolute bottom-0 w-full h-72 md:h-64 bg-gradient-to-r from-red-600/40 via-red-950/30 to-black/60 skew-y-[-1deg] border-t border-red-500/20 shadow-2xl backdrop-blur-lg">
        
        {/* Un-skew wrapper */}
        <div className='relative flex flex-col skew-y-[1deg] h-full md:flex-row justify-center px-6 sm:px-12 md:px-24 py-6 text-white'>
          {currentCharacter && (
            <div className="absolute md:bottom-0 bottom-71 left-4 md:left-12 lg:left-24">
            <img src={currentCharacter.imageLore} alt={currentCharacter.name} className="h-52 sm:h-52 md:h-64 w-auto object-contain"/>
            </div>
          )}
        <div className="flex flex-col justify-center md:ml-[30%] flex-1 min-w-0">
            <h2 className="font-bold text-xl italic">Declassified Archive</h2>
          <span className="text-xs md:text-sm font-bold tracking-widest text-red-400 uppercase bg-black/30 rounded w-max px-3 py-1 mt-2 border border-red-500/10">
            {currentArchive.title}
          </span>
          <p className="text-base md:text-lg font-medium italic leading-relaxed text-gray-100 max-w-3xl mt-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {currentArchive.text}
          </p>
        </div>
        </div>
      </div>
    </div>
  )}
</div>

<Tabs currentArchive={currentArchive} setCurrentArchive={setCurrentArchive} showArchive={showArchive}  setShowArchive={setShowArchive} currentAnime={currentAnime} currentCharacter={currentCharacter} animeIndex={animeIndex} setAnimeIndex={setAnimeIndex} characterIndex={characterIndex} setCharacterIndex={setCharacterIndex}/>
</section>
    )
}
export default App;
