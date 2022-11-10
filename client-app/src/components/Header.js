import pigeon from '../assets/pigeon.ico'
import { AUTH_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom'
import {
  navbar,
  navBarLeft,
  navBarRight,
  titleStyle,
} from '../styles/headerStyles.js'

export default function Header() {
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const style = { height: '2rem', width: '2rem' }
  return (
    // <nav className='navbar bg-light mb-4 p-0'>
    <nav style={navbar}>
      <div style={navBarLeft}>
        <div>
          {/* <a className='navbar-brand' href='/'> */}
          <img src={pigeon} style={style} alt='logo' />
        </div>

        <div style={titleStyle}>
          <span>set lists</span>
        </div>
      </div>
      <div style={navBarRight}>
        <div>
          {authToken ? (
            <div
              className='ml1 pointer black'
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/login`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to='/login' className='ml1 no-underline black'>
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
