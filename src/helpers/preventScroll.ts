import { useEffect, useLayoutEffect } from 'react';

export const useLockBodyScroll = (dependency) => {
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		const preventTouchMove = (e) => e.preventDefault();

		const scrollToggle = () => {
			if (dependency) {
				// Prevent scrolling on mount
				document.body.style.overflow = 'hidden';
				window.addEventListener('touchmove', preventTouchMove, {
					passive: false,
				});
			} else {
				document.body.style.overflow = originalStyle;
			}
		};

		scrollToggle();

		// Re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle;
			window.removeEventListener('touchmove', preventTouchMove);
		};
	}, [dependency]);
};
