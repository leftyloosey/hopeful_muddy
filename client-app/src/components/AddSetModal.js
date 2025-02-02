import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'

export default function AddSetModal({ loading2, error2, userId }) {
  const [name, setName] = useState('')
  const [sluserId] = useState(userId)

  const [addSet, { loading, error }] = useMutation(ADD_SET, {
    variables: { name: name, userId: userId },
    refetchQueries: [GET_SETS, 'slutByUser'],
    // update(cache, { data: { addSet } }) {
    // const { sets } = cache.readQuery({ query: GET_SETS })
    // },
  })

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '') {
      return alert('Please fill in all fields')
    }

    addSet(name, sluserId)
    setName('')
  }
  if (loading2) return null
  if (error2) return 'something went wrong'

  return (
    <>
      {!loading && !error && (
        <>
          <div>
            <form onSubmit={onSubmit}>
              <div>
                <label className='form-label'>Set Name: </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button type='submit'>Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  )
}
