import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa"

export default function SetInfo({ set }) {
  return <>
  <h5 className="mt-5">Set Information</h5>
  <ul className="list-group">
    <li className="list-group-item">
        <FaIdBadge className="icon" /> {set.name}
    </li>
    <li className="list-group-item">
        <FaEnvelope className="icon" /> {set.email}
    </li>
    <li className="list-group-item">
        <FaPhone className="icon" /> {set.phone}
    </li>
  </ul>
  </>
}