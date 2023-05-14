import buttonsTransition from '../../configs/buttonsTransition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './halfCircleButton.module.scss';

const HalfCircleButton = ({
	icon: Icon,
	size = '50vw', // px or vw
	direction = 'right', // left or right
	onClick,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const variants = {
		right: {
			hover: { clipPath: `circle(45% at 0% 50%)` },
			rest: { clipPath: 'circle(40% at 0% 50%)' },
		},
		left: {
			hover: { clipPath: `circle(45% at 100% 50%)` },
			rest: { clipPath: 'circle(40% at 100% 50%)' },
		},
	};

	const svgVariants = {
		hidden: { opacity: 0 },
		hover: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<motion.section
			style={{ '--width': size }}
			className={styles.wrapper}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			whileTap={{ scale: 0.9 }}
			transition={buttonsTransition}
			onClick={onClick}
		>
			<motion.div
				variants={variants[direction]}
				animate={isHovered ? 'hover' : 'rest'}
				className={clsx(
					styles.firstLayer,
					direction === 'left' && styles.changeDirection
				)}
			>
				<motion.span
					initial={'hidden'}
					animate={isHovered ? 'hover' : 'hidden'}
					exit="exit"
					variants={svgVariants}
				>
					<Icon
						className={clsx(
							styles.iconStyle,
							direction === 'left' && styles.leftSideIcon
						)}
					/>
				</motion.span>
			</motion.div>
			<motion.div
				variants={variants[direction]}
				transition={buttonsTransition}
				animate={isHovered ? 'hover' : 'rest'}
				className={clsx(
					styles.secondLayer,
					direction === 'left' && styles.changeDirection
				)}
			/>
		</motion.section>
	);
};

export default HalfCircleButton;
