import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'
import { GET_SONGS } from '../queries/songQueries'
import { useQuery } from '@apollo/client'
import Modal from 'react-modal'

import Whatin from './SetSongsModal'

Modal.setAppElement('#root')

export default function SetRow({ set }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [filteredArray, setFilteredArray] = useState()

  const { loading, error, data } = useQuery(GET_SONGS)

  let songArray = []

  const [deleteSet] = useMutation(DELETE_SET, {
    variables: { id: set.id },
    refetchQueries: [{ query: GET_SETS }, { query: GET_SONGS }],
    // update(cache, { data: { deleteSet }}) {
    //     const { sets } = cache.readQuery({ query:
    //     GET_SETS })
    //     cache.writeQuery({
    //         query: GET_SETS,
    //         data: { sets: sets.filter(set => set.id !== deleteSet.id) },
    //     })
    //  }
  })

  function filterSongs() {
    songArray = data.songs.filter((song) => {
      return song.set.name === set.name
    })
    setFilteredArray(songArray)
  }
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {
    filterSongs()
  }

  return (
    <>
      {!loading && !error && (
        <tr>
          <td>
            <button onClick={openModal}>{set.name}</button>
          </td>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          >
            <Whatin filteredArray={filteredArray} />
          </Modal>
          <td>
            <button className='btn btn-danger btn-sm' onClick={deleteSet}>
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  )
}
