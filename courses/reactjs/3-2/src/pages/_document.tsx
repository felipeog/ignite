import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
