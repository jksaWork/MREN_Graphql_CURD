import { gql, DocumentNode } from "@apollo/client";
export const FETCH_CLIENT_QUERY: DocumentNode = gql`
  {
    clients {
      id
      email
      name
      phone
    }
  }
`;
