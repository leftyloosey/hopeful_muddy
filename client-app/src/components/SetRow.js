import { useContext, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SET_BY_USER } from '../queries/setQueries'
import { GET_SONGS, GET_SONGS_BY_SET } from '../queries/songQueries'
import { useQuery } from '@apollo/client'
import { RefreshContext, SetCardContext } from '../context/context'

export default function SetRow({ pushRight, set }) {
  const { loading, error, data, refetch } = useQuery(GET_SONGS_BY_SET, {
    variables: { set: set.id },
  })
  const refRetch = useContext(RefreshContext)

  // eslint-disable-next-line no-unused-vars
  const [screenSongs, setScreenSongs] = useContext(SetCardContext)

  if (refRetch) {
    refetch()
  }

  const [deleteSet] = useMutation(DELETE_SET, {
    variables: { id: set.id },
    refetchQueries: [GET_SET_BY_USER, 'slutByUser', GET_SONGS, 'getSongs'],
  })

  return (
    <div className=''>
      {!loading && !error && (
        <div
          className={` translate-x- duration-100 h-16 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-b-0'

          `}
        >
          <div className='flex flex-row justify-between'>
            <div className='flex items-center'></div>

            <button
              className='h-14'
              onClick={() => {
                setScreenSongs(data)
              }}
              onTouchStart={() => {
                setScreenSongs(data)
              }}
            >
              {set.name}
            </button>
            <button
              onClick={() => {
                setScreenSongs(null)
                deleteSet()
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
