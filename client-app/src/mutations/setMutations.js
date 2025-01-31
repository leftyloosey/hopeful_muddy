import { gql } from '@apollo/client'

const ADD_SET = gql`
  mutation AddSet($name: String!, $userId: ID!) {
    addSet(name: $name, userId: $userId) {
      id
      name
    }
  }
`

const DELETE_SET = gql`
  mutation DeleteSet($id: ID!) {
    deleteSet(id: $id) {
      id
      name
    }
  }
`

export { DELETE_SET, ADD_SET }
