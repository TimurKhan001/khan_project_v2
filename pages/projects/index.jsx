/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
import AnimationLayout from '../../src/components/layouts/animationLayout';
import clsx from 'clsx';
import ScrollProgress from '../../src/components/scrollProgress/scrollProgress';
import Footer from '../../src/components/main/footer/footer';
import { useContext, useEffect } from 'react';
import LanguageContext from '../../src/contexts/languageContext';
import styles from './index.module.scss';
import NoScrollLink from '../../src/components/miscs/noScrollLink/noScrollLink';

export async function getStaticProps() {
	const res = await fetch(`${process.env.BACKEND_API_ENDPOINT}/projects`);
	const projects = await res.json();

	return {
		props: {
			projects,
		},
	};
}

const Project = ({ _id, name, mainPicture, locale, shouldPrioritize }) => {
	return (
		<div className={clsx(styles.project)}>
			<NoScrollLink href={`/projects/${_id}`} scroll={false}>
				<div className={styles.projectImage}>
					<Image
						src={mainPicture}
						alt={`${name[locale]}-project`}
						fill={true}
						sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
						priority={shouldPrioritize ? true : false}
					/>
					<h4 className={styles.projectName}>{name[locale]}</h4>
				</div>
			</NoScrollLink>
		</div>
	);
};

const Projects = ({ projects }) => {
	const { locale } = useContext(LanguageContext);

	const pattern = [2, 3, 2, 3];

	const imageRows = [];
	let patternIndex = 0;
	let currentRow = [];

	for (let i = 0; i < projects.length; i++) {
		currentRow.push(projects[i]);
		if (currentRow.length === pattern[patternIndex]) {
			imageRows.push(currentRow);
			currentRow = [];
			patternIndex = (patternIndex + 1) % pattern.length;
		}
	}

	if (currentRow.length > 0) {
		imageRows.push(currentRow);
	}

	const gallery = imageRows.map((imageRow, rowIndex) => (
		<div
			key={rowIndex}
			className={clsx(
				imageRow.length === 3 && styles.threeElementsRow,
				imageRow.length === 2 &&
					rowIndex % 4 !== 2 &&
					styles.twoElementsRow,
				imageRow.length === 2 &&
					rowIndex % 4 === 2 &&
					styles.twoElementsReverseRow
			)}
		>
			{imageRow.map((image, idx) => (
				<Project
					key={`gallery-project-${image.name}-${idx}`}
					locale={locale}
					{...image}
					shouldPrioritize={idx < 2}
				/>
			))}
		</div>
	));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu type="light" sectionName="Portfolio" />
				<PageLayout>
					<section className={styles.gallery}>{gallery}</section>
					<Footer />
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default Projects;
