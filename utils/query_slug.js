import isEmpty from '../utils/isEmpty';

export const FALLBACK = 'blocking';


export const isCustomPageUri = ( uri ) => {
	//not include
	const pagesToExclude = [
		'/',
		'/contact/',
	];

	return pagesToExclude.includes( uri );
};

export const handleRedirectsAndReturnData = ( defaultProps, data, errors, field, isPreview = false, loginRedirectURL = '' ) => {

	console.log( 'default', data?.[field] );
	console.log( 'loginURL', loginRedirectURL );
	if ( isPreview && null === data?.[field]) {
		return {
			redirect: {
				destination: loginRedirectURL || '/',
				statusCode: 307
			}
		};
	}

//if not the data ,status code 301
	if ( isEmpty( data ) ) {

		return {
			redirect: {
				destination: '/503',
				statusCode: 301
			}
		};
	}

	if ( field && isEmpty( data?.[field] ) ) {
		return {
			notFound: true
		};
	}

	return defaultProps;
};

