import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { FaList } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'
import { setModal } from '../../src/styles/headerStyles'

import Modal from 'react-modal'

// import { GET_USERS } from '../queries/userQueries'

// import { button } from '../../src/styles/headerStyles'

Modal.setAppElement('#root')

export default function AddSetModal({ userId }) {
  const [name, setName] = useState('')
  const [sluserId, setSluserId] = useState(userId)
  const [modalIsOpen, setIsOpen] = useState(false)
  // setSluserId(userId)
  // const navigate = useNavigate()
  console.log('add set user id: ', userId)
  const [addSet, { data, loading, error }] = useMutation(ADD_SET, {
    variables: { name: name, userId: userId },
    refetchQueries: [GET_SETS, 'slutByUser'],
    onCompleted: () => console.log('data from addset cache: ', data),
    update(cache, { data: { addSet } }) {
      console.log(data)
      // const { sets } = cache.readQuery({ query: GET_SET_BY_USER })
      // const { sets } = cache.readQuery({ query: GET_SETS })
      console.log(cache.readQuery({ query: GET_SETS }))
      // console.log('SETS cache: ', sets)
      // cache.writeQuery({
      //   query: GET_SETS,
      //   data: { sets: [...sets, addSet] },
      // })
    },
  })

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name === '') {
      return alert('Please fill in all fields')
    }

    addSet(name, sluserId)
    // addSet(name, userId)
    setName('')

    closeModal()
  }
  if (loading) return null
  if (error) return 'something went wrong'

  return (
    <>
      {!loading && !error && (
        <>
          <button type='button' onClick={openModal}>
            <div className=''>
              <FaList className='icon' />
              <div>New Set</div>
            </div>
          </button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
          >
            <div>
              <div style={setModal}>
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
          </Modal>
        </>
      )}
    </>
  )
}
