import { useState } from 'react'
// import { FaMusic } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../mutations/songMutations'
import { GET_SONGS } from '../queries/songQueries'

export default function AddSongModal({ loading, error, data }) {
  const [name, setName] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [setId, setSetId] = useState(data.setByUser[0].id)
  const [status, setStatus] = useState('opener')
  const [length, setLength] = useState('short')

  const [addSong] = useMutation(ADD_SONG, {
    refetchQueries: [GET_SONGS, 'getSongs'],
    variables: { name, lyrics, setId, status, length },
  })
  // console.log(data.setByUser[0].id)
  const onSubmit = (e) => {
    e.preventDefault()

    // if (
    //   name === '' ||
    //   lyrics === '' ||
    //   status === '' ||
    //   length === '' ||
    //   setId === ''
    // ) {
    //   return alert('Please fill in all fields')
    // }

    console.log(name, lyrics, setId, status, length)

    addSong(name, lyrics, setId, status, length).catch(error)
    if (!error) {
    }
    setName('')
    setLyrics('')
    setStatus('opener')
    setSetId('')
    setLength('short')
  }

  if (loading) return null
  if (error) return 'something went wrong'

  return (
    <>
      {!loading && !error && (
        <>
          <div className='flex flex-col'>
            <form onSubmit={onSubmit}>
              <div>
                <div className='mb-1'>
                  <label className='form-label font-semibold text-gray-400 text-sm'>
                    New Song Name:{' '}
                  </label>
                  <input
                    autoComplete='off'
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-4'>
                  <label className='form-label font-semibold text-gray-400 text-sm'>
                    Lyrics:{' '}
                  </label>
                  <input
                    autoComplete='off'
                    className='form-control'
                    id='description'
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className='font-semibold text-gray-400 text-sm'>
                <div>
                  {/* <label className='form-label'>Status</label> */}
                  <select
                    id='status'
                    className='form-select'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value='opener'>opener</option>
                    <option value='closer'>closer</option>
                    <option value='other'>other</option>
                  </select>
                </div>

                <div className=''>
                  {/* <label className='form-label'>Length</label> */}
                  <select
                    id='length'
                    className='form-select'
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  >
                    <option value='short'>short</option>
                    <option value='long'>long</option>
                  </select>
                </div>

                <div className='mb-3'>
                  {/* <label className='form-label'>Set</label> */}
                  <select
                    // multiple
                    id='setId'
                    className='form-select'
                    value={setId}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setSetId(e.target.value)
                    }}
                  >
                    {/* <option value=''>Select Set</option> */}
                    {data.setByUser.map((set) => (
                      <option key={set.id} value={set.id}>
                        {set.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='flex justify-center'>
                  <button type='submit' data-bs-dismiss='modal' className='btn'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}
