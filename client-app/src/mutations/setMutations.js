import { gql } from '@apollo/client'

const ADD_SET = gql`
  mutation addSet($name: String!, $email: String!,
    $phone: String!) {
        addSet(name: $name, email: $email, phone: $phone)
        {
            id
            name
            email
            phone
        }
    }
`
const DELETE_SET = gql`
  mutation deleteSet($id: ID!) {
      deleteSet(id: $id) {
          id
          name
          email
          phone
        }
    }
`

export { DELETE_SET, ADD_SET }