import Image from 'next/image';
import headerImage from '../../../../public/images/header_image.png';
import useIsMobile from '../../../helpers/useIsMobile';
import RoundButton from '../../miscs/roundButon';
import styles from './Header.module.scss';

const Header = () => {
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
						<div className={styles.downButtonMobile}>
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
						<div className={styles.downButton}>
							<RoundButton handleClick={() => {}} type="red" />
						</div>
					</div>
				</header>
			)}
		</>
	);
};

export default Header;
