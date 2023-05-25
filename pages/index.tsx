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
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

export async function getStaticProps(props) {
	const locales = await fetch('http://localhost:3000/locales/en.json');
	const json = await locales.json();

	return {
		props: {
			...json,
		},
	};
}

const HomePage = (props) => {
	const isMobile = useIsMobile(900);

	const intl = useIntl();

	const title = intl.formatMessage({ id: 'heading' });

	console.log(title);

	return (
		<AnimationLayout>
			<Head>
				<title>khan.project architect EU</title>
				<meta
					name="description"
					content="Discover the visionary architectural designs by Nargiza Khananova, the architect with over 15 years of experience, based in the Austrian Alps. Specializing in sustainable and modern architecture. Explore her extensive portfolio and transformative approach to design."
				/>
				<link rel="icon" href="/favicon.ico" />

				{/* Add hreflang links */}
				<link
					rel="alternate"
					href="http://example.com"
					hrefLang="x-default"
				/>
				<link rel="alternate" href="http://example.com" hrefLang="en" />
				<link
					rel="alternate"
					href="http://example.com/ar"
					hrefLang="ar"
				/>
				<link
					rel="alternate"
					href="http://example.com/fr"
					hrefLang="fr"
				/>
				<link
					rel="alternate"
					href="http://example.com/nl-NL"
					hrefLang="nl-NL"
				/>
			</Head>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<Header heading={intl.formatMessage({ id: 'heading' })} />
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

export default HomePage;
