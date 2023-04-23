import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import Head from "next/head";

import "@/styles/globals.css";
import DiscountBanner from "@/components/discount-banner/DiscountBanner";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full overflow-x-hidden">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <DiscountBanner />
      <Footer />
    </div>
  );
}
