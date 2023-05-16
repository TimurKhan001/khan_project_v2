import { motion } from 'framer-motion';
import buttonsTransition from '../../configs/buttonsTransition';
import styles from './button.module.scss';

const Button = ({ backgroundColor, color, text, handleClick }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileFocus={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={buttonsTransition}
			style={{ backgroundColor, color }}
			className={styles.button}
			onClick={handleClick}
		>
			{text}
		</motion.button>
	);
};

export default Button;
