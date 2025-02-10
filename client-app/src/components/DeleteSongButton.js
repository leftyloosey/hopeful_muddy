import { useContext } from 'react'

import { RefreshContext } from '../context/context'

import { FaTrash } from 'react-icons/fa'
import { GET_SONGS } from '../queries/songQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'

export default function DeleteSongButton({ setDel, songId }) {
  const refRetch = useContext(RefreshContext)

  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // here be pirates
    refetchQueries: [{ query: GET_SONGS }],
  })

  return (
    <div className='bg-red-400'>
      <button
        className='flex flex-row gap-x-4'
        onMouseDown={() => {
          deleteSong()
          setDel(true)
          refRetch()
        }}
      >
        Delete Song
        <FaTrash className='icon' />
      </button>
    </div>
  )
}
