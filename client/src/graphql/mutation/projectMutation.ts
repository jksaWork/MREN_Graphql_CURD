import { gql } from "@apollo/client";
export const DELETE_PROJECT_MUTATION = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
      description
      status
    }
  }
`;

export const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProjectMutaion(
    $name: String!
    $status: Projects!
    $description: String!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      client {
        name
        email
      }
    }
  }
`;

export const EDIT_PROJECT_MUTATION = gql`
  mutation EditProjectMutaion(
    $name: String!
    $status: ProjectStatusUpdate!
    $description: String!
    $id: ID!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      client {
        name
        email
      }
    }
  }
`;
