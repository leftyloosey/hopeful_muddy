import React from 'react'
import { FaList, FaMusic } from 'react-icons/fa'

const SongSetButton = ({ songValue }) => {
  return (
    <div>
      {!songValue ? (
        <button type='button'>
          <div className=''>
            <FaList style={{ color: '#f97316' }} className='icon text-2xl' />
          </div>
        </button>
      ) : (
        <button type='button'>
          <div>
            <FaMusic style={{ color: '#f97316' }} className='icon text-2xl' />
          </div>
        </button>
      )}
    </div>
  )
}

export default SongSetButton
