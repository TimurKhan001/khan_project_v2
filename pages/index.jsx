import AnimationLayout from '../src/components/layouts/animationLayout';
import PageLayout from '../src/components/layouts/pageLayout';
import Header from '../src/components/main/header/Header';
import Menu from '../src/components/menu/Menu';
import HalfCircleButton from '../src/components/miscs/halfCircleButton';
import ScrollProgress from '../src/components/scrollProgress/scrollProgress';
import styles from './index.module.scss';

const HomePage = () => {
	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<Header />
					<div className={styles.introSection}>
						<HalfCircleButton />
					</div>
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default HomePage;
