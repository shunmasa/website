import isEmpty from '../utils/isEmpty';

export const getPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {

	if ( isEmpty( postType ) || isEmpty( previewPostId ) ) {
        return '';
	}
	console.log('postT', postType);
	switch ( postType ) {
	case 'post':
		return `post/preview/${previewPostId}/`;
	default:
		return '/';
	}
};

export const getLoginPreviewRedirectUrl = ( postType = '', previewPostId = '' ) => {

	return `/login/?postType=${postType || ''}&previewPostId=${previewPostId || ''}`;
};
