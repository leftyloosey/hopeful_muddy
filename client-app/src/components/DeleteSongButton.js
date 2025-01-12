import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { GET_SONGS } from '../queries/songQueries'
import { GET_SETS, GET_SET_BY_USER } from '../queries/setQueries'
import { DELETE_SONG } from '../mutations/songMutations'
import { useMutation } from '@apollo/client'

export default function DeleteSongButton({ songId }) {
  const navigate = useNavigate()

  const [deleteSong] = useMutation(DELETE_SONG, {
    variables: { id: songId },
    // onCompleted: () => alert('song deleted'),
    onCompleted: () => navigate('/'),

    refetchQueries: [{ query: GET_SETS }, { query: GET_SONGS }],
  })

  return (
    <div>
      <button onClick={deleteSong}>
        <FaTrash className='icon' /> Delete Song
      </button>
    </div>
  )
}
