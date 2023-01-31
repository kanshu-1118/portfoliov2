import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
    render() {
    return (
        <Html lang="ja-JP">
        <Head>
            <meta charSet="utf-8" />
            <meta name="format-detection" content="telephone=no" />
            <link rel="shortcut icon" href={'/favicon.ico'} />
            <link rel="apple-touch-icon" href={'/logo.png'} />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
    }
}

export default Document