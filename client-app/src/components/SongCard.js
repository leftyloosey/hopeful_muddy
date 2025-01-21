import { useState } from 'react'
import { FaMusic } from 'react-icons/fa'
import Modal from 'react-modal'
// import SetSongsModal from './SetSongsModal'
import EditSongForm from './EditSongForm'
import DeleteSongButton from './DeleteSongButton'
import SetInfo from './SetInfo'

Modal.setAppElement('#root')

export default function SongCard({ song }) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {}
  // console.log(song)
  return (
    <div className='bg-white opacity-90 h-16 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl'>
      <div onClick={openModal}>
        <div className='flex flex-row gap-x-1 h-16 justify-evenly items-center'>
          {song?.name}
          <i>{song?.status}</i>
          <p className=''>
            <strong className=''>{song?.set.name}</strong>
          </p>
          <FaMusic className='icon' />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <SetInfo set={song?.set?.name} />
        <DeleteSongButton songId={song?.id} />
        <EditSongForm songTitle={song?.title} song={song} />
      </Modal>
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
