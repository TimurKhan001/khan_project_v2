import Image from 'next/image';
import styles from './SmBlock.module.scss';
import image from '../../../../public/images/insta.jpg';
import HalfCircleButton from '../../miscs/halfCircleButton';
import ThumbUp from '../../../../public/icons/thumb.svg';
import useIsMobile from '../../../helpers/useIsMobile';

interface ISMBlock {
	heading: string;
	text: string;
}

const SMBlock: React.FC<ISMBlock> = ({ heading, text }) => {
	const isMobile = useIsMobile(900);
	const buttonSize = isMobile ? '25vw' : '15vw';

	return (
		<section className={styles.wrapper}>
			<article>
				<h3>{heading}</h3>
				<p>{text}</p>
			</article>
			<div className={styles.imageSection}>
				<HalfCircleButton
					icon={ThumbUp}
					size={`min(${buttonSize}, 30rem)`}
					top="2.5vw"
					direction="left"
					onClick={() => {}}
				/>
				<div className={styles.image}>
					<Image src={image} alt={`instagram`} fill={true} />
				</div>
			</div>
		</section>
	);
};

export default SMBlock;
