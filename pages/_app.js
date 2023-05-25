import '../assets/styles/styles.scss';
import '../assets/styles/hamburger.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { IntlProvider } from 'react-intl';
import enData from '../public/locales/en.json';
import csData from '../public/locales/cs.json';

import { AnimatePresence } from 'framer-motion';

const messages = {
	en: enData,
	cs: csData,
};

export default function MyApp({ Component, pageProps, router, lang }) {
	let locale = 'en'; // Default locale

	if (lang in messages) {
		locale = lang;
	}
	console.log(lang);
	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<AnimatePresence mode="wait" initial={false}>
				<Component {...pageProps} key={router.pathname} />
			</AnimatePresence>
		</IntlProvider>
	);
}

MyApp.getInitialProps = async ({ ctx }) => {
	let lang = 'en';
	if (ctx.req && ctx.req.locals) {
		const acceptLanguage = ctx.req.locals.lang;
		// Assuming the first language found is the preferred one
		lang = acceptLanguage.split(',')[0].split('-')[0];
	}
	return { lang };
};
