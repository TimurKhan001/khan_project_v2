import '../assets/styles/styles.scss';
import '../assets/styles/hamburger.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enData from '../public/locales/en.json';
import csData from '../public/locales/cs.json';
import LanguageContext from '../src/contexts/languageContext';
import { AnimatePresence } from 'framer-motion';
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition';

const localeMessages = {
	en: enData,
	cs: csData,
};

export default function MyApp({ Component, pageProps, router }) {
	useNextCssRemovalPrevention();

	const [locale, setLocale] = useState('en');

	const [messages, setMessages] = useState(localeMessages[locale]);

	useEffect(() => {
		const storedLocale = localStorage.getItem('locale');

		if (storedLocale) {
			setLocale(storedLocale);
			return;
		}

		const browserLang = navigator.language.split('-')[0];

		if (
			browserLang &&
			browserLang !== locale &&
			localeMessages[browserLang]
		) {
			setLocale(browserLang);
			localStorage.setItem('locale', browserLang);
		}
	}, []);

	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	useEffect(() => {
		if (locale && localeMessages[locale]) {
			setMessages(localeMessages[locale]);
			localStorage.setItem('locale', locale);
		}
	}, [locale]);

	return (
		<LanguageContext.Provider value={{ locale, setLocale }}>
			<IntlProvider locale={locale} messages={messages}>
				<AnimatePresence
					mode="wait"
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</IntlProvider>
		</LanguageContext.Provider>
	);
}
