import lore from './lore.js';

function LoreGenerator({ currentAnime, currentCharacter,setShowArchive,setCurrentArchive, cardIndex, setCharacterIndex }) {
const characterArchives = lore[currentAnime.slug][currentCharacter.slug];

  return (
    <div>
    
      <button className='w-38 h-6 text-xs text-red-500 hover:bg-red-500 hover:text-white' onClick={() => {
        setCharacterIndex(cardIndex);
        const randomIndex = Math.floor(Math.random() * characterArchives.length);
        const randomArchive = characterArchives[randomIndex]
        setCurrentArchive(randomArchive);
        setShowArchive(true);
      }}>- [ Read Memory Archive ] -</button>
    </div>
  );
}

export default LoreGenerator;

