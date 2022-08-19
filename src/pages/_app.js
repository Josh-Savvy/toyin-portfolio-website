import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { LazyMotion, domAnimation } from "framer-motion";
import Head from "next/head";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/avatar.jpg"
          type="image/x-icon"
        />
        <title>{`Oluwatoyin Omoyeni's Portfolio`}</title>

        <meta name="title" content="Oluwatoyin Omoyeni's Portfolio" />
        <meta name="description" content="Oluwatoyin Omoyeni's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oluwatoyin Omoyeni's Portfolio" />
        <meta
          property="og:description"
          content="Oluwatoyin Omoyeni's Portfolio"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Oluwatoyin Omoyeni's Portfolio" />
        <meta
          property="twitter:description"
          content="Oluwatoyin Omoyeni's Portfolio"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
        <div className="flex justify-center text-sm pb-3">Copyright 2022&reg;</div>
      </LazyMotion>
      {/* <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script> */}
    </>
  );
}

export default MyApp;
