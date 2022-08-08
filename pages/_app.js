import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<>
			<Head>
				<title>Stacks Grant Launchpad</title>
				<meta name="description" content="Funding for open-source development on Stacks." />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta property="og:title" content="Stacks Foundation Grant Launchpad" key="title" />
				<meta name="theme-color" content="#05030A"></meta>
				<meta
					property="og:description"
					content="Funding for open-source development on Stacks."
					key="description"
				/>
				<meta property="og:image" content="/images/og-image.png" />
			</Head>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}

export default MyApp;
