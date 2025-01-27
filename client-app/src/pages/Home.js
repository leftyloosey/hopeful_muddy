import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { GET_SET_BY_USER } from '../queries/setQueries'
import { GET_SONGS } from '../queries/songQueries'

import { AUTH_TOKEN } from '../constants'
import { dayCode } from '../utils/decode'

import Header from '../components/Header'
import Login from '../components/Login'
import InfoBox from '../components/InfoBox'

// import SetInfo from './SetInfo'
// import EditSongForm from './EditSongForm'
// import DeleteSongButton from '../components/DeleteSongButton'

import RadioButton from '../components/RadioButton'
import SongSetButton from '../components/SongSetButton'

import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'

export default function Home() {
  const [songValue, setSong] = useState(false)
  const [setValue, setSet] = useState(true)
  // const [visible, setVisible] = useState(true)
  console.log('home rerender')

  const token = localStorage.getItem(AUTH_TOKEN)
  const unToken = dayCode(token)

  const { _id } = unToken.data

  const { data, loading, error } = useQuery(GET_SET_BY_USER, {
    variables: { userId: _id },
  })
  const refetch = () => {
    return 1
  }

  const handleChange = () => {
    refetch()

    if (setValue) {
      setSet(false)
      setSong(true)
    } else if (!setValue) {
      setSet(true)
      setSong(false)
    }
  }

  if (!token) {
    return <Login />
  }

  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Header />

      <div className='bg-gradient-to-t from-stone-950 flex flex-col items-center h-dvh w-screen sm:w-3/4'>
        <div className=''>
          <InfoBox
            refetch={refetch}
            data2={data}
            loading2={loading}
            error2={error}
            songValue={songValue}
            _id={_id}
          />
        </div>

        <div className='flex flex-col'>
          <div
            className={`duration-200 text-orange-400 flex flex-row gap-x-44 mb-2 ml-3 ${
              songValue ? '' : 'translate-x-40'
            }`}
          >
            ....
          </div>
          <div className='flex flex-row gap-x-28 mb-2'>
            <RadioButton
              label='Song'
              value={songValue}
              handleChange={handleChange}
            />

            <RadioButton
              label='Set'
              value={setValue}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className={`mt-16 ${songValue ? '' : ''}`}>
          {/* <div className={` mt-16 ${songValue ? '' : 'invisible'}`}> */}
          {/* {songValue ? <AddSongModal /> : <AddSetModal /s>} */}

          {songValue ? (
            <AddSongModal data={data} loading={loading} error={error} />
          ) : (
            // <AddSongModal data={data} loading={loading} error={error} />
            <AddSetModal
              data2={data}
              loading={loading}
              error={error}
              userId={_id}
            />
          )}
        </div>
        <SongSetButton songValue={songValue} />
      </div>
    </div>
  )
}
