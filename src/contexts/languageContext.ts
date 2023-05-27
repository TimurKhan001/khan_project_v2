import React from 'react';

type Lang = 'en' | 'cs';

type LanguageContextType = {
	locale: Lang;
	setLocale: React.Dispatch<React.SetStateAction<Lang>>;
};

const LanguageContext = React.createContext<LanguageContextType>({
	locale: 'en',
	setLocale: () => {},
});
export default LanguageContext;
