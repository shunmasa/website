import { gql } from '@apollo/client';
import ImageFragment from '../fragments/image';


export const GET_POST_BY_ID = gql`
query GET_POST_BY_ID($postId: Int!) {
  postBy(postId: $postId) {
      content
      modified
      postId
      title
      uri
      isPreview
      link
      slug
      featuredImage {
        node {
          ...ImageFragment
        }
    }
}
}
${ImageFragment}
`;
