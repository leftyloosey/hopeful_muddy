import { gql } from '@apollo/client'

const GET_SETS = gql`
    query getSets {
        sets {
            id
            name

        }
    }
`
export { GET_SETS }