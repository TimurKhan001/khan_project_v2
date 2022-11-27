import { useState, useEffect } from 'react';

const useIsMobile = (maxWidth = 600) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleMobileShow = () => {
			setIsMobile(
				window.matchMedia(`(max-width: ${maxWidth}px)`).matches
			);
		};

		handleMobileShow();

		window.addEventListener('resize', handleMobileShow);

		return () => window.removeEventListener('resize', handleMobileShow);
	}, [maxWidth]);

	return isMobile;
};

export default useIsMobile;
