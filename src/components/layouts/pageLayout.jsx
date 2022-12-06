import styles from './pageLayout.module.css';

const PageLayout = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default PageLayout;
