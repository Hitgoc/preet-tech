import Link from "next/link";
import React from "react";
import { Container, Card } from "react-bootstrap";
import { useStateContext } from "../../../context/StateContext";

const HomePage = ({ data }) => {
  const { totalPages, setTotalPages, pages, setPages } = useStateContext();

  return (
    <div>
      <Container className="mt-4 d-flex justify-content-center">
        <div
          style={{
            display: "flex",
          }}
        >
          <div>
            {data?.pages?.map((item, i) => (
              <Link key={i} href={`/${item.pageSlug}`}>
                <Card
                  className="mt-3"
                  style={{
                    cursor: "pointer",
                    height: "150px",
                    width: "100px",
                    display: "flex",
                  }}
                >
                  <span style={{ margin: "auto" }}>Page {i + 1}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
