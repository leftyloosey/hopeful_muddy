// import pigeon from '../assets/pigeon.ico'
import { AUTH_TOKEN } from '../constants'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const authToken = localStorage.getItem(AUTH_TOKEN)

  // const style = { height: '2rem', width: '2rem' }
  return (
    <nav className='sticky bottom-0 bg-gradient-to-tn from-stone-600 text-orange-400 text-2xl flex flex-col justify-center items-center w-5/6'>
      {/* <nav className='flex flex-col justify-center items-center w-5/6 bg-gradient-to-t from-cyan-600'> */}
      <div className='gap-x-40 md:gap-x-80 flex flex-row justify-between -translate-y-4'>
        <div className=''>
          <div className='duration-200 border-2 border-solid shadow-orange-400 border-orange-400 rounded-2xl shadow-sm pt-0 p-2 -translate-y-1 hover:translate-y-1 hover:shadow-none hover:border-0'>
            Set Lists
          </div>
        </div>
        <div>
          {authToken ? (
            <div
              className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                navigate(`/login`)
              }}
            >
              logout
            </div>
          ) : (
            <div className='duration-200 border-2 border-solid border-orange-400 rounded-2xl pt-0 p-2 shadow-sm shadow-orange-400 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
              <Link to='/login'>login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
