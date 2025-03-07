import { useRef, useEffect } from 'react'
const useOutsideClick = (callback) => {
  const ref = useRef()
  //   console.log('ref inside', ref)
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback])

  return ref
}
export default useOutsideClick
