// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodoItem = `query GetTodoItem($id: ID!) {
  getTodoItem(id: $id) {
    id
    title
    description
  }
}
`;
export const listTodoItems = `query ListTodoItems(
  $filter: ModelTodoItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodoItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
    }
    nextToken
  }
}
`;
