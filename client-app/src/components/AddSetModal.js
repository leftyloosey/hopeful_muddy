import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_SET } from '../mutations/setMutations'
import { GET_SETS } from '../queries/setQueries'
import { setModal } from '../../src/styles/headerStyles'

import Modal from 'react-modal'

// import { GET_USERS } from '../queries/userQueries';

import { button } from '../../src/styles/headerStyles'

Modal.setAppElement('#root')

export default function AddSetModal(props) {
  const [name, setName] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const [addSet] = useMutation(ADD_SET, {
    variables: { name },
    update(cache, { data: { addSet } }) {
      const { sets } = cache.readQuery({ query: GET_SETS })

      cache.writeQuery({
        query: GET_SETS,
        data: { sets: [...sets, addSet] },
      })
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

    addSet(name)

    setName('')
    closeModal()
  }

  return (
    <>
      <button type='button' style={button} onClick={openModal}>
        <div>
          <FaList className='icon' />
          <div>New Set</div>
        </div>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
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
  )
}
