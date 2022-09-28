import AddSetModal from "../components/AddSetModal"
import AddSongModal from "../components/AddSongModal"
import Songs from "../components/Songs"
import Sets from "../components/Sets"

export default function Home() {
    return (
      <>
        <div className="d-flex">
          <AddSetModal />
          <AddSongModal />
        </div>
        <Songs />
        <hr />
        <Sets />
      </>
    )
}