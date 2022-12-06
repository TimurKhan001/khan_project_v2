import '../assets/styles/styles.css';
import '../assets/styles/queries.css';
import '../assets/styles/hamburger.css';

import { motion } from 'framer-motion';

export default function MyApp({ Component, pageProps, router }) {
	return (
		<main>
			<motion.div
				key={router.route}
				initial="initial"
				animate="animate"
				transition={{ ease: 'easeOut', duration: 2 }}
				variants={{
					initial: {
						opacity: 0,
					},
					animate: {
						opacity: 1,
					},
				}}
			>
				<Component {...pageProps} />
			</motion.div>
		</main>
	);
}
