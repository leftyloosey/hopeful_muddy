// import pigeon from '../assets/pigeon.ico'
import { useState } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [yank, setYank] = useState(false)
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <nav className='mt-10 text-2xl flex flex-col justify-center items-center w-5/6'>
      <div className='gap-x-28 flex flex-row justify-between -translate-y-4'>
        {/* <div className=''> */}
        <div className='flex flex-col'>
          Set Lists
          <div
            className={`text-white text-nowrap text-xs decoration-black duration-150 underline ${
              yank ? 'translate-x-6 ' : ''
            }`}
          >
            Set ListsSet Lists
          </div>
        </div>
        {/* </div>  */}
        <div>
          {authToken ? (
            <button
              className='duration-200 border-2 border-solid border-gray-900 rounded-2xl pt-0 p-2 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'
              // className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'
              onMouseEnter={() => setYank(true)}
              onMouseLeave={() => setYank(false)}
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/login`)
              }}
            >
              logout
            </button>
          ) : (
            <button className='duration-200 border-2 border-solid border-gray-900 rounded-2xl pt-0 p-2 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
              {/* <button className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'> */}
              <Link to='/login'>login</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
