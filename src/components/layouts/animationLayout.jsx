import { motion } from 'framer-motion';

const AnimationLayout = ({ children }) => (
	<motion.div
		initial={{ x: 500, opacity: 0 }}
		animate={{ x: 0, opacity: 1 }}
		exit={{ x: -500, opacity: 0 }}
		transition={{
			type: 'spring',
			stiffness: 160,
			damping: 20,
		}}
	>
		{children}
	</motion.div>
);

export default AnimationLayout;
