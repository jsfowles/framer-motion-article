import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import * as theme from '@identity/index';

interface Props {
	pageProps: any;
}

const App = ({ Component, pageProps, router }: AppProps & Props) => {
	return (
		<>
			<Head>
				<title>Framer Motion Template</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} key={router?.route} />
			</ThemeProvider>
		</>
	);
};

export default App;
