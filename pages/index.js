import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductDetails from "../components/ProductDetails";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Product Details */}
      <ProductDetails />

      {/* Footer */}
      <Footer />
    </div>
  );
}
