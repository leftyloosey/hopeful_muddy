import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_SET } from '../mutations/setMutations'
import { GET_SET_BY_USER } from '../queries/setQueries'
import { GET_SONGS_BY_SET } from '../queries/songQueries'
import { useQuery } from '@apollo/client'
import { RefreshContext, SetCardContext } from '../context/context'

export default function SetRow({ set }) {
  const { loading, error, data, refetch } = useQuery(GET_SONGS_BY_SET, {
    variables: { set: set.id },
  })
  const refRetch = useContext(RefreshContext)
  // eslint-disable-next-line no-unused-vars
  const [screenSongs, setScreenSongs] = useContext(SetCardContext)
  if (refRetch) {
    console.log('heyoo refresh')
    refetch()
  }
  // const [scr, setScr] = useState(false)

  // const handle = () => {
  //   setScr(!scr)
  //   if (scr) {
  //     setScreenSongs(data)
  //   } else {
  //     setScreenSongs(null)
  //   }
  // }
  const [deleteSet] = useMutation(DELETE_SET, {
    variables: { id: set.id },
    refetchQueries: [GET_SET_BY_USER, 'slutByUser'],
    // update(cache, { data: { deleteSet } }) {},
  })

  return (
    <>
      {!loading && !error && (
        <button
          // role='button'
          // onClick={() => {
          //   handle()
          // }}
          onFocus={() => {
            setScreenSongs(data)
          }}
          onBlur={() => setScreenSongs(null)}
          className={`bg-white opacity-90 h-16 min-w-36 max-w-36 border-b-2 border-dashed ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-b-0'`}
        >
          <div className='flex flex-row justify-between'>
            <div className='flex items-center pt-4'>
              <button
                className=''
                onClick={() => {
                  setScreenSongs(null)
                  deleteSet()
                }}
              >
                <FaTrash />
              </button>
              <span
              // className='w-32 h-14 bg-red-'
              // onFocus={() => setScreenSongs(data)}
              // onBlur={() => setScreenSongs(null)}
              >
                {set.name}
              </span>
            </div>
          </div>
        </button>
      )}
    </>
  )
}
