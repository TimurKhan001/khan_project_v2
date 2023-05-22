import AnimationLayout from '../../src/components/layouts/animationLayout';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
// import ArrowLeft from '../../public/images/arrow_left.svg';
import styles from './id.module.css';

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await fetch('http://localhost:8000/projects');
	const projects = await res.json();

	// Get the paths we want to pre-render based on posts
	const paths = projects.map((project) => ({
		params: { id: project._id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	// Call an external API endpoint to get posts
	const res = await fetch(`http://localhost:8000/projects/${params.id}`);
	const projectData = await res.json();

	// By returning { props: { projectData } }, the ProjectDetails component
	// will receive `projectData` as a prop at build time
	return {
		props: {
			projectData,
		},
	};
}

const ProjectDetails = ({ projectData }) => {
	const { name, category, description, gallery, mainPicture, year } =
		projectData;

	const images = gallery.map((image, idx) => (
		<div key={`gallery-image-${idx}`} className={styles.galleryImage}>
			<Image
				src={image}
				alt={`gallery-image-${idx}`}
				fill={true}
				priority
			/>
		</div>
	));

	return (
		<AnimationLayout>
			<div className={styles.wrapper}>
				<div className={styles.absoluteMenu}>
					<Menu />
				</div>
				<section className={styles.hero}>
					<Image
						src={mainPicture}
						alt={`${name}-project`}
						fill={true}
						priority
					/>
				</section>
				<PageLayout>
					<div className={clsx(styles.projectInfo, 'text-common')}>
						<Link href="/projects">
							{/* <ArrowLeft className={styles.arrowLeft} /> */}
							<span>To all projects</span>
						</Link>
						<span>{name}</span>
						<span>{category}</span>
						<span>{year}</span>
					</div>
					<article className={styles.projectDescription}>
						<h2></h2>
						<p>{description}</p>
					</article>
					<section className={styles.gallery}>{images}</section>
				</PageLayout>
			</div>
		</AnimationLayout>
	);
};

export default ProjectDetails;
