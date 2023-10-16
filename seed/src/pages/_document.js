import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="tmdb.org" crossOrigin="true" />
        <link rel="preconnect" href="themoviedb.org" crossOrigin="true" />
        <link
          rel="preconnect"
          href="https://api.themoviedb.org"
          crossOrigin="true"
        />
        <link
          rel="preconnect"
          href="https://image.tmdb.org"
          crossOrigin="true"
        />
      </Head>
      <body className="{inter.className} container mx-auto max-w-6xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
