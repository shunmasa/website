import {getAuthToken} from '../../src/apollo/client';
import isEmpty from '../../utils/isEmpty';
// import { GET_POST_BY_ID } from '../../src/queries/posts/get-post';
import {getPreviewRedirectUrl} from '../../utils/redirects';

export default async function preview( req, res ) {
	const {postType, postId} = req.query;

    console.log( 'postType!!', postType );
	console.log( 'postId', req.query );
	const authToken = getAuthToken( req );

	if ( isEmpty( authToken ) ) {

		res.writeHead( 307, {Location: `/login/?postType=${postType}&previewPostId=${postId ?? ''}`} );

	} else {
		// const post = await getPreviewPost(postType || postId, postId ? 'DATABASE_ID' : 'SLUG');
		const previewUrl = getPreviewRedirectUrl( postType, postId );
		// console.log( 'previewUrl!! ', previewUrl );
		// res.setPreviewData({});


        res.writeHead( 302, {Location: `http://localhost:3000/${previewUrl}`} );
	}

	res.end();
}
