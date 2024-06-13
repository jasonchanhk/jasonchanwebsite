import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';
import Hotjar from '@hotjar/browser';

class MyDocument extends Document {
    render() {

        Hotjar.init(Number(process.env.NEXT_PUBLIC_HOTJAR_SITEID), Number(process.env.NEXT_PUBLIC_HOTJAR_VERSION));
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Analytics />
                </body>
            </Html>
        )
    }
}

export default MyDocument