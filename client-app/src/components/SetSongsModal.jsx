import { useState } from 'react'
import EditSongForm from './EditSongForm'
import Modal from 'react-modal'
import SetInfo from './SetInfo'
import DeleteSongButton from './DeleteSongButton'

import Lyrics from './Lyrics'

Modal.setAppElement('#root')

// const border = {
//   borderStyle: 'solid',
//   borderWidth: '1px',
// }

const SetSongsModal = ({ refWhich2, filteredSongs }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  // const [songTitle, setSongTitle] = useState()
  // const [songId, setSongId] = useState()
  const [lyrics, setLyrics] = useState()
  console.log(refWhich2)
  // function openModal() {
  //   setIsOpen(true)

  //   console.log('hello bobby')
  // }
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }
  // generation definitions
  // function afterOpenModal() {}
  // console.log('filteredSongs in SETSONGSMODAL: ', filteredSongs)
  // console.log('LLLUUUUURRRKS', lyrics)

  const renderPage = (lyrics) => {
    return <Lyrics lyrics={lyrics} />
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
      >
        heeeeey
        {lyrics}
      </Modal>

      {filteredSongs &&
        filteredSongs.songBySet.map((song, index) => (
          <div key={song.id}>
            <p>
              <button
                onClick={() => {
                  setLyrics(song.lyrics)
                  // console.log('bobset2', lyrics)
                  setIsOpen(true)
                  // console.log(modalIsOpen)
                }}
                // onMouseEnter={() => {
                //   console.log(song.lyrics)

                //   setLyrics(song.lyrics)
                // }}
                // onBlur={() => {
                //   setLyrics('fats')
                // }}
              >
                {song.name}
                {/* {lyrics ? song.lyrics : ''} */}
              </button>
            </p>
          </div>
        ))}

      {/* <div
        onBlur={() => {
          console.log('BLLLURUURURURURUR')
          setLyrics('')
        }}
      >
        {renderPage(lyrics)}
      </div> */}
    </>
  )
}

export default SetSongsModal
