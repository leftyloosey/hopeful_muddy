import { useQuery } from '@apollo/client'
import SetRow from './SetRow'
import Spinner from './Spinner'
import { GET_SETS } from '../queries/setQueries'

export default function Sets() {
  const { loading, error, data } = useQuery(GET_SETS)

  if (loading) return <Spinner />
  if (error) return <p>something wrong</p>

  return (
    <>
      {!loading && !error && (
        <table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {data.sets.map((set) => (
              <SetRow key={set.id} set={set} songs={data} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
