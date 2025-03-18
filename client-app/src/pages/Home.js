import { useState, useContext } from 'react'

import { useQuery } from '@apollo/client'
import { GET_SET_BY_USER } from '../queries/setQueries'

import { AUTH_TOKEN } from '../constants'
import { dayCode } from '../utils/decode'
import { RefreshContext } from '../context/context'

import Header from '../components/Header'
import Login from '../components/Login'
import InfoBox from '../components/InfoBox'

import LogoutButton from '../components/LogoutButton'

import RadioButton from '../components/RadioButton'
import SongSetButton from '../components/SongSetButton'

import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'

export default function Home() {
  const refRetch = useContext(RefreshContext)
  const [songValue, setSong] = useState(false)
  const [setValue, setSet] = useState(true)
  const [visible, setVisible] = useState(false)

  const token = localStorage.getItem(AUTH_TOKEN)
  const unToken = dayCode(token)

  const { _id } = unToken.data

  const { data, loading, error } = useQuery(GET_SET_BY_USER, {
    variables: { userId: _id },
  })

  const handleChange = () => {
    refRetch()

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

      <div className='flex flex-col items-center bg-white w-5/6'>
        {/* <div className='flex flex-col items-center h-dvh w-96 sm:w-3/4'> */}
        <RefreshContext.Provider value={refRetch}>
          <InfoBox
            data2={data}
            loading2={loading}
            error2={error}
            songValue={songValue}
            _id={_id}
          />
        </RefreshContext.Provider>
        <div className='flex flex-col'>
          <div
            className={`duration-200 flex flex-row ml-3  ${
              songValue ? '' : 'translate-x-32'
            }`}
          >
            .
          </div>
          <div className='flex flex-row gap-x-24 mb-2'>
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
        <div className={`duration-75 mt-16 h-16 ${visible ? '' : 'h-64'}`}>
          {!visible ? (
            <div>
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
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className='flex flex-col gap-y-4'>
          <SongSetButton
            visible={visible}
            setVisible={setVisible}
            songValue={songValue}
          />
          {visible && <LogoutButton />}
        </div>
      </div>
    </div>
  )
}
