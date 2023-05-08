/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
import Link from 'next/link';
import AnimationLayout from '../../src/components/layouts/animationLayout';
import clsx from 'clsx';
import ScrollProgress from '../../src/components/scrollProgress/scrollProgress';
import styles from './index.module.css';

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
						sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
						priority
					/>
				</div>
			</Link>
			<span className={styles.projectName}>
				{name} {year}
			</span>
			<span className={styles.projectCategory}>{category}</span>
		</div>
	);
};

const Projects = ({ projects }) => {
	const gallery = projects.map((props, idx) => (
		<Project key={`gallery-project-${props.name}-${idx}`} {...props} />
	));

	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
				<Menu />
				<PageLayout>
					<header>
						<h1>Projects</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Nisi eos est dolorem ab sed. Vero ratione quia
							obcaecati doloremque earum rerum fugiat, nihil
							praesentium! Quidem laborum non laboriosam neque
							velit illo accusantium cumque nisi modi, aliquam
							vero rerum, nemo a.
						</p>
					</header>
					<section className={styles.gallery}>{gallery}</section>
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default Projects;
