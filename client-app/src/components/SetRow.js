import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SETS, GET_SET_BY_USER } from '../queries/setQueries'
import { GET_SONGS, GET_SONGS_BY_SET } from '../queries/songQueries'
import { useQuery } from '@apollo/client'
import Modal from 'react-modal'

import SetSongsModal from './SetSongsModal'

Modal.setAppElement('#root')

export default function SetRow({ set }) {
  const [modalIsOpen, setIsOpen] = useState(false)
  // const [filteredSongs, setFilteredSongs] = useState()

  const { loading, error, data } = useQuery(GET_SONGS_BY_SET, {
    variables: { set: set.id },
  })
  // setFilteredSongs(data)
  // const { loading, error, data } = useQuery(GET_SONGS)
  // console.log('SLOOOONG!!!:', data)
  // let songArray = []

  const [deleteSet, { reset }] = useMutation(DELETE_SET, {
    variables: { id: set.id },
    // refetchQueries: [
    //   { query: GET_SETS },
    //   { query: GET_SONGS },
    //   { query: GET_SONGS_BY_SET },
    // ],
    // refetchQueries: [GET_SONGS_BY_SET, 'sets'],
    refetchQueries: [
      GET_SET_BY_USER,
      'slutByUser',
      // GET_SONGS,
      // 'songBySet',
      // 'getSongs',
      // GET_SETS,
      // 'sets',
      // GET_SONGS_BY_SET,
      // 'getSets',
    ],
    // onCompleted: () => reset(),
    update(cache, { data: { deleteSet } }) {
      // console.log(cache.readQuery({ query: GET_SONGS_BY_SET }))
      // reset()
      console.log(data)
      console.log(cache)
      // const { sets } = cache.readQuery({  query: GET_SONGS_BY_SET })
      // const { sets } = cache.readQuery({ query: GET_SET_BY_USER })
      // console.log(sets)s
      // reset()
      // cache.writeQuery({
      //   query: GET_SETS,
      //   data: { sets: sets.filter((set) => set.id !== deleteSet.id) },
      // data: { sets: sets.filter((set) => set.id !== deleteSet.id) },
      // })
    },
  })

  // function filterSongs() {
  //   songArray = data.songs.filter((song) => {
  //     return song.set.name === set.name
  //   })
  //   setFilteredSongs(songArray)
  // }
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {
    // filterSongs()
  }

  return (
    <>
      {!loading && !error && (
        <tr className='bg-white h-16  border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-b-0'>
          <td className=''>
            <button onClick={openModal}>{set.name}</button>
          </td>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
          >
            <SetSongsModal filteredSongs={data} />
            {/* <SetSongsModal filteredSongs={filteredSongs} /> */}
          </Modal>
          <td>
            <button className='' onClick={deleteSet}>
              <FaTrash />
            </button>
          </td>
        </tr>
      )}
    </>
  )
}
