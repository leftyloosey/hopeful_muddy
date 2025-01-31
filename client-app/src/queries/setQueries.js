import { gql } from '@apollo/client'

const GET_SETS = gql`
  query getSets {
    sets {
      id
      name
      userId {
        id
      }
    }
  }
`
const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`
const GET_SET_BY_USER = gql`
  query slutByUser($userId: ID!) {
    setByUser(userId: $userId) {
      id
      name
      userId {
        name
        id
      }
    }
  }
`

export { GET_SETS, GET_USERS, GET_SET_BY_USER }
