// import { useState } from 'react'

const RadioButton = ({ label, value, onChange }) => {
  //   const [songValue, setSong] = useState(false)
  //   const [setValue, setSet] = useState(true)

  return (
    <label>
      <input type='radio' checked={value} onChange={onChange} />
      {label}
    </label>
  )
}

export default RadioButton
