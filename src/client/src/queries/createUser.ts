import { gql, GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:3001/graphql'

const client = new GraphQLClient(endpoint, { headers: {} })

export function createUser (login: string, password: string) {
  console.log('FROM REQUEST')
  return client.request(
    gql`
      mutation registration($login: String!, $password: String!) {
        createUser(userInput: { login: $login, password: $password }) {
          _id
          login
          password
        }
      }
    `,
    { token }
  )
}
