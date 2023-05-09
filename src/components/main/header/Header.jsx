import Image from 'next/image';
import headerImage from '../../../../public/images/header_image.png';
import { motion } from 'framer-motion';
import ArrowDown from '../../../../public/images/arrow_down.svg';
import { useState } from 'react';
import useIsMobile from '../../../helpers/useIsMobile';
import RoundButton from '../../miscs/roundButon';
import styles from './Header.module.scss';

const svgVariants = {
	hidden: { opacity: 0 },
	hover: { opacity: 1 },
	exit: { opacity: 0 },
};

const Header = () => {
	const [isHovered, setIsHovered] = useState(false);
	const isMobile = useIsMobile(900);

	return (
		<>
			{isMobile ? (
				<header className={styles.heroSectionMobile}>
					<div className={styles.redWrapper}>
						<h1>
							clean
							<br /> simple
							<br /> aesthetic
						</h1>
						<div className={styles.downButton}>
							<RoundButton handleClick={() => {}} type="white" />
						</div>
					</div>
				</header>
			) : (
				<header className={styles.heroSection}>
					<h1>
						clean
						<br /> simple
						<br /> aesthetic
					</h1>
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
							transition={{
								type: 'spring',
								stiffness: 400,
								damping: 10,
							}}
							onHoverStart={() => setIsHovered(true)}
							onHoverEnd={() => setIsHovered(false)}
						>
							<motion.span
								initial="hidden"
								animate={isHovered ? 'hover' : 'hidden'}
								exit="exit"
								variants={svgVariants}
							>
								<ArrowDown className={styles.arrowDown} />
							</motion.span>
						</motion.button>
					</div>
				</header>
			)}
		</>
	);
};

export default Header;
