/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getObjeto = /* GraphQL */ `
  query GetObjeto($id: ID!) {
    getObjeto(id: $id) {
      id
      payload_raw
      time
    }
  }
`;
export const listObjetos = /* GraphQL */ `
  query ListObjetos(
    $filter: ModelObjetoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjetos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        payload_raw
        time
      }
      nextToken
    }
  }
`;
