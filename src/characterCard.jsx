import LoreGenerator from './loreGenerator.jsx'
function CharacterCard({character, offset, sliderClass, translateX, scale, opacity, zIndex, currentAnime, currentCharacter, cardIndex, setCharacterIndex, setShowArchive,currentArchive ,setCurrentArchive}){
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
     <p className='text-[#FF1818]'>{character.role}</p>
     <p className='text-gray-300 italic text-sm text-center'>"{character.quote}"</p>
     <hr className='border-t border-gray-700 my-3 mx-4'/>
      {offset === 0 ? (
      <>
  <p className="text-gray-400">{character.description}</p>
    <LoreGenerator currentAnime={currentAnime} currentCharacter={currentCharacter} currentArchive={currentArchive} setCurrentArchive={setCurrentArchive} setShowArchive={setShowArchive} cardIndex={cardIndex} setCharacterIndex={setCharacterIndex}/>
  </>
) : (
  <p className="italic text-gray-500">...</p>
)}
     </div>
   
        </article>
  )
        }
export default CharacterCard;