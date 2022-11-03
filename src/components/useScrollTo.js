import {animate, Spring, Tween} from 'framer-motion';

export const useScrollTo = ( transition ) => {
	let isStopped = false;

	const onWheel = () => {
		isStopped = true;
		window.removeEventListener( 'wheel', onWheel );
	};

	const scrollTo = ( target, offset = 0 ) => {
		let y = 0;

		if ( 'number' === typeof target ) {
			y = target;
		} else if ( 'string' === typeof target || 1 === target?.nodeType ) {
			if ( 'string' === typeof target ) {
				target = document.querySelector( target );
			}
			if ( ! target ) {
				console.error( 'framer-motion-scroll-to-hook: Element not found' );
			} else {
				y = window.scrollY + target.getBoundingClientRect().top;
			}
		}

		y += offset;

		window.addEventListener( 'wheel', onWheel );
		animate( window.scrollY, y, {
			...transition,
			onComplete: () => {
				isStopped = false;
				window.removeEventListener( 'wheel', onWheel );
			},
			onUpdate: ( value ) => {
				if ( ! isStopped ) {
					window.scroll( 0, value );
				}
			},
		} );
	};

	return scrollTo;
};

