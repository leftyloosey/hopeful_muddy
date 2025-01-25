import { useState } from 'react'

const Lyrics = ({ lyrics }) => {
  return (
    <>
      <p>{lyrics}</p>
    </>
    // <div onBlur={() => setVis(false)}>
    //   <p className={`${vis ? 'visible' : 'invisible'}`}>{lyrics}</p>
    // </div>
  )
}

export default Lyrics
