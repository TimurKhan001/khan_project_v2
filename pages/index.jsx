import AnimationLayout from '../src/components/layouts/animationLayout';
import PageLayout from '../src/components/layouts/pageLayout';
import Header from '../src/components/main/header/Header';
import InfoBlock from '../src/components/main/info/InfoBlock';
import TitleBlock from '../src/components/main/titleBlock/TitleBlock';
import Menu from '../src/components/menu/Menu';
import ScrollProgress from '../src/components/scrollProgress/scrollProgress';
import SmallGallery from '../src/components/main/smallGallery/SmallGallery';
import useIsMobile from '../src/helpers/useIsMobile';
import styles from './index.module.scss';

const HomePage = () => {
	const isMobile = useIsMobile(900);
	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<Header />
					<InfoBlock />
					<TitleBlock
						text={
							isMobile
								? 'Dive into the world of the visionary architectural projects'
								: 'Dive into the world of the visionary architectural projects and witness the future of sustainable design.'
						}
					/>
					<SmallGallery />
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default HomePage;
