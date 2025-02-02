import { FaTrash } from 'react-icons/fa'
import { GET_SONGS } from '../queries/songQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'

export default function DeleteSongButton({ setDel, songId }) {
  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // here be pirates
    refetchQueries: [{ query: GET_SONGS }],
  })

  return (
    <div className='bg-orange-800'>
      <button
        className='flex flex-row gap-x-4'
        onMouseDown={() => {
          setDel(true)
          deleteSong()
        }}
      >
        Delete Song
        <FaTrash className='icon' />
      </button>
    </div>
  )
}
