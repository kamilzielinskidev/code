import gql from "graphql-tag";
export const PRODUCTS_QUERY = gql`
  query MyQuery {
    products {
      id
      name
    }
  }
`;
