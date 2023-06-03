import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

type Props = LinkProps & {
	children: ReactNode;
	className?: string;
};
const NoScrollLink = ({ children, className, ...props }: Props) => {
	return (
		<Link className={className} {...props} scroll={false}>
			{children}
		</Link>
	);
};

export default NoScrollLink;
