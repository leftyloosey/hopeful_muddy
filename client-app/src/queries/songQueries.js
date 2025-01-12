import { gql } from '@apollo/client'

const GET_SONGS = gql`
  query getSongs {
    songs {
      id
      name
      lyrics
      status
      length
      set {
        id
        name
      }
    }
  }
`
const GET_SONG = gql`
  query getSong($id: ID!) {
    song(id: $id) {
      id
      name
      status
      length
      lyrics
      set {
        id
        name
      }
    }
  }
`
const GET_SONGS_BY_SET = gql`
  query songBySet($set: ID!) {
    songBySet(set: $set) {
      id
      name
      status
      length
      lyrics
      set {
        id
        name
      }
    }
  }
`

export { GET_SONGS, GET_SONG, GET_SONGS_BY_SET }
