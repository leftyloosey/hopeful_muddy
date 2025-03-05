import { useState, useEffect } from 'react'

import SongRow from './SongRow'
import Spinner from './Spinner'

const Songs = ({ wobble, setWobble, setDel, loading, error, data }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  if (loading) return <Spinner />
  if (error) return <p>something is wrong!</p>

  // if (data?.songs?.length > 0) {
  //   let sortedByName = [...data.songs]
  //   sortedByName?.sort((a, b) => a.name.localeCompare(b.name))
  //   let sortedByStatus = [...data.songs]
  //   sortedByStatus?.sort((a, b) => a.status.localeCompare(b.status))
  //   let sortedBySet = [...data.songs]
  //   sortedBySet?.sort((a, b) => a.set.name.localeCompare(b.set.name))
  // } else {
  //   return 0
  // }

  return (
    // <div className='bg-red-400'
    <div
      className={`duration-500 ${
        isVisible ? 'translate-x-' : '-translate-x-16'
      }`}
    >
      {data.songs.length > 0 ? (
        // song overflow scroll needs to be here
        <div className='w-36 min-w-36 max-w-36 h-64 min-h-64 max-h-64 overflow-y-scroll'>
          {data.songs.map((song) => (
            <SongRow
              wobble={wobble}
              setWobble={setWobble}
              setDel={setDel}
              key={song.id}
              song={song}
            />
          ))}
        </div>
      ) : (
        <div className='w-36 min-w-36 max-w-36 h-64 min-h-64 max-h-64 overflow-y-scroll'>
          <p>no songs</p>
        </div>
      )}
    </div>
  )
}

export default Songs
