import type { AppProps } from "next/app";

import "./globals.css";

import Script from "next/script";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17902569980" strategy="afterInteractive" />
      <Script id="google-ads">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17902569980');
      `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
