import { AppProps } from 'next/app';

import Header from '../components/Header';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
