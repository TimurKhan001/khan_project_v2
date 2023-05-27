import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/languageContext';

const LanguageSwitcher = () => {
	const { locale, setLocale } = useContext(LanguageContext);
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!initialized) {
			setInitialized(true);
			setLocale((prevLocale) => {
				// Update the locale state with the initial value from the server
				return prevLocale || 'en';
			});
		}
	}, [initialized, setLocale]);

	const switchLanguage = () => {
		const newLocale = locale === 'en' ? 'cs' : 'en';
		setLocale(newLocale);
		localStorage.setItem('locale', newLocale);
	};

	return (
		<button onClick={switchLanguage}>
			Switch language (current: {locale})
		</button>
	);
};

export default LanguageSwitcher;
