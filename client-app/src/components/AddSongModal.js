import { useState } from 'react'
// import { FaMusic } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SONG } from '../mutations/songMutations'
import { GET_SONGS } from '../queries/songQueries'

export default function AddSongModal({ loading, error, data }) {
  const [name, setName] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [setId, setSetId] = useState('')
  const [status, setStatus] = useState('opener')
  const [length, setLength] = useState('short')

  const [addSong] = useMutation(ADD_SONG, {
    refetchQueries: [GET_SONGS, 'getSongs'],
    variables: { name, lyrics, setId, status, length },
  })

  const onSubmit = (e) => {
    e.preventDefault()

    if (
      name === '' ||
      lyrics === '' ||
      status === '' ||
      length === '' ||
      setId === ''
    ) {
      return alert('Please fill in all fields')
    }

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
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <div className='mb-3'>
                  <label className='form-label'>Song Name: </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className='form-label'>Lyrics: </label>
                  <input
                    className='form-control'
                    id='description'
                    value={lyrics}
                    onChange={(e) => setLyrics(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <div>
                  <label className='form-label'>Status</label>
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

                <div className='mb-3'>
                  <label className='form-label'>Length</label>
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
                  <label className='form-label'>Set</label>
                  <select
                    id='setId'
                    className='form-select'
                    value={setId}
                    onChange={(e) => setSetId(e.target.value)}
                  >
                    <option value=''>Select Set</option>
                    {data.setByUser.map((set) => (
                      <option key={set.id} value={set.id}>
                        {set.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-primary'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}
