// import pigeon from '../assets/pigeon.ico'
import { useState } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const [yank, setYank] = useState(false)
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <nav className='mt-10 flex flex-col justify-center items-center w-5/6'>
      <div className='gap-x-28 flex flex-row justify-between -translate-y-4'>
        {/* <div className=''> */}
        <div className='flex flex-col text-2xl '>
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
      </div>
    </nav>
  )
}
