import { useState } from 'react'
import Songs from './Songs'
import Sets from './Sets'

const InfoBox = ({ songValue, _id }) => {
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
      <div className='flex flex-row'>
        <div className='bg-slate-700'>
          {songValue ? <Songs /> : <Sets userId={_id} />}
        </div>
        <div className='border-2 border-solid border-slate-600'>stuff</div>
      </div>
    </>
  )
}

export default InfoBox
