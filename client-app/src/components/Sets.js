// import { useQuery } from '@apollo/client'
import SetRow from './SetRow'
import Spinner from './Spinner'
// import { GET_SET_BY_USER } from '../queries/setQueries'

export default function Sets({ refetch, data, loading, error }) {
  if (loading) return <Spinner />
  if (error) {
    console.log(error)
    return <p>something wrong</p>
  }

  return (
    <>
      {!loading && !error && (
        <div>
          {data.setByUser.map((set) => (
            <SetRow refetch2={refetch} key={set.id} set={set} songs={data} />
          ))}
        </div>
      )}
    </>
  )
}
