import buttonsTransition from '../../configs/buttonsTransition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './halfCircleButton.module.scss';

const variants = {
	hover: { clipPath: `circle(45% at 0% 50%)` },
	rest: { clipPath: 'circle(40% at 0% 50%)' },
};

const HalfCircleButton = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.section
			className={styles.wrapper}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<motion.div
				variants={variants}
				animate={isHovered ? 'hover' : 'rest'}
				className={styles.firstLayer}
			/>
			<motion.div
				variants={variants}
				transition={buttonsTransition}
				animate={isHovered ? 'hover' : 'rest'}
				className={styles.secondLayer}
			/>
		</motion.section>
	);
};

export default HalfCircleButton;
