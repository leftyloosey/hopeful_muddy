import { useState } from 'react'
import Modal from 'react-modal'
import Lyrics from './Lyrics'

Modal.setAppElement('#root')

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
      <div className='ml-16'>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {renderPage(lyrics)}
        </Modal>
        {filteredSongs &&
          filteredSongs.songBySet.map((song, index) => (
            <div key={song.id}>
              <div>
                <button
                  onMouseDown={(e) => {
                    // e.preventDefault()
                    // e.stopPropagation()
                    setLyrics(song.lyrics)
                    openModal()
                  }}
                >
                  {song.name}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default SetSongsModal
