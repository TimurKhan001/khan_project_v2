import Image from 'next/image';
import HalfCircleButton from '../../miscs/halfCircleButton';
import useIsMobile from '../../../helpers/useIsMobile';
import styles from './InfoBlock.module.scss';

interface IInfoBlock {
	heading: string;
	text: string;
	buttonText: string;
}

const InfoBlock: React.FC<IInfoBlock> = ({ heading, text, buttonText }) => {
	const isMobile = useIsMobile(900);

	return (
		<section className={styles.wrapper}>
			{!isMobile && (
				<HalfCircleButton
					text={buttonText}
					size="50vw"
					direction="right"
					onClick={() => {}}
				/>
			)}
			<div className={styles.textContent}>
				<h3>{heading}</h3>
				<p>{text}</p>
				<div className={styles.headerImage}>
					<Image
						src="/images/header_image.webp"
						alt={'header-image'}
						fill={true}
						priority={true}
						sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, (max-width: 1600px) 50vw"
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoBlock;
