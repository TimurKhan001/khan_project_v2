import Image from 'next/image';
import { motion } from 'framer-motion';
import buttonsTransition from '../../../configs/buttonsTransition';
import ThreeDots from '../../miscs/threeDots/threeDots';
import NoScrollLink from '../../miscs/noScrollLink/noScrollLink';
import styles from './SmallGallery.module.scss';

const images = [
	'/images/portfolio1.jpeg',
	'/images/portfolio2.jpeg',
	'/images/portfolio3.jpeg',
];

const SmallGallery = () => {
	return (
		<section id="small-gallery" className={styles.wrapper}>
			<NoScrollLink href={'/projects'}>
				<div className={styles.images}>
					{images.map((image, idx) => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileFocus={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={buttonsTransition}
							key={`smallgallery-img-${idx}`}
							className={styles.image}
						>
							<Image
								src={image}
								alt={`gallery-small-image-${idx}`}
								sizes="(max-width: 768px) 40vw, 35vw"
								fill={true}
							/>
						</motion.div>
					))}
				</div>
				<motion.div className={styles.text}>
					<h1>portfolio</h1>
					<ThreeDots color="red" />
				</motion.div>
			</NoScrollLink>
		</section>
	);
};

export default SmallGallery;
