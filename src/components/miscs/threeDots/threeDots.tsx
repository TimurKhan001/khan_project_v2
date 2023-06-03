import clsx from 'clsx';
import styles from './threeDots.module.scss';

interface IThreeDots {
	color: 'red' | 'white';
	isAlwaysVisible?: boolean;
}

const ThreeDots: React.FC<IThreeDots> = ({
	color = 'red',
	isAlwaysVisible,
}) => {
	return (
		<div
			className={clsx(
				styles.wrapper,
				styles[color],
				isAlwaysVisible && styles.isAlwaysVisible
			)}
		>
			<span />
			<span />
			<span />
		</div>
	);
};

export default ThreeDots;
