import { gql } from '@apollo/client'

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`

const UPDATE_SONG = gql`
  mutation UpdateSong(
    $id: ID!
    $name: String
    $length: SongLengthUpdate
    $lyrics: String
    $status: SongStatusUpdate
    $setId: ID
  ) {
    updateSong(
      id: $id
      name: $name
      length: $length
      lyrics: $lyrics
      status: $status
      setId: $setId
    ) {
      id
      name
      length
      lyrics
      status
      set {
        id
        name
      }
    }
  }
`
const ADD_SONG = gql`
  mutation AddSong(
    $name: String!
    $lyrics: String!
    $status: SongStatus!
    $setId: ID!
    $length: SongLength!
  ) {
    addSong(
      name: $name
      lyrics: $lyrics
      status: $status
      length: $length
      setId: $setId
    ) {
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

export { ADD_SONG, DELETE_SONG, UPDATE_SONG }
