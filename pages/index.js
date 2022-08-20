import Head from "next/head";
import HomePage from "../src/Home/Home";

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
