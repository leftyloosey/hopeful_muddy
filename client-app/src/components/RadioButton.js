const RadioButton = ({ label, handleChange }) => {
  return (
    <button className='text-slate-400 bg-slate-700  duration-200 border-2 border-solid border-slate-600 rounded-2xl p-1 shadow-sm shadow-slate-700 -translate-y-1 active:translate-y-1 active:shadow-sm '>
      <div onClick={handleChange}>{label}</div>
    </button>
  )
}

export default RadioButton
