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
    <div
      className={`${
        filteredSongs ? 'border-r-2 border-solid h-64 w-44' : ''
      } norbit zorbit`}
    >
      {/* <div className='border-r-2 border-solid norbit zorbit'> */}
      <div className=''>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {renderPage(lyrics)}
        </Modal>
        {filteredSongs &&
          filteredSongs.songBySet.map((song, index) => (
            <div className='text-nowrap' key={song.id}>
              <button
                onMouseDown={(e) => {
                  // e.preventDefault()
                  // e.stopPropagation()
                  setLyrics(song.lyrics)
                  openModal()
                }}
              >
                <span className='text-nowrap'>{song.name}</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SetSongsModal
