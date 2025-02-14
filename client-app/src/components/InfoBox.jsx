import { useState, useContext } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import { GET_SETS } from '../queries/setQueries'

import {
  SongCardContext,
  SetCardContext,
  RefreshContext,
} from '../context/context'

import useOutsideClick from '../utils/outsideClick'

import Songs from './Songs'
import Sets from './Sets'
import SetSongsModal from './SetSongsModal'
import EditSongForm from './EditSongForm'
import DeleteSongButton from '../components/DeleteSongButton'

const InfoBox = ({ data2, loading2, error2, songValue, _id }) => {
  const { loading, error, data, refetch: refetch2 } = useQuery(GET_SONGS)
  const { data: setData, refetch } = useQuery(GET_SETS)

  const [choiceFromSongCard, setChoiceFromSongCard] = useState(data?.songs[0])
  const [screenSongs, setScreenSongs] = useState()
  const [del, setDel] = useState(false)
  // setScreenSongs(setData)
  const refRetch = useContext(RefreshContext)
  if (refRetch) {
    // setDel(false)
    refetch2()

    refetch()
    // setChoiceFromSongCard(null)
  }

  const handleClickOutside = () => {
    setChoiceFromSongCard(null)
  }

  const ref = useOutsideClick(handleClickOutside)

  return (
    <div ref={ref} className=''>
      <div className='flex flex-row '>
        {/* <div className='flex flex-row h-72 min-h-72 max-h-72'> */}
        <div className=''>
          {/* <div className='bg-yellow-300 min-w-36 w-36 max-w-36 '> */}
          {songValue ? (
            <div>
              <SongCardContext.Provider
                value={[choiceFromSongCard, setChoiceFromSongCard]}
              >
                <Songs
                  // sawng={[choiceFromSongCard, setChoiceFromSongCard]}
                  setDel={setDel}
                  data={data}
                  loading={loading}
                  error={error}
                />
              </SongCardContext.Provider>
            </div>
          ) : (
            <div className='flex flex-row'>
              <div className='ml-16 absolute w-36 h-64 flex flex-col'>
                <SetSongsModal filteredSongs={screenSongs} />
              </div>
              {/* <div className=''> */}
              <SetCardContext.Provider value={[screenSongs, setScreenSongs]}>
                <Sets
                  songValue={songValue}
                  data={data2}
                  loading={loading2}
                  error={error2}
                  userId={_id}
                />
              </SetCardContext.Provider>
              {/* </div> */}
            </div>
          )}
        </div>
        <div className=''>
          {/* <div className='min-w-36 w-36 max-w-36 ml-16'> */}
          {songValue ? (
            <div>
              {choiceFromSongCard && !del && (
                <div className='flex flex-col'>
                  <EditSongForm
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
            </div>
          ) : (
            <></>
            // <div className='-translate--64'>
            //   <SetSongsModal filteredSongs={screenSongs} />
            // </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoBox
