import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
const BlogPage = () => {
  const data = [
    {
      img: "/assets/img.png",
      video: "/assets/video.mp4",
      content: "This is what you came for !",
    },
  ];

  return (
    <div>
      <Container className="d-flex justify-content-center">
        {data?.map((item, i) => (
          <div style={{ display: "grid" }} key={i}>
            <Image
              width="400px"
              height="400px"
              src={item.img}
              objectFit="contain"
              alt=""
            />
            <video width="320" height="240" controls>
              <source src={item.video} type="video/mp4" />
            </video>
            <p className="text-center mt-4">{item.content}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default BlogPage;
