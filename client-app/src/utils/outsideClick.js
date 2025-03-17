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
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [ref, callback])

  return ref
}
export default useOutsideClick
