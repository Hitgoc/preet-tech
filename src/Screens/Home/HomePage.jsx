import Link from "next/link";
import React from "react";
import { Container, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Card
          style={{
            height: "250px",
            width: "200px",
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Link href={`/page`}>
            <span
              style={{
                fontSize: "100px",
                top: "50%",
                left: "48%",
                position: "absolute",
                transform: "translate(-50%,-50%)",
                color: "gray",
                cursor: "pointer",
              }}
            >
              +
            </span>
          </Link>
        </Card>
      </Container>
    </div>
  );
};

export default HomePage;
