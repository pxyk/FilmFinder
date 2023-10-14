import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="{inter.className} container mx-auto max-w-6xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
