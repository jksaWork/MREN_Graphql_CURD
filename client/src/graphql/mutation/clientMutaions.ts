import { gql } from "@apollo/client";
export const DELETE_CLIENT_MUTATION = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
