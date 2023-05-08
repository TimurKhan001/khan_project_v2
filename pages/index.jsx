import AnimationLayout from '../src/components/layouts/animationLayout';
import PageLayout from '../src/components/layouts/pageLayout';
import Menu from '../src/components/menu/Menu';
import Image from 'next/image';
import headerImage from '../public/images/header_image.png';
import { motion } from "framer-motion";
import ArrowDown from '../public/images/arrow_down.svg';
import { useState } from 'react';
import ScrollProgress from '../src/components/scrollProgress/scrollProgress';
import styles from './index.module.scss';

const svgVariants = {
	hidden: { opacity: 0},
	hover: {opacity: 1},
	exit: {opacity: 0}
};

const HomePage = () => {
	const [isHovered, setIsHovered] = useState(false);
	
	return (
		<AnimationLayout>
			<ScrollProgress />
			<div className={styles.wrapper}>
			<PageLayout>
				<Menu/>
				<header className={styles.heroSection}>
					<h1>clean<br /> simple<br /> aesthetic<br /></h1>
					<div className={styles.headerImage}>
						<Image
							src={headerImage}
							alt={'header-image'}
							fill={true}
							priority
						/>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileFocus={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}
							onHoverStart={() => setIsHovered(true)}
							onHoverEnd={() => setIsHovered(false)}
						>
							<motion.span
								initial='hidden'
								animate={isHovered ? "hover" : "hidden"}
								exit='exit' 
								variants={svgVariants}	
							>
								<ArrowDown className={styles.arrowDown}/>
							</motion.span>
						</motion.button>
					</div>
				</header>
			</PageLayout>
			
			</div>
			
		</AnimationLayout>
	);
};

export default HomePage;
