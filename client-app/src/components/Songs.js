import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import SongCard from './SongCard'

export default function Songs() {
  const { loading, error, data } = useQuery(GET_SONGS)

  if (loading) return <Spinner />
  if (error) return <p>something is wrong!</p>
  console.log('songs page: ', data)
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
        <div className='overflow-scroll'>
          {data.songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <p>no songs</p>
      )}
    </>
  )
}
