import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SONG } from '../mutations/songMutations';
import { GET_SONGS } from '../queries/songQueries';
import { GET_SETS } from '../queries/setQueries';

export default function AddSongModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [setId, setSetId] = useState('');
  const [status, setStatus] = useState('new');

  const [addSong] = useMutation(ADD_SONG, {
    variables: { name, description, setId, status },
    update(cache, { data: { addSong } }) {
      const { songs } = cache.readQuery({ query: GET_SONGS });
      cache.writeQuery({
        query: GET_SONGS,
        data: { songs: [...songs, addSong] },
      });
    },
  });

  // Get Sets for select
  const { loading, error, data } = useQuery(GET_SETS);
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    addSong(name, description, setId, status);

    setName('');
    setDescription('');
    setStatus('new');
    setSetId('');
  };

  if (loading) return null;
  if (error) return 'Something Went Wrong';

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#addSongModal'
          >
            <div className='d-flex align-items-center'>
              <FaList className='icon' />
              <div>New Song</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addSongModal'
            aria-labelledby='addSongModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addSongModalLabel'>
                    New Song
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
                    <div className='mb-3'>
                      <label className='form-label'>Description</label>
                      <textarea
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Status</label>
                      <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
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
                        {data.sets.map((set) => (
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}