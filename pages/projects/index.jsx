import Image from 'next/image';
import PageLayout from '../../src/components/layouts/pageLayout';
import Menu from '../../src/components/menu/Menu';
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

const Project = ({
	name,
	year,
	mainPicture,
	category,
	gallery,
	description,
}) => {
	return (
		<div className={styles.project}>
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
		<div className={styles.wrapper}>
			<Menu />
			<PageLayout>
				<header>
					<h1>Work</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nisi eos est dolorem ab sed. Vero ratione quia
						obcaecati doloremque earum rerum fugiat, nihil
						praesentium! Quidem laborum non laboriosam neque velit
						illo accusantium cumque nisi modi, aliquam vero rerum,
						nemo a.
					</p>
				</header>
				<section className={styles.gallery}>
					{/* <div className={styles.project}>
						<Image
							src="https://khan-project.s3.eu-central-1.amazonaws.com/01.jpg"
							alt="Picture of the author"
							fill={true}
							sizes="(max-width: 768px) 100vw,
									(max-width: 1200px) 50vw,
									33vw"
							priority
						/>
						<span>Project name</span>
					</div> */}
					{gallery}
				</section>
			</PageLayout>
		</div>
	);
};

export default Projects;
