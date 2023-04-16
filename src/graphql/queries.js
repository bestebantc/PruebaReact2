/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      s1
      s2
      s3
      s4
      s5
      s6
      s7
      s8
      s9
      s10
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        s1
        s2
        s3
        s4
        s5
        s6
        s7
        s8
        s9
        s10
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
