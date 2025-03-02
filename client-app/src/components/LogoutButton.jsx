import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AUTH_TOKEN } from '../constants'

const LogoutButton = () => {
  // const [yank, setYank] = useState(false)
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)
  return (
    <div>
      <div>
        {authToken ? (
          <div className='btn duration-200 border-2 border-solid border-red-900  shadow-xl shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
            <button
              // className='btn2 duration-200 border-2 border-solid border-gray-900 rounded-2xl pt-0 p-2 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'
              // className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'
              // onMouseEnter={() => console.log('in')}
              // onMouseLeave={() => console.log('out')}
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/login`)
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <button className='btn2 duration-200 border-2 border-solid border-gray-900 rounded-2xl pt-0 p-2 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
            {/* <button className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'> */}
            <Link to='/login'>login</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default LogoutButton
