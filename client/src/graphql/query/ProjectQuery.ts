import { gql, DocumentNode } from "@apollo/client";
export const FETCH_PROJECT_QUERY: DocumentNode = gql`
  query fetchProjectQuery {
    projects {
      id
      name
      description
      status
    }
  }
`;
