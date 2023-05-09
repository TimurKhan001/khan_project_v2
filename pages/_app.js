import '../assets/styles/styles.scss';
import '../assets/styles/hamburger.css';

import { AnimatePresence } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
	return (
		<main>
			<AnimatePresence mode="wait" initial={false}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</main>
	);
}
