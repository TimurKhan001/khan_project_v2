import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/p1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/s1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/k1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/m1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/sl1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/b1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/o1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/a1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/n1.jpg"
						as="image"
					/>
					<link
						rel="preload"
						href="https://khan-project.s3.eu-central-1.amazonaws.com/l1.jpg"
						as="image"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
