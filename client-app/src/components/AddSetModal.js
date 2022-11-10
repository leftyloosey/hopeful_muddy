import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'
// import { GET_USERS } from '../queries/userQueries';

import { container2, container3, button } from '../../src/styles/headerStyles'

export default function AddSetModal(props) {
  // const { data } = useQuery(GET_USERS);

  const [name, setName] = useState('')
  // const [userId, setUserId] = useState('');

  const [addSet] = useMutation(
    ADD_SET,
    {
      variables: { name },
      update(cache, { data: { addSet } }) {
        const { sets } = cache.readQuery({ query: GET_SETS })

        cache.writeQuery({
          query: GET_SETS,
          data: { sets: [...sets, addSet] },
        })
      },
    }
    // useQuery(GET_USERS)
  )

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '') {
      return alert('Please fill in all fields')
    }

    addSet(name)

    setName('')
    // setUserId('');
  }

  return (
    <>
      <button
        type='button'
        style={button}
        data-toggle='modal'
        data-target='#addSetModal'
      >
        <div className='d-flex align-items-center'>
          <FaList className='icon' />
          <div>New Set</div>
        </div>
      </button>

      {/* <div
        className='modal fade'
        id='addSetModal'
        aria-labelledby='addSetModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addSetModalLabel'>
                Add Set
              </h5>
              <button
                type='button'
                className='btn-close'
                data-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
