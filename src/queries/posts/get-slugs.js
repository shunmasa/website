import { gql } from '@apollo/client';


export const GET_SLUGS = gql`
query GET_SLUGS {
  posts(first: 10000) {
    nodes {
      postId
    }
}
}
  `;
