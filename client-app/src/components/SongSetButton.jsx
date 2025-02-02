import React from 'react'
import { FaList, FaMusic } from 'react-icons/fa'

const SongSetButton = ({ songValue }) => {
  return (
    <div>
      {!songValue ? (
        <button className=' ' type='button'>
          <div className=''>
            <FaList style={{ color: '#00e676' }} className='icon text-2xl' />
          </div>
        </button>
      ) : (
        <button type=''>
          <div className='btn'>
            <FaMusic
              style={{
                color: '#00e676',
              }}
              className='text-2xl '
            />
          </div>
        </button>
      )}
    </div>
  )
}

export default SongSetButton
