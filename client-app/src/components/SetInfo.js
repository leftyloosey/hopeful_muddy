import { FaList } from 'react-icons/fa'

export default function SetInfo({ set }) {
  // console.log(set)
  return (
    <>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaList className='icon' /> {set}
        </li>
      </ul>
    </>
  )
}
