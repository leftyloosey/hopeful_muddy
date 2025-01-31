import { FaMusic } from 'react-icons/fa'

const SongCard = ({ setDel, setChoiceFromSongCard, song }) => {
  return (
    <div className='bg-white opacity-90 h-16 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl'>
      <div>
        <div
          onClick={() => {
            console.log('songcard click')
            setDel(false)
            setChoiceFromSongCard(song)
          }}
          className='flex flex-row gap-x-1 h-16 justify-between items-center'
        >
          <div className='flex flex-row justify-between'>
            <FaMusic />
            {song?.name}
          </div>
          <span className='font-extralight'>
            <i>{song?.set.name}</i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SongCard
