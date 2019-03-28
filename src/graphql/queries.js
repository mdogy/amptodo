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
export const getRadoobj = `query GetRadoobj($id: ID!) {
  getRadoobj(id: $id) {
    id
    name
  }
}
`;
export const listRadoobjs = `query ListRadoobjs(
  $filter: ModelradoobjFilterInput
  $limit: Int
  $nextToken: String
) {
  listRadoobjs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
