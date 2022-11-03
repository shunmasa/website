import { gql } from '@apollo/client';
import MessageFields from '../fragments/messages';

export const  GET_MESSAGES  = gql`
query GET_MESSAGES{
  messages(first: 2) {
    nodes {
      ...MessageFields
    }
}
}
${MessageFields}
 `;
