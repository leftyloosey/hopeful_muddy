import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_SONG } from '../queries/songQueries'
import SetInfo from '../components/SetInfo'
import DeleteSongButton from '../components/DeleteSongButton'
import EditSongForm from '../components/EditSongForm'
import { songPage } from '../styles/headerStyles'

export default function Song() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SONG, { variables: { id } })

  const buttonStyle = {
    marginLeft: '1em',
    // paddingBottom: '5px',
    textDecoration: 'none',
  }
  if (loading) return <Spinner />
  if (error) return <p>nope. something wrong.</p>

  return (
    <>
      {!loading && !error && (
        <div>
          <Link style={buttonStyle} to='/'>
            Back
          </Link>
          <div style={songPage}>
            <span>
              Title: <strong> {data.song.name}</strong>
            </span>
            <span>Description: {data.song.description}</span>

            <span>
              {' '}
              Status: <i>{data.song.status}</i>
            </span>
          </div>
          <div style={songPage}>
            <SetInfo set={data.song.set} />
            <DeleteSongButton songId={data.song.id} />
            <EditSongForm song={data.song} />
          </div>
        </div>
      )}
    </>
  )
}
