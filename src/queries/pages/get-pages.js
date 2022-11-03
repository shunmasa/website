import { gql } from '@apollo/client';

export const GET_PAGES_URI = gql`
 query GET_PAGES_URI {
  pages: pages{
    nodes {
      id
      uri
    }
  }
 }
 `;
