import { useContext } from 'react'
// import { FaMusic } from 'react-icons/fa'

import { SongCardContext } from '../context/context'

const SongRow = ({ wobble, setWobble, setDel, song }) => {
  // const [choiceFromSongCard, setChoiceFromSongCard] = sawng
  // eslint-disable-next-line no-unused-vars
  const [choiceFromSongCard, setChoiceFromSongCard] =
    useContext(SongCardContext)

  if (!song) return <p>no song</p>

  return (
    <div
      role='button'
      onClick={() => {
        setDel(false)
        setChoiceFromSongCard(song)
        setWobble(!wobble)
      }}
      className='bg-white duration-100 opacity-90 h-16 border-b-2 border-r-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl'
    >
      <div>
        <div className='flex flex-row h-16 items-center gap-x-1 justify-between'>
          <div className=''>
            {/* <FaMusic /> */}
            {song?.name}
          </div>
          <span className='font-extralight'>
            <i>{song?.set?.name}</i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SongRow
