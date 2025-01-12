import { useState } from 'react'
import EditSongForm from './EditSongForm'
import Modal from 'react-modal'
import SetInfo from './SetInfo'
import DeleteSongButton from './DeleteSongButton'

Modal.setAppElement('#root')

const border = {
  borderStyle: 'solid',
  borderWidth: '1px',
}

const SetSongsModal = ({ filteredSongs }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [songTitle, setSongTitle] = useState()
  const [songId, setSongId] = useState()
  const [setName, setSetName] = useState()

  function openModal(songTitle, songId, setName) {
    setSongTitle(songTitle)
    setSongId(songId)
    setSetName(setName)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  // function afterOpenModal() {}
  console.log('filteredSongs in SETSONGSMODAL: ', filteredSongs.songBySet)
  return (
    <div>
      <div style={border}></div>
      {filteredSongs.songBySet.map((song, index) => (
        <div key={song.id}>
          <p>
            <button
              onClick={() => {
                openModal(song.name, song.id, song.set.name)
              }}
            >
              {song.name}
            </button>
          </p>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        <SetInfo set={setName} />
        <DeleteSongButton songId={songId} />
        <EditSongForm songTitle={songTitle} song={filteredSongs.songBySet} />
      </Modal>
    </div>
  )
}

export default SetSongsModal
