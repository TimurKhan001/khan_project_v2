import AnimationLayout from '../../src/components/layouts/animationLayout';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
import Image from 'next/image';
import clsx from 'clsx';
import ArrowLeft from '../../public/icons/arrow_left.svg';
import { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../src/contexts/languageContext';
import NoScrollLink from '../../src/components/miscs/noScrollLink/noScrollLink';
import ScrollProgress from '../../src/components/scrollProgress/scrollProgress';
import Footer from '../../src/components/main/footer/footer';
import Head from 'next/head';
import styles from './id.module.scss';

export async function getStaticPaths() {
	const res = await fetch(`${process.env.BACKEND_API_ENDPOINT}/projects`);
	const projects = await res.json();

	const paths = projects.map((project) => ({
		params: { id: project._id },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await fetch(
		`${process.env.BACKEND_API_ENDPOINT}/projects/${params.id}`
	);
	const projectData = await res.json();

	return {
		props: {
			projectData,
		},
	};
}

const GalleryImage = ({ src, alt }) => {
	const [aspectRatio, setAspectRatio] = useState('unset');

	return (
		<div style={{ aspectRatio }} className={styles.galleryImage}>
			<Image
				src={src}
				alt={alt}
				fill={true}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, (max-width: 1600px) 50vw, 40vw"
				onLoad={(e) => {
					setAspectRatio(
						`${e.currentTarget.naturalWidth} / ${e.currentTarget.naturalHeight}`
					);
				}}
			/>
		</div>
	);
};

const ProjectDetails = ({ projectData }) => {
	const { locale } = useContext(LanguageContext);
	const { name, category, description, gallery, mainPicture, year } =
		projectData;

	const images = gallery.map((image, idx) => (
		<GalleryImage
			key={image}
			src={image}
			alt={`gallery-image-${idx}`}
			idx={idx}
		/>
	));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AnimationLayout>
			<Head>
				<link rel="preload" href={mainPicture} as="image" />
			</Head>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<div className={styles.absoluteMenu}>
					<Menu type="light" />
				</div>
				<section className={styles.hero}>
					<Image
						src={mainPicture}
						alt={`${name[locale]}-project`}
						fill={true}
						sizes="100vw"
						priority={true}
					/>
					<h1>{name[locale]}</h1>
				</section>
				<PageLayout>
					<div className={clsx(styles.projectInfo, 'text-common')}>
						<NoScrollLink href="/projects">
							<ArrowLeft className={styles.arrowLeft} />
							<span>Back to projects</span>
						</NoScrollLink>
						<span>{category}</span>
						<span>{year}</span>
					</div>
					<article className={styles.projectDescription}>
						<h2></h2>
						<p>{description[locale]}</p>
					</article>
					<section className={styles.gallery}>{images}</section>
					<Footer />
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default ProjectDetails;
