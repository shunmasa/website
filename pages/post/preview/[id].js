
import { GET_POST_BY_ID } from '../../../src/queries/posts/get-post';
import Layout from '../../../src/components/layout/index';
import {handleRedirectsAndReturnData} from '../../../utils/query_slug';
import { initializeApollo, addApolloState } from '../../../src/apollo/client';
import {sanitize} from '../../../utils/sanitize';
import {
	getLoginPreviewRedirectUrl
} from '../../../utils/redirects';

const PostPreview = ( { data } ) => {
	return (
        <>
		<div dangerouslySetInnerHTML={{__html: sanitize( data?.postBy?.content ?? {} )}}/>
	</>
	);
};

export default PostPreview;

export async function getServerSideProps( context ) {

	const { params } = context || {};
    console.log( 'param', params?.id  );
    const apolloClient = initializeApollo();
	const { data, errors } = await apolloClient.query( {
		query: GET_POST_BY_ID,
		variables: {
			postId: Number( params?.id ?? '' ),
		},
	} );


    const apolloProps = addApolloState( apolloClient, {
		props: {data}
	} );

    console.log( 'pageData', params?.id );
	const loginRedirectURL = getLoginPreviewRedirectUrl( 'post', params?.id ?? '' );
    console.log( 'log', loginRedirectURL );
	return handleRedirectsAndReturnData( apolloProps, data, errors, 'postBy', true, loginRedirectURL );
}
