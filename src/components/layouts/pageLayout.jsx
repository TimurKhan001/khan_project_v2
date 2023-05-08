import styles from './pageLayout.module.scss';

const PageLayout = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default PageLayout;
