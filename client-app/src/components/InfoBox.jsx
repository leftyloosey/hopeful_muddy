import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_SONGS } from '../queries/songQueries'
import Songs from './Songs'
import Sets from './Sets'

import SetInfo from './SetInfo'
import EditSongForm from './EditSongForm'
import DeleteSongButton from '../components/DeleteSongButton'

const InfoBox = ({ refetch, data2, loading2, error2, songValue, _id }) => {
  const { loading, error, data } = useQuery(GET_SONGS)
  const [choiceFromSongCard, setChoiceFromSongCard] = useState(data?.songs[0])

  return (
    <>
      <div className='flex flex-row'>
        <div className='bg-yellow-300 h-64 min-h-64 max-h-64 min-w-36 w-36 max-w-36'>
          {songValue ? (
            <Songs
              choiceFromSongCard={choiceFromSongCard}
              setChoiceFromSongCard={setChoiceFromSongCard}
              data={data}
              loading={loading}
              error={error}
            />
          ) : (
            <Sets
              refetch={refetch}
              data={data2}
              loading={loading2}
              error={error2}
              userId={_id}
            />
          )}
        </div>

        <div className='h-64 min-h-64 max-h-64 min-w-36 w-36 max-w-36 bg-red-700'>
          {songValue ? (
            <>
              {choiceFromSongCard && (
                <div className='flex flex-col'>
                  <EditSongForm
                    songTitle={choiceFromSongCard?.name}
                    song={choiceFromSongCard}
                    songId={choiceFromSongCard?.id}
                  />
                  <div className='pt-2'>
                    {/* <SetInfo set={choiceFromSongCard?.set?.name} /> */}
                    <DeleteSongButton songId={choiceFromSongCard?.id} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default InfoBox
