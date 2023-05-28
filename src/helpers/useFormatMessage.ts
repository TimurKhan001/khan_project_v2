import { useIntl } from 'react-intl';

export function useFormatMessage() {
	const intl = useIntl();

	const formatMessage = (id) => {
		return intl.formatMessage({ id });
	};

	return formatMessage;
}

export default useFormatMessage;
