import { FaList } from 'react-icons/fa'

export default function SetInfo({ set }) {
  // console.log(set)
  return (
    <>
      <div className='flex flex-row gap-x-4'>
        {set}
        <FaList className='icon' />
      </div>
    </>
  )
}
