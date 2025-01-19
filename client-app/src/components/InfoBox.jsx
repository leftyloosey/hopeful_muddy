import { useState } from 'react'
import Songs from './Songs'
import Sets from './Sets'

const InfoBox = ({ data, loading, error, songValue, _id }) => {
  // const [songValue, setSong] = useState(false)
  // const [setValue, setSet] = useState(true)

  // const handleChange = () => {
  //   if (setValue) {
  //     setSet(false)
  //     setSong(true)
  //   } else if (!setValue) {
  //     setSet(true)
  //     setSong(false)
  //   }
  // }
  console.log(songValue)

  return (
    <>
      <div className='border-2 border-solid border-slate-600 h-64 min-h-64 max-h-64 min-w-36 w-36 max-w-36 overflow-scroll'>
        {/* <div className=''> */}
        {songValue ? (
          <Songs />
        ) : (
          // <Songs !!!! songs={songs}/>
          <Sets data={data} loading={loading} error={error} userId={_id} />
        )}
        {/* {songValue ? <Songs /> : <Sets userId={_id} />} */}
        {/* </div> */}
      </div>
    </>
  )
}

export default InfoBox
