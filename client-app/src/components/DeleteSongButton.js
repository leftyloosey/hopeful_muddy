import { FaTrash } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'
import { GET_SONGS } from '../queries/songQueries'
import { GET_SETS, GET_SET_BY_USER } from '../queries/setQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'

export default function DeleteSongButton({ songId }) {
  // const navigate = useNavigate()

  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // onCompleted: () => alert('song deleted'),
    // onCompleted: () => navigate('/'),

    refetchQueries: [
      { query: GET_SET_BY_USER },
      { query: GET_SETS },
      { query: GET_SONGS },
    ],
  })

  return (
    <div className='bg-orange-800'>
      <button className='flex flex-row gap-x-4' onClick={deleteSong}>
        Delete Song
        <FaTrash className='icon' />
      </button>
    </div>
  )
}
