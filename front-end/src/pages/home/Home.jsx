import React, { useEffect } from "react";
import Product from "../../components/Product";
import { Row, Col } from "antd";
import axios from "axios";
export default function Home() {
  const [dataPost, setDataPost] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setDataPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setDataPost(data))
    //   .catch((err) => console.log("error", err));
  }, []);
  return (
    <div>
      <Product />
      <h1>Post</h1>
      <Row gutter={[16, 24]} className="mb-5 text-left">
        {dataPost?.splice(0, 10)?.map((post) => {
          return (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={6}
              className="gutter-row"
              key={post.id}
              span={6}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
