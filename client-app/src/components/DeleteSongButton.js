import { useContext } from 'react'

import { RefreshContext } from '../context/context'

import { FaTrash } from 'react-icons/fa'
import { GET_SONGS } from '../queries/songQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'
import { GET_SET_BY_USER } from '../queries/setQueries'

export default function DeleteSongButton({ setDel, songId }) {
  const refRetch = useContext(RefreshContext)

  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // here be pirates
    refetchQueries: [GET_SET_BY_USER, 'slutByUser'],
    // refetchQueries: [GET_SONGS, 'getSongs', GET_SET_BY_USER, 'slutByUser'],
    // refetchQueries: [{ query: GET_SONGS }],
  })

  return (
    <div className='bg-red-400'>
      <button
        className='flex flex-row gap-x-4'
        onMouseDown={() => {
          // refRetch()
          deleteSong()
          setDel(true)
        }}
        onMouseUp={() => refRetch()}
      >
        Delete Song
        <FaTrash className='icon' />
      </button>
    </div>
  )
}
