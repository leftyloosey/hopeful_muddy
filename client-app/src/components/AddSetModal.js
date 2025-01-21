import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { FaList } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'

// Modal.setAppElement('#root')

export default function AddSetModal({ loading2, error2, userId }) {
  const [name, setName] = useState('')
  const [sluserId] = useState(userId)

  const [addSet, { data, loading, error }] = useMutation(ADD_SET, {
    variables: { name: name, userId: userId },
    refetchQueries: [GET_SETS, 'slutByUser'],
    // onCompleted: () => console.log('data from addset cache: ', data),
    // update(cache, { data: { addSet } }) {
    // const { sets } = cache.readQuery({ query: GET_SETS })
    // },
  })

  // function openModal() {
  //   setIsOpen(true)
  // }

  // function afterOpenModal() {}

  // function closeModal() {
  //   setIsOpen(false)
  // }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '') {
      return alert('Please fill in all fields')
    }

    addSet(name, sluserId)
    setName('')

    // closeModal()
  }
  if (loading2) return null
  if (error2) return 'something went wrong'

  return (
    <>
      {!loading && !error && (
        <>
          {/* <button type='button'>
          <div className=''>
            <FaList className='icon' />
            <div>New Set</div>
          </div>
        </button> */}
          {/* 
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
          > */}
          <div>
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
          </div>
          {/* </Modal> */}
        </>
      )}
    </>
  )
}
