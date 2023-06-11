import { useEffect, useLayoutEffect } from 'react';

export const useLockBodyScroll = (dependency) => {
	useLayoutEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;

		const scrollToggle = () => {
			if (dependency) {
				document.body.style.overflow = 'hidden';
				document.body.ontouchstart = (e) => {
					e.preventDefault();
				};
			} else {
				document.body.style.overflow = originalStyle;
			}
		};

		scrollToggle();

		// Re-enable scrolling when component unmounts
		return () => {
			document.body.style.overflow = originalStyle;
			document.body.ontouchstart = (e) => {
				e.preventDefault();
			};
		};
	}, [dependency]);
};
