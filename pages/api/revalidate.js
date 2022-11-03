import path from 'path';

export default async function handler() {

const { token } = req.query;
console.log( 'token', req.body.data.slug );
  if ( token !== process.env.REVALIDATION_TOKEN ) {
    return res.status( 401 ).json( {message: 'Invalid token'} );
  } else if ( 0 === path.length ) {
    return res.status( 401 ).json( {message: 'Path is required'} );
  }

  try {
    //  await res.revalidate(path)
    await res.revalidate( path.join( '/', req.body.data.slug ) );
  } catch ( err ) {
    return res.status( 500 ).send( 'Error revalidating page' );
  }

  return res.status( 200 ).json( {
    revalidated: true,
    message: `Path ${path} revalidated successfully`
  } );

}
