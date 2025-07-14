const Lyrics = ({ lyrics }) => {
  return (
    <div className='zorbit norbit'>
      <div className='pt-3'>
        <textarea rows='100' cols='25' className=''>
          {lyrics}
        </textarea>
      </div>
    </div>
  )
}

export default Lyrics
