import {useState,useEffect} from 'react'
import AnimeData from './data.js'
function Tabs(){
const [animeIndex, setAnimeIndex] = useState(0);
const [characterIndex, setCharacterIndex] = useState(0);

const currentAnime = AnimeData[animeIndex];
 let nextCharacter = characterIndex + 1; 
 let previousCharacter = characterIndex - 1;
 if(nextCharacter > currentAnime.characters.length - 1 ) {
   nextCharacter = 0;
  }
 if(previousCharacter< 0){
  previousCharacter = currentAnime.characters.length-1;
 }
useEffect(() => {

   const slider = setInterval(() => {

      setCharacterIndex((currentIndex)=>{
        let next = currentIndex + 1;
        if(next > currentAnime.characters.length - 1){
          next = 0;
        }
        return next;
      });

   }, 3000);

   return () => {
      clearInterval(slider);
   };
}, [characterIndex, animeIndex]);
   return(
   <section className='grid lg:grid-cols-[250px_1fr]'>
    {/* LEFT COLUMN — anime tabs */}
    <div className='flex flex-row lg:flex-col gap-3 md:ml-5 lg:gap-5 overflow-x-auto'>
     {AnimeData.map((singleAnime, index)=>{
      return (
         <button className={`relative tabs-btn group ${animeIndex === index ? 'text-white' : 'text-gray-400 hover:text-white'}`} key={singleAnime.id} onClick={()=>{
            setAnimeIndex(index);
            setCharacterIndex(0);
         }} >{singleAnime.anime}
          <span className={` lg:hidden absolute bottom-0 left-0 h-0.5 bg-[#FF1818] transition-all duration-300 ${animeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
          <span className={`lg:block hidden absolute left-0 top-[-4px] w-0.5 bg-red-500 transition-all duration-300 ${animeIndex === index ?'lg:h-[calc(100%+8px)]' : 'lg:h-0 group-hover:lg:h-[calc(100%+8px)]'}`}/>
         </button>
      )
     })}
     </div>
     {/* RIGHT COLUMN — character slider */}
     <div className='relative'>
      <button className='absolute left-2 md:left-[6%] lg:left-[6%] top-[35%] -translate-y-1/2 z-30 text-[#FF1818] text-2xl hover:text-white' onClick={()=>setCharacterIndex(previousCharacter)}><i className="fa-solid fa-angle-left"></i></button>
     <div className='relative overflow-hidden h-[900px] lg:h-[600px] w-full rounded-lg '>
      
     {currentAnime.characters.map((character, index)=>{
       let offset = index - characterIndex;
       if (offset === currentAnime.characters.length - 1){
        offset = -1;
       }
        if (offset === -(currentAnime.characters.length - 1)){
        offset = 1;
       }

     const translateX = offset*200;
     const scale = Math.max(0.95, 1 - Math.abs(offset) * 0.05);
const opacity = Math.max(0.75, 1 - Math.abs(offset) * 0.25);
     const zIndex = Math.max(10, 20 - Math.abs(offset)*10);
      
   let sliderClass = "absolute left-1/2 top-[30%] lg:top-[35%] transition-all duration-700 ease-in-out bg-black/70";

if (Math.abs(offset) === 1) {
  sliderClass += " hidden md:block";
} else if (Math.abs(offset) > 1) {
  sliderClass += " hidden";
}

   return(
<article
  key={character.id}
  className={`${sliderClass} w-[220px] md:w-[250px] lg:w-[300px]`}
  style={{
   transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
    opacity: opacity,
    zIndex: zIndex,
  }} 
>
  <img src={character.image} alt={character.name} className='aspect-square w-36 mx-auto rounded-sm p-4'/>
     <div className='text-center px-4 py-2 '>
     <h1 className='text-white font-semibold'>{character.name}</h1>
     <p className='text-red-500'>{offset}</p>
     <p className='text-[#FF1818]'>{character.role}</p>
     <p className='text-gray-300 italic text-sm text-center'>"{character.quote}"</p>
     <hr className='border-t border-gray-700 my-3 mx-4'/>
     {offset === 0 ? (
  <p className="text-gray-400">{character.description}</p>
) : (
  <p className="italic text-gray-500">...</p>
)}
     </div>
   
        </article>
      )
     })}
     </div>
      <button className='absolute right-2 md:right-[6%] lg:right-[6%] top-[35%] -translate-y-1/2 z-30 text-[#FF1818] text-2xl hover:text-white' onClick={()=>setCharacterIndex(nextCharacter)}><i className="fa-solid fa-angle-right"></i></button>
      </div>
   </section>
   )
  }
   export default Tabs;