import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/languageContext';
import clsx from 'clsx';
import styles from './languageSwitch.module.scss';

interface ILanguageSwitch {
	setIsLanguageChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const LanguageSwitcher = ({ setIsLanguageChange }) => {
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
		setIsLanguageChange(true);

		setTimeout(() => {
			const newLocale = locale === 'en' ? 'cs' : 'en';
			setLocale(newLocale);
			localStorage.setItem('locale', newLocale);
			setIsLanguageChange(false);
		}, 250);
	};

	return (
		<div className={styles.switcher}>
			<button
				onClick={switchLanguage}
				className={clsx(locale === 'en' && styles.active)}
			>
				EN
			</button>
			<button
				onClick={switchLanguage}
				className={clsx(locale === 'cs' && styles.active)}
			>
				CS
			</button>
		</div>
	);
};

export default LanguageSwitcher;
