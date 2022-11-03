import Img from 'next/image';
import cx from 'classnames';
import {DEFAULT_IMG} from '../../../utils/image_default';

const Image = ( props ) => {
	const {altText, title, sourceUrl, width, height, className, layout, containerClassNames, showDefault, ...rest} = props;
	if ( ! sourceUrl  ) {
		return null;
	}
if ( 'fill' === layout ) {
	const attributes = {
		alt: altText || title,
		src: sourceUrl || ( showDefault ? DEFAULT_IMG : '' ),
		layout: 'fill',
		className: cx( 'object-cover', className ),
		...rest
	};
} else {
	const attributes = {
		alt: altText || title,
		src: sourceUrl || ( showDefault ? DEFAULT_IMG : '' ),
		width: width || 'auto',
		height: height || 'auto',
		className,
		...rest
	};
	return <Img {...attributes} />;
}
};

export default Image;
