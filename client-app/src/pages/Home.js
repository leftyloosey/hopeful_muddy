import { useQuery } from '@apollo/client'
import Login from '../components/Login'
import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'
import Songs from '../components/Songs'
import Sets from '../components/Sets'
import { GET_USERS } from '../queries/setQueries'
import { AUTH_TOKEN } from '../constants'
import {
  outerDiv,
  rightBody,
  leftBody,
  songDiv,
} from '../../src/styles/headerStyles'
import { useState } from 'react'
import RadioButton from '../components/RadioButton'

export default function Home() {
  const [songValue, setSong] = useState(false)
  const [setValue, setSet] = useState(true)

  const handleChange = () => {
    if (setValue) {
      setSet(false)
      setSong(true)
    } else if (!setValue) {
      setSet(true)
      setSong(false)
    }
  }

  const { data } = useQuery(GET_USERS)
  const token = localStorage.getItem(AUTH_TOKEN)
  if (!token) {
    return <Login />
  }
  return (
    <>
      <div style={outerDiv}>
        <div style={leftBody}>
          <AddSetModal props={data} />
          <AddSongModal />
        </div>
        <div style={rightBody}>
          <div>
            <RadioButton
              label='songs'
              value={songValue}
              onChange={handleChange}
            />
            <RadioButton
              label='sets'
              value={setValue}
              onChange={handleChange}
            />
          </div>
          <div style={songDiv}>{songValue ? <Songs /> : <Sets />}</div>
        </div>
      </div>
    </>
  )
}
