import {GET_PAGE_BY_ID} from '../src/queries/pages/get-page';
import LOGIN from '../src/queries/mutations/login';
import { v4 } from 'uuid';
import { initializeApollo, addApolloState } from '../src/apollo/client';

// export async function getPreviewPage( id ) {
// 	const apolloClient = initializeApollo();

// 	const { data } = await apolloClient.query( {
// 		query: GET_PAGE_BY_ID,
// 		variables: {
// 			id: Number( id ),
// 		},
// 	} );

// 	return addApolloState( apolloClient, {
// 		props: data || {},
// 		revalidate: 10,
// 	} );
// }


export async function loginUser( {username, password} ) {
	const apolloClient = initializeApollo();
	console.log( 'password', password );
	const { data } = await apolloClient.mutate( {
		mutation: LOGIN,
		variables: {
			input: {
				clientMutationId: v4(),
				username: username || '',
				password: password || '',
			},
		},
	} );
   console.log( 'LoginData', data );
return addApolloState( apolloClient, {
		props: data || {},
		revalidate: 10,
	} );
}
