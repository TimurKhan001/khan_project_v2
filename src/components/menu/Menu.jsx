import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import useIsMobile from '../../helpers/useIsMobile';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Menu.module.css';

const Menu = () => {
	const isMobile = useIsMobile(900);

	const [menuState, setMenuState] = useState({
		isOpened: false,
		inMotion: false,
	});

	const burgerRef = useRef(null);
	const menuRef = useRef(null);

	const handleBurgerClick = () => {
		const burger = burgerRef.current;
		const header = document.querySelector('[data-main-header]');

		const ease = 'power4.out';

		if (!menuState.isOpened) {
			setMenuState((prevState) => ({
				...prevState,
				inMotion: true,
			}));

			gsap.set(menuRef.current, {
				display: 'initial',
			});

			!isMobile &&
				header &&
				gsap.to(header, {
					x: '-20vw',
					duration: 0.5,
				});

			gsap.to(menuRef.current, {
				opacity: 1,
				duration: 0.5,
				ease,
				onComplete: () => {
					setMenuState((prevState) => ({
						...prevState,
						isOpened: true,
						inMotion: false,
					}));
				},
			});
		}

		if (menuState.isOpened) {
			setMenuState((prevState) => ({
				...prevState,
				inMotion: true,
			}));

			!isMobile &&
				header &&
				gsap.to(header, {
					x: 0,
					duration: 0.5,
				});

			gsap.to(menuRef.current, {
				opacity: 0,
				duration: 0.5,
				ease,
			});

			gsap.set(menuRef.current, {
				delay: 0.5,
				display: 'none',
				onComplete: () => {
					setMenuState((prevState) => ({
						...prevState,
						isOpened: false,
						inMotion: false,
					}));
				},
			});
		}

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
				<span className={styles.logo}>khan.project</span>
				<button
					ref={burgerRef}
					className="hamburger hamburger--spin"
					onClick={menuState.inMotion ? () => {} : handleBurgerClick}
					type="button"
					aria-label="Menu"
					aria-controls="navigation"
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
			<div ref={menuRef} className={styles.menuSection}>
				<nav className={styles.mainNav}>
					<Link className={styles.mainMenuLinks} href="/projects">
						<span className={styles.menuSpan}>Projects</span>
					</Link>
					<Link className={styles.mainMenuLinks} href="/project">
						<span className={styles.menuSpan}>Process</span>
					</Link>
					<Link className={styles.mainMenuLinks} href="/project">
						<span className={styles.menuSpan}>Contact</span>
					</Link>
					<div className={styles.cursor}></div>
				</nav>
			</div>
		</>
	);
};

export default Menu;
