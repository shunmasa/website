import { gql } from '@apollo/client';
import GalleryFields from '../fragments/image/gallery';


export const  GET_GALLERY  = gql`
query GET_GALLERY {
  galleries(first: 10) {
    nodes {
      ...GalleryFields
    }
  }
  }
  ${GalleryFields}
`;

