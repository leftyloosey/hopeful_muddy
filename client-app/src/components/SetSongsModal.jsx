import { useState } from 'react'
// import EditSongForm from './EditSongForm'
import Modal from 'react-modal'
// import SetInfo from './SetInfo'
// import DeleteSongButton from './DeleteSongButton'

import Lyrics from './Lyrics'

Modal.setAppElement('#root')

// const border = {
//   borderStyle: 'solid',
//   borderWidth: '1px',
// }

const SetSongsModal = ({ filteredSongs }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [lyrics, setLyrics] = useState()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const renderPage = (lyrics) => {
    return <Lyrics lyrics={lyrics} />
  }
  return (
    <>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {renderPage(lyrics)}
      </Modal>
      {filteredSongs &&
        filteredSongs.songBySet.map((song, index) => (
          <div key={song.id}>
            <p>
              <button
                onMouseDown={(e) => {
                  // e.preventDefault()
                  // e.stopPropagation()
                  setLyrics(song.lyrics)
                  setIsOpen(true)
                }}
              >
                {song.name}
              </button>
            </p>
          </div>
        ))}
    </>
  )
}

export default SetSongsModal
