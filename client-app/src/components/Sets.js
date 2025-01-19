import { useQuery } from '@apollo/client'
import SetRow from './SetRow'
import Spinner from './Spinner'
import { GET_SET_BY_USER } from '../queries/setQueries'

export default function Sets({ data, loading, error, userId }) {
  console.log('Sets userId:', userId)

  // const { loading, error, data } = useQuery(GET_SET_BY_USER, {
  //   variables: { userId: userId },
  // })
  // const { loading, error, data } = useQuery(GET_SETS)
  // console.log('SET DATA: ', data)
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
            <SetRow key={set.id} set={set} songs={data} />
          ))}
        </div>
      )}
      {/* {!loading && !error && (
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {data.setByUser.map((set) => (
              <SetRow key={set.id} set={set} songs={data} />
            ))}
          </tbody>
        </table>
      )} */}
    </>
  )
}
