import { gql } from "@apollo/client";
import Head from "next/head";
import apolloClient from "../lib/apolloClient";
import HomePage from "../src/Screens/Home/HomePage";

const Home = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Preet Tech</title>
      </Head>
      <HomePage data={data} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        pages {
          pageSlug
          id
          content
          image {
            url
          }
          video {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
