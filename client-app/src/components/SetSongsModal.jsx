import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Lyrics from './Lyrics'

Modal.setAppElement('#root')

const SetSongsModal = ({ setPushRight, filteredSongs }) => {
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

  useEffect(() => {
    if (filteredSongs) setPushRight(true)

    return () => {
      setPushRight(false)
    }
  }, [filteredSongs, setPushRight])

  return (
    <div className='border-solid border-b-2 norbit zorbit'>
      <div className=''>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {renderPage(lyrics)}
        </Modal>
        {filteredSongs &&
          filteredSongs.songBySet.map((song, index) => (
            <div className='' key={song.id}>
              <button
                className=' border-b-2 border-solid'
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
          ))}
      </div>
    </div>
  )
}

export default SetSongsModal
