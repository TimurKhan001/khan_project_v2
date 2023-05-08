import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './scrollProgress.module.css';

const ScrollProgress = () => {
	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return <motion.div className={styles.progressBar} style={{ scaleX }} />;
};

export default ScrollProgress;
