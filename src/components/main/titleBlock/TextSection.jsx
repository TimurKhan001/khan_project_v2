import styles from './TextSection.module.scss';

const TextSection = ({ heading, text, children }) => {
	return (
		<section className={styles.wrapper}>
			{heading && <h3>{heading}</h3>}
			{text && <p>{text}</p>}
			{children}
		</section>
	);
};

export default TextSection;
