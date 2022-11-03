import { gql } from '@apollo/client';
import ImageFragment from '../fragments/image';


export const GET_POSTS = gql`
query GET_POSTS {
  posts {
    nodes {
      content
      title
      slug
      uri
      id
      date
      modified
      postId
      featuredImage {
        node{
         ...ImageFragment
        }
        }
    }
  }
}
  ${ImageFragment}
  `;
