import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_SONG } from '../queries/songQueries'
import SetInfo from '../components/SetInfo'
import DeleteSongButton from '../components/DeleteSongButton'
import EditSongForm from '../components/EditSongForm'
import { songPage, songPage2 } from '../styles/headerStyles'

export default function Song() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SONG, { variables: { id } })

  const buttonStyle = {
    marginLeft: '1em',
    // paddingBottom: '5px',
    textDecoration: 'none',
    color: 'black',
  }

  const border = {
    borderStyle: 'solid',
    borderWidth: '1px',
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
          <div style={border}>
            <div style={songPage}>
              <span>
                Title: <strong> {data.song.name}</strong>
              </span>
              <span>Description: {data.song.description}</span>

              <span>
                Status: <i>{data.song.status}</i>
              </span>
            </div>

            <div style={songPage2}>
              <SetInfo set={data.song.set} />
              <DeleteSongButton songId={data.song.id} />
              <div style={border}></div>

              <EditSongForm song={data.song} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
