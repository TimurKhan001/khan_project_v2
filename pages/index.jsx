import Canvas from '../src/components/canvas/Canvas';
import Menu from '../src/components/menu/Menu';
import styles from './index.module.css';

const HomePage = () => {
	return (
		<div className={styles.wrapper}>
			<Menu />
			<h1 data-main-header>
				clean
				<br />
				simple
				<br />
				aesthetic
				<br />
			</h1>
			<div className={styles.canvas}>
				<Canvas />
			</div>
		</div>
	);
};

export default HomePage;
