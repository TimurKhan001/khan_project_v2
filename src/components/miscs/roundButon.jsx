import { motion } from 'framer-motion';
import ArrowDown from '../../../public/images/arrow_down.svg';
import clsx from 'clsx';
import { useState } from 'react';
import styles from './roundButton.module.scss';

const svgVariants = {
	hidden: { opacity: 0 },
	hover: { opacity: 1 },
	exit: { opacity: 0 },
};

const RoundButton = ({ handleClick, type = 'red' }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileFocus={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 10,
			}}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={handleClick}
			className={clsx(styles.button, styles[type])}
		>
			<motion.span
				initial="hidden"
				// animate={isHovered ? 'hover' : 'hidden'}
				exit="exit"
				variants={svgVariants}
			>
				<ArrowDown className={styles.arrowDown} />
			</motion.span>
		</motion.button>
	);
};

export default RoundButton;
