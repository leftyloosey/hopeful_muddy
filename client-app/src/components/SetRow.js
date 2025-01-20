import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SET_BY_USER } from '../queries/setQueries'
import { GET_SONGS_BY_SET } from '../queries/songQueries'
import { useQuery } from '@apollo/client'
// import Modal from 'react-modal'

import SetSongsModal from './SetSongsModal'

// Modal.setAppElement('#root')

export default function SetRow({ set }) {
  // const [modalIsOpen, setIsOpen] = useState(false)
  const [which, setWhich] = useState()

  const { loading, error, data } = useQuery(GET_SONGS_BY_SET, {
    variables: { set: set.id },
  })
  const [deleteSet] = useMutation(DELETE_SET, {
    variables: { id: set.id },
    refetchQueries: [GET_SET_BY_USER, 'slutByUser'],
    // onCompleted: () => reset(),
    update(cache, { data: { deleteSet } }) {
      // console.log(cache.readQuery({ query: GET_SONGS_BY_SET }))
      // reset()
      // console.log(data)
      // console.log(cache)
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
  const renderPage = (which) => {
    return <SetSongsModal filteredSongs={which} />
  }

  return (
    <>
      {!loading && !error && (
        <div
          className={`bg-white opacity-90 h-16 min-w-36 max-w-36 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-b-0'`}
        >
          <div className='flex flex-row justify-between pt-4'>
            <button
              onFocus={() => setWhich(data)}
              onBlur={() => setWhich(null)}
            >
              {set.name}
            </button>
            <button className='' onClick={deleteSet}>
              <FaTrash />
            </button>
          </div>
          <div className='ml-44 text-white bg-white'>
            {/* {renderPage(which)} */}
          </div>
        </div>
      )}
      <div className='ml-16 bg-white'>{renderPage(which)}</div>
    </>
  )
}
