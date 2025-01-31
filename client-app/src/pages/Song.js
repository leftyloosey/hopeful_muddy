import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_SONG } from '../queries/songQueries'
import SetInfo from '../components/SetInfo'
import DeleteSongButton from '../components/DeleteSongButton'
import EditSongForm from '../components/EditSongForm'
// import { songPage, songPage2 } from '../styles/headerStyles'

export default function Song() {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_SONG, { variables: { id } })

  if (loading) return <Spinner />
  if (error) return <p>nope. something wrong.</p>

  return (
    <>
      {!loading && !error && (
        <div>
          <div>
            <div>
              <span>
                Title: <strong> {data.song.name}</strong>
              </span>
              <span>Lyrics: {data.song.lyrics}</span>

              <span>
                Status: <i>{data.song.status}</i>
              </span>
            </div>

            <div>
              <SetInfo set={data.song.set} />
              <DeleteSongButton songId={data.song.id} />
              <div></div>

              <EditSongForm
                songTitle={data.song.name}
                song={data.song}
                filteredArray={data}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
