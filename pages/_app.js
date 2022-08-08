import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Head>
				<title>Stacks Grant Launchpad</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="Stacks Grant Launchpad" key="title" />
				<meta property="og:image" content="/favicon.ico" />
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
