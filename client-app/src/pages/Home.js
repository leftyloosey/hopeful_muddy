import { useQuery } from '@apollo/client';

import AddSetModal from "../components/AddSetModal"
import AddSongModal from "../components/AddSongModal"
import Songs from "../components/Songs"
import Sets from "../components/Sets"
import { GET_USERS } from "../queries/setQueries"

export default function Home() {
  const { data } = useQuery(GET_USERS);
    return (
      <>
        <div className="d-flex">
          <AddSetModal props={data} />
          <AddSongModal />
        </div>
        <Songs />
        <hr />
        <Sets />
      </>
    )
}