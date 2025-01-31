import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import { GET_SETS } from '../queries/setQueries'

import useOutsideClick from '../utils/outsideClick'

import Songs from './Songs'
import Sets from './Sets'
import SetSongsModal from './SetSongsModal'
import EditSongForm from './EditSongForm'
import DeleteSongButton from '../components/DeleteSongButton'

const InfoBox = ({ data2, loading2, error2, songValue, _id }) => {
  const { loading, error, data } = useQuery(GET_SONGS)
  const { data: setData } = useQuery(GET_SETS)
  const [choiceFromSongCard, setChoiceFromSongCard] = useState(data?.songs[0])
  const [screenSongs, setScreenSongs] = useState()
  const [del, setDel] = useState(false)

  const handleClickOutside = () => {
    setChoiceFromSongCard(null)
  }
  const ref = useOutsideClick(handleClickOutside)

  return (
    <div ref={ref}>
      <div className='flex flex-row h-72 min-h-72 max-h-72'>
        <div className='bg-yellow-300 min-w-36 w-36 max-w-36 '>
          {songValue ? (
            <Songs
              setDel={setDel}
              choiceFromSongCard={choiceFromSongCard}
              setChoiceFromSongCard={setChoiceFromSongCard}
              data={data}
              loading={loading}
              error={error}
            />
          ) : (
            <Sets
              screenSongs={screenSongs}
              setScreenSongs={setScreenSongs}
              // refetch={regrab}
              data={data2}
              loading={loading2}
              error={error2}
              userId={_id}
            />
          )}
        </div>

        <div className='min-w-36 w-36 max-w-36 bg-red-700'>
          {songValue ? (
            <>
              {choiceFromSongCard && !del && (
                <div className='flex flex-col'>
                  <EditSongForm
                    del={del}
                    songTitle={choiceFromSongCard?.name}
                    song={choiceFromSongCard}
                    songId={choiceFromSongCard?.id}
                    data={setData}
                  />

                  <div className='pt-2'>
                    {/* <SetInfo set={choiceFromSongCard?.set?.name} /> */}
                    <DeleteSongButton
                      del={del}
                      setDel={setDel}
                      songId={choiceFromSongCard?.id}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <SetSongsModal filteredSongs={screenSongs} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoBox
