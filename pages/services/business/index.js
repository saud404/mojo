import Head from "next/head";
import Header from "../../../components/Header";
import Services from "../../../components/services";
import Footer from "../../../components/Footer";
import { NextSeo } from "next-seo";

export default function Business() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: M-Open73 Consultancy"
        description="Welcome to nine4 homepage."
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>M-Open73 Consultancy</title>
        <link rel="icon" href="../../favicon.png" />
      </Head>
      <Header />
      <Services />
      <Footer />
    </div>
  );
}
