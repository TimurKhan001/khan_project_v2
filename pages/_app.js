import '../assets/styles/styles.scss';
import '../assets/styles/hamburger.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { appWithTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
	return (
		<main>
			<AnimatePresence mode="wait" initial={false}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</main>
	);
}

export default appWithTranslation(MyApp);
