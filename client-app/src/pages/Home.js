import { useQuery } from '@apollo/client'
import Login from '../components/Login'
import AddSetModal from '../components/AddSetModal'
import AddSongModal from '../components/AddSongModal'
import Songs from '../components/Songs'
// import Sets from '../components/Sets'
import { GET_USERS } from '../queries/setQueries'
import { AUTH_TOKEN } from '../constants'
import { outerDiv, rightBody, leftBody } from '../../src/styles/headerStyles'

export default function Home() {
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
          <Songs />
          {/* <Sets /> */}
        </div>
      </div>
    </>
  )
}
