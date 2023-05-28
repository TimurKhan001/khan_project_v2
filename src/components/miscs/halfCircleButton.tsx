import buttonsTransition from '../../configs/buttonsTransition';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';
import useIsMobile from '../../helpers/useIsMobile';
import styles from './halfCircleButton.module.scss';

interface IHalfCircleButton {
	icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	text?: string;
	size: string;
	direction: string;
	top: string;
	onClick: () => void;
}

const HalfCircleButton: React.FC<IHalfCircleButton> = ({
	icon: Icon,
	text,
	size = '50vw', // px or vw
	direction = 'right', // left or right
	top = '10vw',
	onClick,
}) => {
	const isMobile = useIsMobile(900);
	const [isHovered, setIsHovered] = useState(isMobile ? true : false);

	const animationInitialState = isMobile ? { opacity: 1 } : 'hidden';

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
			style={{ '--width': size, '--top': top }}
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
					initial={animationInitialState}
					animate={isHovered ? 'hover' : animationInitialState}
					exit="exit"
					variants={svgVariants}
				>
					{Icon && (
						<Icon
							className={clsx(
								styles.iconStyle,
								direction === 'left' && styles.leftSideIcon
							)}
						/>
					)}
					{text && <h2>{text}</h2>}
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
