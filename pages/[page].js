import { gql } from "@apollo/client";
import React from "react";
import apolloClient from "../lib/apolloClient";
import BlogPage from "../src/Screens/Home/Components/Page";

const Page = ({ data }) => {
  return (
    <div>
      <BlogPage data={data} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        pages {
          pageSlug
        }
      }
    `,
  });

  const paths = data?.pages?.map((page) => ({
    params: {
      page: page.pageSlug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { page } }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        page(where: { pageSlug: "${page}" }) {
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

export default Page;
