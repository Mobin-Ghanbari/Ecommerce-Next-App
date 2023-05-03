import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import DiscountBanner from "@/components/discount-banner/DiscountBanner";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full overflow-x-hidden ">
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
