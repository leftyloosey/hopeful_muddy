import { useQuery } from '@apollo/client'
import Login from '../components/Login'
import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'
import InfoBox from '../components/InfoBox'
import SongSetButton from '../components/SongSetButton'
// import Songs from '../components/Songs'
// import Sets from '../components/Sets'
import { GET_USERS, GET_SET_BY_USER } from '../queries/setQueries'
import { AUTH_TOKEN } from '../constants'
// import { dayCode } from '../utils/decode'
import { useState } from 'react'
import RadioButton from '../components/RadioButton'
import { dayCode } from '../utils/decode'
import Header from '../components/Header'

export default function Home() {
  const [songValue, setSong] = useState(false)
  const [setValue, setSet] = useState(true)
  // const [visible, setVisible] = useState(true)
  console.log('home rerender')

  // console.log(songValue)

  const token = localStorage.getItem(AUTH_TOKEN)
  const stuff = dayCode(token)
  console.log(stuff)
  const { _id } = stuff.data
  const { data, loading, error, refetch } = useQuery(GET_SET_BY_USER, {
    variables: { userId: _id },
  })
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
  console.log('HOME SET_BY_USER: ', data)
  if (!token) {
    return <Login />
  }

  return (
    <div className='flex flex-col justify-center items-center overflow-x-hidden'>
      <Header />

      <div className='bg-gradient-to-t from-cyan-600 flex flex-col items-center h-dvh w-screen sm:w-3/4'>
        <div className='flex flex-row h-66 bg-white'>
          {/* <InfoBox songValue={songValue} /> */}
          <InfoBox
            data={data}
            loading={loading}
            error={error}
            songValue={songValue}
            _id={_id}
          />
          {/* <div className='bg-white flex h-64 min-w-72 opacity-90 border-2 border-solid border-slate-600'>
            hiWEfawefawefawfwe
          </div> */}
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

        <div className={` mt-16 ${songValue ? '' : ''}`}>
          {/* <div className={` mt-16 ${songValue ? '' : 'invisible'}`}> */}
          {/* {songValue ? <AddSongModal /> : <AddSetModal /s>} */}

          {songValue ? (
            <AddSongModal data={data} loading={loading} error={error} />
          ) : (
            <AddSetModal
              data2={data}
              loading={loading}
              error={error}
              userId={_id}
            />
          )}
          {/* {songValue ? <AddSongModal /> : <AddSetModal userId={_id} />} */}
        </div>
        <SongSetButton songValue={songValue} />
      </div>
    </div>
  )
}
