import { gql } from '@apollo/client';

const ADD_SONG = gql`
  mutation AddSong(
    $name: String!
    $description: String!
    $status: SongStatus!
    $setId: ID!
  ) {
    addSong(
      name: $name
      description: $description
      status: $status
      setId: $setId
    ) {
      id
      name
      description
      status
      set {
        id
        name
        email
        phone
      }
    }
  }
`;

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const UPDATE_SONG = gql`
  mutation UpdateSong(
    $id: ID!
    $name: String!
    $description: String!
    $status: SongStatusUpdate!
  ) {
    updateSong(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      set {
        id
        name
        email
        phone
      }
    }
  }
`;

export { ADD_SONG, DELETE_SONG, UPDATE_SONG };