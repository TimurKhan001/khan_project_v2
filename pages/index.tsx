import AnimationLayout from '../src/components/layouts/animationLayout';
import PageLayout from '../src/components/layouts/pageLayout';
import Header from '../src/components/main/header/Header';
import InfoBlock from '../src/components/main/info/InfoBlock';
import TextSection from '../src/components/main/titleBlock/TextSection';
import Menu from '../src/components/menu/Menu';
import ScrollProgress from '../src/components/scrollProgress/scrollProgress';
import SmallGallery from '../src/components/main/smallGallery/SmallGallery';
import useIsMobile from '../src/helpers/useIsMobile';
import Button from '../src/components/miscs/button';
import SMBlock from '../src/components/main/smBlock/SmBlock';
import TestimonialsSection from '../src/components/main/testimonials/testimonialsSection';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import styles from './index.module.scss';

const HomePage = (props) => {
	const isMobile = useIsMobile(900);
	const { t } = useTranslation();
	console.log(props);
	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<Header heading={t('heading')} />
					<InfoBlock />
					<TextSection
						heading={
							isMobile
								? 'Dive into the world of the visionary architectural projects'
								: 'Dive into the world of the visionary architectural projects and witness the future of sustainable design.'
						}
					/>
					<SmallGallery />
					<TextSection
						heading="khan.project | comprehensive architectural solutions tailored to your vision"
						text="We offer a wide range of architectural services to meet the unique needs of each client. Our goal is to create innovative, sustainable, and functional designs that elevate the way people live, work, and interact with the spaces around them."
					>
						<div className={styles.marginWrapper}>
							<Button
								backgroundColor="var(--color-main-dark)"
								color="var(--color-white)"
								text="Explore Our Services"
								handleClick={() => {}}
							/>
						</div>
					</TextSection>
					<div className={styles.gradient} />
					<div className={styles.whiteSections}>
						<SMBlock />
						<div style={{ height: 'min(5vw, 10rem)' }}></div>
						<TextSection heading="khan.project | hear what our clients have to say" />
						<TestimonialsSection />
					</div>
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

export default HomePage;
