import { useRef, useEffect, useState } from 'react';
import { motion, useAnimate, useCycle } from 'framer-motion';
import useIsMobile from '../../helpers/useIsMobile';
import LanguageSwitcher from '../miscs/languageSwitch/languageSwitch';
import NoScrollLink from '../miscs/noScrollLink/noScrollLink';
import clsx from 'clsx';
import styles from './Menu.module.scss';
import useFormatMessage from '../../helpers/useFormatMessage';
// import { useLockBodyScroll } from '../../helpers/preventScroll';

interface IMenu {
	type?: 'dark' | 'light';
	sectionName?: string;
}

const Menu: React.FC<IMenu> = ({ type = 'dark', sectionName }) => {
	const getTranslation = useFormatMessage();

	const isMobile = useIsMobile(600);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const burgerRef = useRef(null);
	const menuRef = useRef(null);

	// useLockBodyScroll(isOpen);

	const [isLanguageChanged, setIsLanguageChange] = useState<boolean>(false);

	const list = {
		visible: {
			opacity: 1,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				when: 'afterChildren',
			},
		},
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: 200 },
	};

	const sidebar = {
		open: (height = 1000) => ({
			clipPath: `circle(${height * 3 + 200}px at calc(100% - ${
				isMobile ? '40px' : '70px'
			}) ${isMobile ? '40px' : '70px'})`,
			transition: {
				type: 'spring',
				stiffness: 20,
				restDelta: 2,
			},
		}),
		closed: {
			clipPath: `circle(0px at calc(100% - ${
				isMobile ? '40px' : '70px'
			}) ${isMobile ? '40px' : '70px'})`,
			transition: {
				delay: 0.25,
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	};

	const handleBurgerClick = () => {
		const burger = burgerRef.current;

		toggleOpen();

		if (isOpen) {
			document.body.style.overflow = 'hidden';
			menuRef.current.ontouchstart = (e) => {
				e.preventDefault();
			};
		}

		burger.classList.toggle('is-active');
	};

	useEffect(() => {
		const link = document.querySelectorAll(
			`nav > .${styles.mainMenuLinks}`
		);
		const cursor = document.querySelector(
			`.${styles.cursor}`
		) as HTMLElement;

		const animate = function (e) {
			const span = this.querySelector('span');
			const { offsetX: x, offsetY: y } = e;

			const { offsetWidth: width, offsetHeight: height } = this;

			const move = 25;

			const xMove = (x / width) * (move * 2) - move;

			const yMove = (y / height) * (move * 2) - move;

			span.style.transform = `translate(${xMove}px, ${yMove}px)`;

			if (e.type === 'mouseleave') span.style.transform = '';
		};

		const editCursor = (e) => {
			const { clientX: x, clientY: y } = e;
			cursor.style.left = x + 'px';
			cursor.style.top = y + 'px';
		};

		link.forEach((b) => b.addEventListener('mousemove', animate));
		link.forEach((b) => b.addEventListener('mouseleave', animate));
		window.addEventListener('mousemove', editCursor);

		return () => {
			link.forEach((b) => b.removeEventListener('mousemove', animate));
			link.forEach((b) => b.removeEventListener('mouseleave', animate));
			window.removeEventListener('mousemove', editCursor);
		};
	}, []);

	return (
		<>
			<div className={styles.wrapper}>
				<NoScrollLink
					href="/"
					className={clsx(
						styles.logo,
						type === 'light' && styles.lightLogo
					)}
					aria-label="Home"
				>
					khan.project
				</NoScrollLink>
				{sectionName && (
					<h3 className={styles.sectionName}>{sectionName}</h3>
				)}
				<button
					ref={burgerRef}
					className="hamburger hamburger--spin"
					onClick={handleBurgerClick}
					type="button"
					aria-label="Menu"
					aria-controls="navigation"
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
			<motion.div
				ref={menuRef}
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				variants={sidebar}
				className={clsx(
					styles.menuSection,
					type === 'light' && styles.menuSectionLight
				)}
			>
				<motion.nav
					initial="visible"
					animate={isLanguageChanged ? 'hidden' : 'visible'}
					variants={list}
					className={styles.mainNav}
				>
					<NoScrollLink
						className={styles.mainMenuLinks}
						href="/projects"
						scroll={false}
						aria-label="Navigate to Projects"
					>
						<motion.div variants={item}>
							<span className={styles.menuSpan}>
								{getTranslation('menuProjects')}
							</span>
							<span className={styles.number}>01</span>
						</motion.div>
					</NoScrollLink>

					<NoScrollLink
						className={styles.mainMenuLinks}
						href="/services"
						aria-label="Navigate to Services"
					>
						<motion.div variants={item}>
							<span className={styles.menuSpan}>
								{getTranslation('menuServices')}
							</span>
							<span className={styles.number}>02</span>
						</motion.div>
					</NoScrollLink>

					<NoScrollLink
						className={styles.mainMenuLinks}
						href="/about"
						aria-label="Navigate to About"
					>
						<motion.div variants={item}>
							<span className={styles.menuSpan}>
								{getTranslation('menuAbout')}
							</span>
							<span className={styles.number}>03</span>
						</motion.div>
					</NoScrollLink>

					<div className={styles.cursor}></div>
					<LanguageSwitcher
						setIsLanguageChange={setIsLanguageChange}
					/>
				</motion.nav>
			</motion.div>
		</>
	);
};

export default Menu;
