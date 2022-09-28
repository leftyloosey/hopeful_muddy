import { gql } from '@apollo/client'

const GET_SONGS = gql`
  query getSongs {
    songs {
        id
        name
        status
    }
  }
  `
  const GET_SONG = gql`
  query getSong($id: ID!) {
    song(id: $id) {
        id
        name
        status
        description
        set {
            id
            name
            email 
            phone
        }
    }
  }
  `


  export { GET_SONGS, GET_SONG }