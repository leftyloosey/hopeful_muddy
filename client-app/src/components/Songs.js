import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import SongCard from './SongCard'
import Spinner from './Spinner'

const Songs = ({
  choiceFromSongCard,
  setChoiceFromSongCard,
  loading,
  error,
  data,
}) => {
  // const { loading, error, data } = useQuery(GET_SONGS)

  if (loading) return <Spinner />
  if (error) return <p>something is wrong!</p>

  if (data.songs.length > 0) {
    let sortedByName = [...data.songs]
    sortedByName?.sort((a, b) => a.name.localeCompare(b.name))
    let sortedByStatus = [...data.songs]
    sortedByStatus?.sort((a, b) => a.status.localeCompare(b.status))
    let sortedBySet = [...data.songs]
    sortedBySet?.sort((a, b) => a.set.name.localeCompare(b.set.name))
  } else {
    return 0
  }

  return (
    <>
      {data.songs.length > 0 ? (
        <div className='w-36 min-w-36 max-w-36 h-64 min-h-64 max-h-64'>
          {data.songs.map((song) => (
            <SongCard
              choiceFromSongCard={choiceFromSongCard}
              setChoiceFromSongCard={setChoiceFromSongCard}
              key={song.id}
              song={song}
            />
          ))}
        </div>
      ) : (
        <p>no songs</p>
      )}
    </>
  )
}

export default Songs
