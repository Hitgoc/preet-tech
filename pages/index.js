import Head from "next/head";
import HomePage from "../src/Screens/Home/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Preet Tech</title>
      </Head>
      <HomePage />
    </div>
  );
}
