import '../styles/globals.css'
import Script from "next/script"
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react'

interface hotjarOptionsProps {
  id: number;
  sv: number
}

function MyApp({ Component, pageProps }: AppProps) {

  const hotjarOptions: hotjarOptionsProps = {
    id: Number(process.env.NEXT_PUBLIC_HOTJAR_SITEID),
    sv: 6
  }

  useEffect(() => {
    hotjar.initialize(hotjarOptions);
  }, [])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
