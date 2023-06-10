import Image from 'next/image';
import styles from './SmBlock.module.scss';
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

	const handleClick = () => {
		window.location.href = 'https://www.instagram.com/khanproject_prague/';
	};

	return (
		<section className={styles.wrapper}>
			<article>
				<h3>{heading}</h3>
				<p>{text}</p>
			</article>
			<a
				href="https://www.instagram.com/khanproject_prague/"
				className={styles.imageSection}
			>
				<HalfCircleButton
					icon={ThumbUp}
					size={`min(${buttonSize}, 30rem)`}
					top="2.5vw"
					direction="left"
					onClick={handleClick}
				/>
				<div className={styles.image}>
					<Image
						src="/images/insta.webp"
						alt={`instagram`}
						fill={true}
						sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, (max-width: 1600px) 50vw, 40vw"
					/>
				</div>
			</a>
		</section>
	);
};

export default SMBlock;
