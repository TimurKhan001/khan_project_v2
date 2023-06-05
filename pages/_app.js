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
import Head from 'next/head';

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
					<Head>
						<title>khan.project architect EU</title>
						<meta
							name="description"
							content="Discover the visionary architectural designs by Nargiza Khananova, the architect with over 15 years of experience, based in the Austrian Alps. Specializing in sustainable and modern architecture. Explore her extensive portfolio and transformative approach to design."
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<meta charset="utf-8" />

						<link
							rel="apple-touch-icon"
							sizes="180x180"
							href="/apple-touch-icon.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="32x32"
							href="/favicon-32x32.png"
						/>
						<link
							rel="icon"
							type="image/png"
							sizes="16x16"
							href="/favicon-16x16.png"
						/>
						<link rel="manifest" href="/site.webmanifest" />
					</Head>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</IntlProvider>
		</LanguageContext.Provider>
	);
}
