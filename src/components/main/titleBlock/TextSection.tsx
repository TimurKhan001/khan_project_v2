import clsx from 'clsx';
import styles from './TextSection.module.scss';

interface ITextSection {
	heading?: string;
	text?: string;
	children?: any;
	isLargeText?: boolean;
}

const TextSection = ({
	heading,
	text,
	isLargeText,
	children,
}: ITextSection) => {
	return (
		<section
			className={clsx(
				styles.wrapper,
				isLargeText && styles.alternativeAlign
			)}
		>
			{heading && (isLargeText ? <h2>{heading}</h2> : <h3>{heading}</h3>)}
			{text && (isLargeText ? <h3>{text}</h3> : <p>{text}</p>)}
			{children}
		</section>
	);
};

export default TextSection;
