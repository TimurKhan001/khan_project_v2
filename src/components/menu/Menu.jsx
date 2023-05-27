import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import useIsMobile from '../../helpers/useIsMobile';
import styles from './Menu.module.scss';
import LanguageSwitcher from '../miscs/languageSwitch/languageSwitch';

const Menu = () => {
	const isMobile = useIsMobile(600);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const burgerRef = useRef(null);

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

		burger.classList.toggle('is-active');
	};

	useEffect(() => {
		const link = document.querySelectorAll(
			`nav > .${styles.mainMenuLinks}`
		);
		const cursor = document.querySelector(`.${styles.cursor}`);

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
				<Link href="/" className={styles.logo}>
					khan.project
				</Link>

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
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				variants={sidebar}
				className={styles.menuSection}
			>
				<nav className={styles.mainNav}>
					<Link className={styles.mainMenuLinks} href="/projects">
						<span className={styles.menuSpan}>Projects</span>
						<span className={styles.number}>01</span>
					</Link>
					<Link className={styles.mainMenuLinks} href="/project">
						<span className={styles.menuSpan}>Process</span>
						<span className={styles.number}>02</span>
					</Link>
					<Link className={styles.mainMenuLinks} href="/project">
						<span className={styles.menuSpan}>Contact</span>
						<span className={styles.number}>03</span>
					</Link>
					<div className={styles.cursor}></div>
					<LanguageSwitcher />
				</nav>
			</motion.div>
		</>
	);
};

export default Menu;
