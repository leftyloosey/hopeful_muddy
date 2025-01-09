import { useState } from 'react'
import EditSongForm from './EditSongForm'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const SetSongsModal = ({ filteredArray }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [songTitle, setSongTitle] = useState()

  function openModal(songTitle) {
    setSongTitle(songTitle)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {}

  return (
    <div>
      <div>
        {filteredArray?.map((song, index) => (
          <p key={index}>
            {/* <a
              
              href={`/song/${song.id}`}
            > */}
            <button
              onClick={() => {
                openModal(song.name)
              }}
            >
              {song.name}
            </button>
            {/* </a> */}
          </p>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          <EditSongForm songTitle={songTitle} filteredArray={filteredArray} />
        </Modal>
      </div>
    </div>
  )
}

export default SetSongsModal
