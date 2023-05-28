import Image from 'next/image';
import headerImage from '../../../../public/images/header_image.png';
import useIsMobile from '../../../helpers/useIsMobile';
import RoundButton from '../../miscs/roundButon';
import scrollTo from '../../../helpers/animations/scrollTo';
import ArrowDown from '../../../../public/icons/arrow_down.svg';
import styles from './Header.module.scss';

interface IHeader {
	heading: string;
}

const Header = ({ heading }: IHeader) => {
	const isMobile = useIsMobile(900);
	const headingWithBreaks = heading.split(' ').join('<br />');

	return (
		<>
			{isMobile ? (
				<header className={styles.heroSectionMobile}>
					<div className={styles.redWrapper}>
						<h1
							dangerouslySetInnerHTML={{
								__html: headingWithBreaks,
							}}
						/>
						<div className={styles.downButtonMobile}>
							<RoundButton
								handleClick={() => {
									const element =
										document.getElementById(
											'small-gallery'
										);
									scrollTo(element);
								}}
								type="white"
								Icon={ArrowDown}
							/>
						</div>
					</div>
				</header>
			) : (
				<header className={styles.heroSection}>
					<h1
						dangerouslySetInnerHTML={{
							__html: headingWithBreaks,
						}}
					/>
					<div className={styles.headerImage}>
						<Image
							src={headerImage}
							alt={'header-image'}
							fill={true}
							priority
						/>
						<div className={styles.downButton}>
							<RoundButton
								handleClick={() => {
									const element =
										document.getElementById(
											'small-gallery'
										);
									scrollTo(element);
								}}
								type="red"
								Icon={ArrowDown}
							/>
						</div>
					</div>
				</header>
			)}
		</>
	);
};

export default Header;
