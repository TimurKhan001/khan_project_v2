import { useIntl } from 'react-intl';
import styles from './contactSection.module.scss';
import TextSection from '../titleBlock/TextSection';
import getContacts from '../../../configs/contacts';
import RoundButton from '../../miscs/roundButon';
import FormIcon from '../../../../public/icons/form.svg';

interface IContact {
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	text: string;
	contact: string;
	id: string;
}

const Contact: React.FC<IContact> = ({ Icon, text, contact, id }) => {
	const href = id === 'email' ? `mailto:${contact}` : `tel:${contact}`;

	return (
		<a href={href} className={styles.contact}>
			<Icon />
			<p> - {text}</p>
			<p>{contact}</p>
		</a>
	);
};

interface IContacts {
	heading: string;
	text: string;
}

const ContactSection: React.FC<IContacts> = ({ heading, text }) => {
	const intl = useIntl();

	const contacts = getContacts(intl).map(({ id, ...rest }) => (
		<Contact key={id} id={id} {...rest} />
	));

	return (
		<section className={styles.wrapper}>
			<TextSection heading={heading} text={text} isLargeText={true} />
			<div className={styles.contacts}>{contacts}</div>
			{/* <div className={styles.button}>
				<RoundButton
					handleClick={() => {}}
					Icon={FormIcon}
					isAlwaysVisibleIcon={true}
				/>
			</div> */}
		</section>
	);
};

export default ContactSection;
