import Head from "next/head";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Head */}
      <Head>
        <title>Umis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <Navbar />
      {/* landing page */}
      <Landing />
    </div>
  );
}
