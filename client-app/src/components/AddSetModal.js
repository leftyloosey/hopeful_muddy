import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_SET } from '../mutations/setMutations';
import { GET_SETS } from '../queries/setQueries';

export default function AddSetModal() {
  const [name, setName] = useState('');
  console.log(name)


  const [addSet] = useMutation(ADD_SET, {
    variables: { name },
    update(cache, { data: { addSet } }) {
      const { sets } = cache.readQuery({ query: GET_SETS });

      cache.writeQuery({
        query: GET_SETS,
        data: { sets: [...sets, addSet] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return alert('Please fill in all fields');
    }

    addSet(name);

    setName('');

  };

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-toggle='modal'
        data-target='#addSetModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add Set</div>
        </div>
      </button>

      <div
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
      </div>
    </>
  );
}