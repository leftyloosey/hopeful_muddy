import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import { GET_SETS } from '../queries/setQueries'

import {
  SongCardContext,
  SetCardContext,
  // RefreshContext,
} from '../context/context'

import useOutsideClick from '../utils/outsideClick'

import Songs from './Songs'
import Sets from './Sets'
import SetSongsModal from './SetSongsModal'
import EditSongForm from './EditSongForm'
import DeleteSongButton from '../components/DeleteSongButton'

import right_bracket from '../assets/images/right_bracket1.jpg'
import left_bracket from '../assets/images/left_bracket1.jpg'

const InfoBox = ({ data2, loading2, error2, songValue, _id }) => {
  const { loading, error, data } = useQuery(GET_SONGS)
  const { data: setData } = useQuery(GET_SETS)
  const [choiceFromSongCard, setChoiceFromSongCard] = useState(data?.songs[0])
  // const [choiceFromSongCard, setChoiceFromSongCard] = useState(data?.songs[0])
  const [screenSongs, setScreenSongs] = useState()
  const [del, setDel] = useState(false)
  const [pushRight, setPushRight] = useState(false)
  const [bronco, setBronco] = useState(false)
  const [wobble, setWobble] = useState(false)

  useEffect(() => {
    return () => {
      setBronco(!bronco)
    }
  }, [del, bronco])

  const handleClickOutside = () => {
    setScreenSongs(null)
    setChoiceFromSongCard(null)
  }
  console.log(wobble)
  const ref = useOutsideClick(handleClickOutside)
  return (
    <div ref={ref} className=' bg-red-'>
      <div className='justify-center flex flex-row'>
        <div className='flex flex-row'>
          {songValue ? (
            <div>
              <SongCardContext.Provider
                value={[choiceFromSongCard, setChoiceFromSongCard]}
              >
                <Songs
                  wobble={wobble}
                  setWobble={setWobble}
                  setDel={setDel}
                  data={data}
                  loading={loading}
                  error={error}
                />
              </SongCardContext.Provider>
            </div>
          ) : (
            <div className='flex flex-row'>
              {/* <div className='slabby'> */}
              <div className={`${pushRight ? 'slabby duration-500' : ''}`}>
                <SetSongsModal
                  setPushRight={setPushRight}
                  filteredSongs={screenSongs}
                />
              </div>
              <SetCardContext.Provider value={[screenSongs, setScreenSongs]}>
                <Sets
                  songValue={songValue}
                  data={data2}
                  loading={loading2}
                  error={error2}
                  userId={_id}
                />
              </SetCardContext.Provider>
            </div>
          )}
        </div>

        <div className='duration-500'>
          {/* <div className='min-w-36 w-36 max-w-36 ml-16'> */}
          {songValue ? (
            <div>
              {choiceFromSongCard && !del && (
                <div className='flex flex-col'>
                  <div className='flex flex-row'>
                    <div>
                      <img
                        className={`${wobble ? '' : 'plorbit'}`}
                        src={left_bracket}
                        alt='left_bracket'
                      />
                    </div>
                    <div className='flex flex-col duration-1000'>
                      <EditSongForm
                        wobble={wobble}
                        setWobble={setWobble}
                        songTitle={choiceFromSongCard?.name}
                        song={choiceFromSongCard}
                        songId={choiceFromSongCard?.id}
                        data={setData}
                      />
                      <div className='mt-16'>
                        <DeleteSongButton
                          del={del}
                          setDel={setDel}
                          songId={choiceFromSongCard?.id}
                        />
                      </div>
                    </div>

                    <div>
                      <img
                        className={`${wobble ? 'plorbit' : ''}`}
                        src={right_bracket}
                        alt='right_bracket'
                      />
                    </div>
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
