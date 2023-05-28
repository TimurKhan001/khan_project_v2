import clsx from 'clsx';
import styles from './threeDots.module.scss';

interface IThreeDots {
	color: 'red' | 'white';
}

const ThreeDots: React.FC<IThreeDots> = ({ color = 'red' }) => {
	return (
		<div className={clsx(styles.wrapper, styles[color])}>
			<span />
			<span />
			<span />
		</div>
	);
};

export default ThreeDots;
