import SetRow from './SetRow'
import Spinner from './Spinner'

export default function Sets({
  screenSongs,
  setScreenSongs,
  refetch,
  data,
  loading,
  error,
}) {
  // console.log(data)
  if (loading) return <Spinner />
  if (error) {
    return <p>something wrong</p>
  }

  return (
    <>
      {!loading && !error && (
        <div className='w-36 min-w-36 max-w-36 h-64 min-h-64 max-h-64'>
          {data.setByUser.map((set) => (
            <SetRow
              screenSongs={screenSongs}
              setScreenSongs={setScreenSongs}
              // refetch2={refetch}
              key={set.id}
              set={set}
              songs={data}
            />
          ))}
        </div>
      )}
    </>
  )
}
