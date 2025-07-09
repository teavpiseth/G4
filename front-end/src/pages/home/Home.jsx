import React, { useEffect } from "react";
import Product from "../../components/Product";
import { Row, Col } from "antd";
import axios from "axios";
import { SERVER_URL } from "../../const";
export default function Home() {
  const [dataPost, setDataPost] = React.useState([]);

  async function fetchData() {
    const res = await axios.get(SERVER_URL + "/api/list"); // 10 sec // 20 sec
    setDataPost(res?.data?.rows);
  }

  const handleFetch = async () => {
    await fetchData();
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <Product />
      <h1 className="mb-5">Profile</h1>
      <Row gutter={[16, 24]} className="mb-5 text-left">
        {dataPost?.map((post) => {
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
              <h3 className="font-bold font[14]">
                {post.first_name + " " + post.last_name}
              </h3>
              <img src={post.image} />
              <p>{post.email}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
