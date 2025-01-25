import { useState } from 'react'
import { FaClosedCaptioning, FaMusic } from 'react-icons/fa'
import Modal from 'react-modal'
// import SetSongsModal from './SetSongsModal'
import EditSongForm from './EditSongForm'
import SetInfo from './SetInfo'
import DeleteSongButton from './DeleteSongButton'

Modal.setAppElement('#root')

const SongCard = ({ choiceFromSongCard, setChoiceFromSongCard, song }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  // setCongs(song)
  function openModal() {
    setIsOpen(true)
  }
  console.log('songcard song', song)
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className='bg-white opacity-90 h-16 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl'>
      <div onClick={openModal}>
        <div className='flex flex-row gap-x-1 h-16 justify-between items-center'>
          <div className='flex flex-row justify-between'>
            <FaMusic className='icon mr-4' />
            <button onClick={() => setChoiceFromSongCard(song)} className=''>
              {song?.name}
            </button>
            {/* <span className='ml-2'>{song?.status}</span> */}
          </div>

          <span className='font-extralight'>
            <i>{song?.set.name}</i>
          </span>
        </div>
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <SetInfo set={song?.set?.name} />
        <DeleteSongButton songId={song?.id} />
        <EditSongForm songTitle={song?.title} song={song} />
      </Modal> */}
    </div>
  )
}
//   return (
//     <div style={outerSong}>
//       <div style={songTitle}>
//         <span>
//           <FaMusic className='icon' />
//           <a
//             style={linkStyles}
//             // onMouseEnter={enter}
//             // onMouseLeave={leave}
//             href={`/song/${song.id}`}
//           >
//             {song.name}
//           </a>
//           | <i> {song.status}</i>|{' '}
//           <p>
//             <strong>{song.set.name}</strong>
//           </p>
//         </span>
//       </div>
//     </div>
//   )
// }
export default SongCard
