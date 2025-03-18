// import pigeon from '../assets/pigeon.ico'
import { useState } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  // const [yank, setYank] = useState(false)
  // const navigate = useNavigate()
  // const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <nav className='bg-white pt-4 pb-10 flex flex-col justify-center items-center w-5/6'>
      <div className='flex flex-col text-4xl '>Set Lists</div>
    </nav>
  )
}
