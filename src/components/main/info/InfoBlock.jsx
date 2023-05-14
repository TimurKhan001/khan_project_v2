import Image from 'next/image';
import headerImage from '../../../../public/images/header_image.png';
import HalfCircleButton from '../../miscs/halfCircleButton';
import ArrowDown from '../../../../public/icons/about.svg';
import useIsMobile from '../../../helpers/useIsMobile';
import styles from './InfoBlock.module.scss';

const InfoBlock = () => {
	const isMobile = useIsMobile(900);

	return (
		<section className={styles.wrapper}>
			{!isMobile && (
				<HalfCircleButton
					icon={ArrowDown}
					width="50vw"
					direction="right"
					onClick={() => {}}
				/>
			)}
			<div className={styles.textContent}>
				<h3>khan.project | crafting sustainable futures</h3>
				<p>
					Welcome to the official portfolio, where the future of
					architecture meets environmental responsibility. Nargiza
					Khananova is an architect with a passion for innovative
					design and a commitment to building a sustainable world
					through her creations. Discover her unique approach and
					explore the groundbreaking projects that have earned her
					recognition in the industry.
				</p>
				<div className={styles.headerImage}>
					<Image src={headerImage} alt={'header-image'} fill={true} />
				</div>
			</div>
		</section>
	);
};

export default InfoBlock;
