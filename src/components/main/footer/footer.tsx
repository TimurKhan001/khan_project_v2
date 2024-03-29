import ThreeDots from '../../miscs/threeDots/threeDots';
import InstaLogo from '../../../../public/icons/instagram-logo-fill.svg';
import LinkedInLogo from '../../../../public/icons/linkedin-logo-fill.svg';
import BehanceLogo from '../../../../public/icons/behance-logo-fill.svg';
import NoScrollLink from '../../miscs/noScrollLink/noScrollLink';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.roundTop}>
				<ThreeDots color="white" isAlwaysVisible={true} />
			</div>
			<div className={styles.content}>
				<div className={styles.columns}>
					<div className={styles.column}>
						<p>khan.project | architecture</p>
						<p>creating spaces for tomorrow</p>
					</div>
					<div className={styles.column}>
						<p>contact information:</p>
						<p>email: khanproject@mail.com</p>
						<p>phone: +420 123 456 789</p>
					</div>
					<div className={styles.column}>
						<p>quick links:</p>
						<NoScrollLink href="/">
							<span>home</span>
						</NoScrollLink>
						<NoScrollLink href="/projects">
							<span>portfolio</span>
						</NoScrollLink>
						<NoScrollLink href="/services">
							<span>services</span>
						</NoScrollLink>
						<NoScrollLink href="/about">
							<span>about</span>
						</NoScrollLink>
					</div>
					<div className={styles.column}>
						<p>connect with us:</p>
						<div className={styles.social}>
							<InstaLogo />
							<a href="https://www.instagram.com/khanproject_prague/">
								Instagram
							</a>
						</div>
						<div className={styles.social}>
							<LinkedInLogo />
							<a href="https://www.linkedin.com/in/nargiza-khananova-015bb4231">
								LinkedIn
							</a>
						</div>
						<div className={styles.social}>
							<BehanceLogo />
							<a href="https://www.behance.net/nargizakhanano">
								BeHance
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<span>
					© {new Date().getFullYear()} khan.project architecture. all
					rights reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
