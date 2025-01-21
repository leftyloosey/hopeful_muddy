// import { useState } from 'react'
import Songs from './Songs'
import Sets from './Sets'

const InfoBox = ({ refetch, data, loading, error, songValue, _id }) => {
  return (
    <>
      <div className='border-2 border-solid border-slate-600 h-64 min-h-64 max-h-64 min-w-36 w-36 max-w-36 overflow-scroll'>
        {songValue ? (
          <Songs />
        ) : (
          <Sets
            refetch={refetch}
            data={data}
            loading={loading}
            error={error}
            userId={_id}
          />
        )}
      </div>
    </>
  )
}

export default InfoBox
