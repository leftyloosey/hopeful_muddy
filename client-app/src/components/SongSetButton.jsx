import React from 'react'
import { FaList, FaMusic } from 'react-icons/fa'

const SongSetButton = ({ setVisible, visible, songValue }) => {
  return (
    <div>
      {!songValue ? (
        <button
          onClick={() => {
            setVisible(!visible)
            console.log(visible)
          }}
          type='button'
        >
          <div className='btn2 duration-200 border-2 border-solid border-gray-900 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
            <FaList style={{ color: '#00e676' }} className='icon text-2xl' />
          </div>
        </button>
      ) : (
        <button
          onClick={() => {
            setVisible(!visible)
            console.log(visible)
          }}
          type='button'
        >
          <div className='btn2 duration-200 border-2 border-solid border-gray-900 shadow-sm shadow-gray-900 -translate-y-1 hover:translate-y-1 hover:shadow-sm hover:border-0'>
            <FaMusic
              style={{
                color: '#00e676',
              }}
              className='text-2xl'
            />
          </div>
        </button>
      )}
    </div>
  )
}

export default SongSetButton
