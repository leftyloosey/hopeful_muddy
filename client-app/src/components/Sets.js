import { useQuery } from '@apollo/client'
import SetRow from './SetRow'
import Spinner from './Spinner'
import { GET_SET_BY_USER } from '../queries/setQueries'

export default function Sets({ userId }) {
  console.log(userId)
  const { loading, error, data } = useQuery(GET_SET_BY_USER, {
    variables: { userId: userId },
  })
  // const { loading, error, data } = useQuery(GET_SETS)
  console.log('SET DATa: ', data)
  if (loading) return <Spinner />
  if (error) {
    console.log(error)
    return <p>something wrong</p>
  }

  return (
    <>
      {!loading && !error && (
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
      )}
    </>
  )
}
