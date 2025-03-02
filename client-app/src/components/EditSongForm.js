import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { GET_SETS } from '../queries/setQueries'
import { UPDATE_SONG } from '../mutations/songMutations'

export default function EditSongForm({ data, songTitle, song }) {
  useEffect(() => {
    setName(song.name)
    setLyrics(song.lyrics)
    setLength(song.length)
    setStatus(song.status)
    setSet(song.set.id)
  }, [song.name, song.lyrics, song.status, song.length, song.set, songTitle])

  const [name, setName] = useState(song.name)
  const [lyrics, setLyrics] = useState(song.lyrics)
  const [status, setStatus] = useState(song.status)
  const [length, setLength] = useState(song.length)
  const [set, setSet] = useState(song.set.id)

  const [updateSong] = useMutation(UPDATE_SONG, {
    variables: { id: song.id, name, lyrics, status, length, setId: set },
    refetchQueries: [{ query: GET_SETS }],
  })
  const onSubmit = (e) => {
    e.preventDefault()
    // if (!name || !description || !status || !length) {
    //   return alert('please complete fields.')
    // }
    updateSong(name, lyrics, status, length, set)
  }
  return (
    <div className='bg-white' key={song.id}>
      <form onSubmit={onSubmit}>
        <div>
          <label className=' form-label'>
            {/* <span className='zorbit'>〔</span> */}
            new name:
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className=''>
          <label className='form-label'>lyrics: </label>
          <input
            className='form-control'
            id='description'
            value={lyrics}
            onChange={(e) => setLyrics(e.target.value)}
          ></input>
        </div>

        <div className=''>
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

        <div className=''>
          {/* <label className='form-label'>Set</label> */}
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
          {/* <span className='zorbit'>〕</span> */}
        </div>

        <button className='pl-12 pt-2' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
