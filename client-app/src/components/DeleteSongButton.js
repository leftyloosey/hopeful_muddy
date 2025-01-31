import { FaTrash } from 'react-icons/fa'
import { GET_SONGS } from '../queries/songQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'

export default function DeleteSongButton({ del, setDel, songId }) {
  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // onCompleted: () => alert('song deleted'),
    // onCompleted: () => navigate('/'),

    // here be pirates. rememher, this one had more.
    // you eliminated this one and an error. howwhy
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
