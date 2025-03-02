import { useState, useEffect } from 'react'
import SetRow from './SetRow'
import Spinner from './Spinner'

export default function Sets({ songValue, data, loading, error }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  if (loading) return <Spinner />
  if (error) {
    return <p>something wrong</p>
  }

  return (
    <div
      className={`ml-12 duration-500 ${
        isVisible ? 'translate-x-' : 'translate-x-16'
      }`}
    >
      {!loading && !error && (
        <div className='w-64 min-w-64 max-w-64 h-64 min-h-64 max-h-64 overflow-y-scroll'>
          {data.setByUser.map((set) => (
            <SetRow key={set.id} set={set} songs={data} />
          ))}
        </div>
      )}
    </div>
  )
}
