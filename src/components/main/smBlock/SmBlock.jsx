import Image from 'next/image';
import styles from './SmBlock.module.scss';
import image from '../../../../public/images/insta.jpg';
import HalfCircleButton from '../../miscs/halfCircleButton';
import ThumbUp from '../../../../public/icons/thumb.svg';
import useIsMobile from '../../../helpers/useIsMobile';

const SMBlock = () => {
	const isMobile = useIsMobile(900);
	const buttonSize = isMobile ? '25vw' : '15vw';

	return (
		<section className={styles.wrapper}>
			<article>
				<h3>stay updated on our latest projects and design insights</h3>
				<p>
					Join our growing community of design enthusiasts, clients,
					and industry professionals by following khan.project
					architecture on social media. We regularly share project
					updates, behind-the-scenes looks at our design process,
					industry trends, and inspiration from the world of
					architecture and design.
				</p>
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
