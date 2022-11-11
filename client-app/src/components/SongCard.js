import {
  songTitle,
  outerSong,
  linkStyles,
  linkStylesEnter,
} from '../../src/styles/headerStyles'
import { FaMusic } from 'react-icons/fa'

export default function SongCard({ song }) {
  //   const enter = (e) => {
  //     e.target.style.color = 'lightgrey'
  //   }
  //   const leave = (e) => {
  //     e.target.style.color = 'black'
  //   }

  return (
    <div style={outerSong}>
      <div style={songTitle}>
        <span>
          <FaMusic className='icon' />

          <a
            style={linkStyles}
            // onMouseEnter={enter}
            // onMouseLeave={leave}
            href={`/song/${song.id}`}
          >
            {song.name}
          </a>

          <strong> {song.status}</strong>
          {song.description}
        </span>
      </div>
    </div>
  )
}
