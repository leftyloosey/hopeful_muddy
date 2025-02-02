import { useContext } from 'react'
import { FaMusic } from 'react-icons/fa'

import { SongCardContext } from '../context/context'

const SongRow = ({ setDel, song }) => {
  // eslint-disable-next-line no-unused-vars
  const [choiceFromSongCard, setChoiceFromSongCard] =
    useContext(SongCardContext)

  return (
    <div
      role='button'
      onClick={() => {
        setDel(false)
        setChoiceFromSongCard(song)
      }}
      className='bg-white opacity-90 h-16 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl'
    >
      <div>
        <div className='flex flex-row gap-x-1 justify-between items-center'>
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

export default SongRow
