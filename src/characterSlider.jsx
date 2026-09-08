import { useEffect } from 'react'
import CharacterCard from './characterCard.jsx'
function CharacterSlider({currentAnime,currentArchive,setCurrentArchive,showArchive, setShowArchive, characterIndex, setCharacterIndex}){
useEffect(() => {
  setCharacterIndex(0);
}, [currentAnime.id, setCharacterIndex]);

useEffect(() => {
  if (showArchive) return;
   const slider = setInterval(() => {
      setCharacterIndex((currentIndex)=>{
        let next = currentIndex + 1;
        if(next > currentAnime.characters.length - 1){
          next = 0;
        }
        return next;
      });
   }, 5000);

   return () => {
      clearInterval(slider);
   };
}, [currentAnime.id, currentAnime.characters.length, showArchive, setCharacterIndex]);

let nextCharacter = characterIndex + 1; 
 let previousCharacter = characterIndex - 1;
 if(nextCharacter > currentAnime.characters.length - 1 ) {
   nextCharacter = 0;
  }
 if(previousCharacter< 0){
  previousCharacter = currentAnime.characters.length-1;
 }


    return(
        <>
        <div className='relative'>
      <button className='absolute left-[6%] md:left-[6%] lg:left-[6%] top-[35%] -translate-y-1/2 z-30 text-[#FF1818] text-2xl hover:text-white' onClick={()=>setCharacterIndex(previousCharacter)}><i className="fa-solid fa-angle-left"></i></button>
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
    <CharacterCard key={character.id} character={character} offset={offset} sliderClass ={sliderClass} translateX={translateX} scale={scale} opacity={opacity} zIndex={zIndex} currentAnime={currentAnime} currentCharacter={character} cardIndex={index} setCharacterIndex={setCharacterIndex} setShowArchive={setShowArchive} currentArchive={currentArchive} setCurrentArchive={setCurrentArchive}/>
      )
     })}
     </div>
      <button className='absolute right-[6%] md:right-[6%] lg:right-[6%] top-[35%] -translate-y-1/2 z-30 text-[#FF1818] text-2xl hover:text-white' onClick={()=>setCharacterIndex(nextCharacter)}><i className="fa-solid fa-angle-right"></i></button>
      </div>
        </>
    );
}
export default CharacterSlider;