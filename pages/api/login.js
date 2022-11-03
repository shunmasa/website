import {loginUser} from '../../utils/api';
import cookie from 'cookie';

export default async function login( req, res ) {
	const { username, password } = req?.body ?? {};
	console.log( 'password', password );
	const data = await loginUser( {username, password} );

	res.setHeader( 'Set-Cookie', cookie.serialize( 'auth', String( data?.props?.login?.authToken ?? '' ), {
		httpOnly: true,
		secure: 'development' !== process.env.NODE_ENV,
		path: '/',
		maxAge: 60 * 60 * 24 * 7
	} ) );

	res.status( 200 ).json( { success: Boolean( data?.props?.login?.authToken ) } );
}
