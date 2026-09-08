import AnimeData from './data.js'
import CharacterSlider from './characterSlider.jsx'
function Tabs({currentArchive, setCurrentArchive, showArchive, setShowArchive, currentAnime, currentCharacter, animeIndex, setAnimeIndex, characterIndex, setCharacterIndex}){

   return(
   <section className='grid lg:grid-cols-[250px_1fr]'>
    {/* LEFT COLUMN — anime tabs */}
    <div className='flex flex-row lg:flex-col gap-3 md:ml-5 lg:gap-5 overflow-x-auto'>
     {AnimeData.map((singleAnime, index)=>{
      return (
         <button className={`relative tabs-btn group ${animeIndex === index ? 'text-white' : 'text-gray-400 hover:text-white'}`} key={singleAnime.id} onClick={()=>{
            setAnimeIndex(index);
         }} >{singleAnime.anime}
          <span className={` lg:hidden absolute bottom-0 left-0 h-0.5 bg-[#FF1818] transition-all duration-300 ${animeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
          <span className={`lg:block hidden absolute left-0 -top-1 w-0.5 bg-red-500 transition-all duration-300 ${animeIndex === index ?'lg:h-[calc(100%+8px)]' : 'lg:h-0 group-hover:lg:h-[calc(100%+8px)]'}`}/>
         </button>
      )
     })}
     </div>
     {/* RIGHT COLUMN — character slider */}
     <CharacterSlider currentAnime={currentAnime} currentCharacter={currentCharacter} currentArchive={currentArchive} setCurrentArchive={setCurrentArchive} showArchive={showArchive} setShowArchive={setShowArchive}characterIndex={characterIndex} setCharacterIndex={setCharacterIndex}/> 
     
   </section>
   )
  }
   export default Tabs;