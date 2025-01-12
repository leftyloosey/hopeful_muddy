import { useQuery } from '@apollo/client'
import Login from '../components/Login'
import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'
import InfoBox from '../components/InfoBox'
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
  console.log(songValue)
  const handleChange = () => {
    if (setValue) {
      setSet(false)
      setSong(true)
    } else if (!setValue) {
      setSet(true)
      setSong(false)
    }
  }

  const token = localStorage.getItem(AUTH_TOKEN)
  const stuff = dayCode(token)
  console.log(stuff)
  const { _id } = stuff.data
  const { data } = useQuery(GET_SET_BY_USER, {
    variables: { userId: _id },
  })
  // console.log('SET_BY_USER: ', data)
  // if (!token) {
  //   return <Login />
  // }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-gradient-to-b from-cyan-600 flex flex-col items-center h-dvh w-5/6'>
        <div className='flex flex-col mt-12'>
          <div
            className={`duration-500 flex flex-row gap-x-44 mb-2 ml-4 ${
              songValue ? '' : 'translate-x-56'
            }`}
          >
            ....
          </div>

          <div className='flex flex-row gap-x-44 mb-2'>
            <RadioButton
              label='Song'
              value={songValue}
              handleChange={handleChange}
            />
            <RadioButton
              label='Sets'
              value={setValue}
              handleChange={handleChange}
            />
          </div>
        </div>

        <InfoBox songValue={songValue} _id={_id} />

        <div className=''>
          {songValue ? <AddSongModal /> : <AddSetModal userId={_id} />}
        </div>
      </div>
      <Header />
    </div>
  )
}
