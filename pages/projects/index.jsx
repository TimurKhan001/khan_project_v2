/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
import Link from 'next/link';
import AnimationLayout from '../../src/components/layouts/animationLayout';
import clsx from 'clsx';
import ScrollProgress from '../../src/components/scrollProgress/scrollProgress';
import Footer from '../../src/components/main/footer/footer';
import styles from './index.module.scss';

// This function gets called at build time
export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const res = await fetch('http://localhost:8000/projects');
	const projects = await res.json();

	// By returning { props: { projects } }, the Projects component
	// will receive `projects` as a prop at build time
	return {
		props: {
			projects,
		},
	};
}

const Project = ({ _id, name, year, mainPicture, category, orientation }) => {
	const isVertical = orientation === 'vertical';

	return (
		<div
			className={clsx(
				styles.project,
				isVertical && styles.verticalProject
			)}
		>
			<Link href={`/projects/${_id}`}>
				<div className={styles.projectImage}>
					<Image
						src={mainPicture}
						alt={`${name}-project`}
						fill={true}
						priority
					/>
				</div>
			</Link>
		</div>
	);
};

const Projects = ({ projects }) => {
	const pattern = [2, 3, 2];

	// Create an array of arrays, where each subarray represents a row of images
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

	// If there are any leftover images, add them to the rows
	if (currentRow.length > 0) {
		imageRows.push(currentRow);
	}
	// console.log(imageRows);

	const gallery = imageRows.map((imageRow, rowIndex) => (
		<div
			key={rowIndex}
			className={
				rowIndex % 3 === 0
					? styles.twoElementsRow
					: rowIndex % 3 === 1
					? styles.threeElementsRow
					: styles.twoElementsReverseRow
			}
		>
			{imageRow.map((image, idx) => (
				<Project
					key={`gallery-project-${image.name}-${idx}`}
					{...image}
				/>
			))}
		</div>
	));

	// const gallery = projects.map((props, idx) => (
	// 	<Project key={`gallery-project-${props.name}-${idx}`} {...props} />
	// ));

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
