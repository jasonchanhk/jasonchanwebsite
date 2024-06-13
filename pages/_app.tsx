import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import Hotjar from '@hotjar/browser';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const siteId = 5023668;
  const hotjarVersion = 6;

  useEffect(() => {
    Hotjar.init(siteId, hotjarVersion);
  }, [])
  
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
