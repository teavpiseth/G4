import React, { useEffect } from "react";
import Product from "../../components/Product";
import { Row, Col } from "antd";

export default function Home() {
  const [dataPost, setDataPost] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setDataPost(data));
  }, []);
  return (
    <div>
      <Product />
      <h1>Post</h1>
      <Row gutter={[16, 24]}>
        {dataPost.map((post) => {
          return (
            <Col className="gutter-row" key={post.id} span={6}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
