import Envelope from '../../public/icons/envelope-simple.svg';
import Phone from '../../public/icons/phone.svg';
import { IntlShape } from 'react-intl';

export interface IContact {
	id: string;
	text: string;
	contact: string;
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const getContacts = (intl: IntlShape): IContact[] => [
	{
		id: 'email',
		text: intl.formatMessage({ id: 'contactMailUs' }),
		contact: 'khanproject@mail.com',
		Icon: Envelope,
	},
	{
		id: 'phone',
		text: intl.formatMessage({ id: 'contactPhoneUs' }),
		contact: '+420 123 456 789',
		Icon: Phone,
	},
];

export default getContacts;
