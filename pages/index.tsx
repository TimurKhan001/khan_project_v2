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
import Head from 'next/head';
import ContactSection from '../src/components/main/contacts/contactsSection';
import useFormatMessage from '../src/helpers/useFormatMessage';
import Footer from '../src/components/main/footer/footer';
import styles from './index.module.scss';

const HomePage = () => {
	const isMobile = useIsMobile(900);

	const getTranslation = useFormatMessage();

	return (
		<AnimationLayout>
			<Head>
				<title>khan.project architect EU | Main</title>
				<meta
					name="description"
					content="Discover the visionary architectural designs by Nargiza Khananova, the architect with over 15 years of experience, based in the Austrian Alps. Specializing in sustainable and modern architecture. Explore her extensive portfolio and transformative approach to design."
				/>
			</Head>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<Header heading={getTranslation('heading')} />
					<InfoBlock
						heading={getTranslation('infoSectionHeading')}
						text={getTranslation('infoSectionText')}
						buttonText={getTranslation('infoSectionButtonText')}
					/>
					<TextSection
						heading={
							isMobile
								? getTranslation(
										'protfolioSectionHeadingMobile'
								  )
								: getTranslation(
										'protfolioSectionHeadingDesktop'
								  )
						}
					/>
					<SmallGallery />
					<TextSection
						heading={getTranslation('servicesSectionHeading')}
						text={getTranslation('servicesSectionText')}
					>
						<div className={styles.marginWrapper}>
							<Button
								backgroundColor="var(--color-dark-alt)"
								color="var(--color-white)"
								text={getTranslation(
									'servicesSectionButtonText'
								)}
								handleClick={() => {}}
							/>
						</div>
					</TextSection>
					<div className={styles.gradient} />
					<div className={styles.whiteSections}>
						<SMBlock
							heading={getTranslation('smSectionHeading')}
							text={getTranslation('smSectionText')}
						/>
						<div style={{ height: 'min(5vw, 10rem)' }}></div>
						<TextSection
							heading={getTranslation('testimonialsHeading')}
						/>
						<TestimonialsSection />
						<ContactSection
							heading={getTranslation('contactHeading')}
							text={getTranslation('contactText')}
						/>
						<Footer />
					</div>
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default HomePage;
