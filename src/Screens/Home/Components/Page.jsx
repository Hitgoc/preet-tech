import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
const BlogPage = ({ data }) => {
  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <div className="mt-4">
          <Link href="/">
            <Button>Go back</Button>
          </Link>
        </div>

        <div style={{ display: "grid" }}>
          <Image
            width="300px"
            height="300px"
            src={data.page.image.url}
            objectFit="contain"
            alt=""
          />
          <video width="300" height="200" controls>
            <source src={data.page.video.url} type="video/mp4" />
          </video>
          <p className="text-center mt-4">{data.page.content}</p>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
