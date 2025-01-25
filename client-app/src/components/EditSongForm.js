import { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SONG } from '../queries/songQueries'
import { GET_SETS } from '../queries/setQueries'
import { UPDATE_SONG } from '../mutations/songMutations'
// import { editSong } from '../styles/headerStyles'

export default function EditSongForm({ songTitle, song }) {
  const { data } = useQuery(GET_SETS)

  const [name, setName] = useState(song.name)
  const [lyrics, setLyrics] = useState(song.lyrics)
  const [status, setStatus] = useState(song.status)
  const [length, setLength] = useState(song.length)
  const [set, setSet] = useState(song.set)

  const [currentTitle, setCurrentTitle] = useState(songTitle)

  console.log(songTitle)
  const [updateSong] = useMutation(UPDATE_SONG, {
    variables: { id: song.id, name, lyrics, status, length, setId: set },
    // refetchQueries: [GET_SETS, 'getSets'],
    refetchQueries: [{ query: GET_SETS }],
    // refetchQueries: [{ query: GET_SONG, variables: { id: song.id } }],
  })
  console.log(data)
  const onSubmit = (e) => {
    e.preventDefault()

    // if (!name || !description || !status || !length) {
    //   return alert('please complete fields.')
    // }
    setCurrentTitle(name)
    updateSong(name, lyrics, status, length, set)
    // setName('')
    // setLyrics('')
  }

  return (
    <div className='bg-purple-300' key={song.id}>
      {currentTitle}
      <form onSubmit={onSubmit}>
        <div>
          <label className='form-label'>
            <span className='text-2xl'>〔</span>new name:
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            // onClick={(e) => e.target.value=''}
          />
        </div>
        <div>
          <label className='form-label'>lyrics: </label>
          <input
            className='form-control'
            id='description'
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          ></input>
        </div>

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

        <div>
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

        <div>
          <label className='form-label'>Set</label>
          <select
            id='set'
            value={set}
            className='form-select'
            onChange={(e) => setSet(e.target.value)}
          >
            {data?.sets?.map((set, index) => (
              <option key={set.id} value={set.id}>
                {set.name}
              </option>
            ))}
          </select>
          <span className='text-2xl'>〕</span>
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
