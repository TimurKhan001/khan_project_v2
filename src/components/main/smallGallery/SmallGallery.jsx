import portfolioImageOne from '../../../../public/images/portfolio1.jpeg';
import portfolioImageTwo from '../../../../public/images/portfolio2.jpeg';
import portfolioImageThree from '../../../../public/images/portfolio3.jpeg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import buttonsTransition from '../../../configs/buttonsTransition';
import ThreeDots from '../../miscs/threeDots/threeDots';
import styles from './SmallGallery.module.scss';

const images = [portfolioImageOne, portfolioImageTwo, portfolioImageThree];

const SmallGallery = () => {
	return (
		<section id="small-gallery" className={styles.wrapper}>
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
							fill={true}
						/>
					</motion.div>
				))}
			</div>
			<motion.div className={styles.text}>
				<h1>portfolio</h1>
				<ThreeDots color="red" />
			</motion.div>
		</section>
	);
};

export default SmallGallery;
