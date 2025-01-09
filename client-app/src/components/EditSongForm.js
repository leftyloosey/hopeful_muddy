import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SONG } from '../queries/songQueries'
import { GET_SETS } from '../queries/setQueries'
import { UPDATE_SONG } from '../mutations/songMutations'
import { editSong } from '../styles/headerStyles'

export default function EditSongForm({ songTitle, filteredArray, song }) {
  const { data } = useQuery(GET_SETS)

  function byTitle(song) {
    return song.name === songTitle
  }
  if (filteredArray.length) song = filteredArray.find(byTitle)

  const [name, setName] = useState(song.name)
  const [description, setDescription] = useState(song.description)
  const [status, setStatus] = useState(song.status)
  const [length, setLength] = useState(song.length)
  const [set, setSet] = useState(song.set.name)

  const [updateSong] = useMutation(UPDATE_SONG, {
    variables: { id: song.id, name, description, status, length, setId: set },
    refetchQueries: [{ query: GET_SONG, variables: { id: song.id } }],
  })

  const onSubmit = (e) => {
    e.preventDefault()

    // if (!name || !description || !status || !length) {
    //   return alert('please complete fields.')
    // }
    updateSong(name, description, status, length, set)
  }

  return (
    <div style={editSong}>
      <form onSubmit={onSubmit}>
        <div style={editSong}>
          <label className='form-label'>new name: </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={editSong}>
          <label className='form-label'>description: </label>
          <input
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
