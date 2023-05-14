import styles from './TitleBlock.module.scss';

const TitleBlock = ({ text }) => {
	return (
		<section className={styles.wrapper}>
			<h3>{text}</h3>
		</section>
	);
};

export default TitleBlock;
