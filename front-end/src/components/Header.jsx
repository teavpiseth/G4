import React from "react";
import {
  Layout,
  Menu,
  Button,
  Badge,
  Avatar,
  Typography,
  Carousel,
  Row,
  Col,
} from "antd";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const HeaderComponent = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Header
        style={{
          background: "#fff",
          padding: "0 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Title level={2} style={{ margin: 0, marginRight: 40 }}>
            Toggle Center
          </Title>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            style={{ border: "none" }}
          >
            <Menu.Item key="home" style={{ color: "#6A5ACD" }}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar icon={<UserOutlined />} style={{ marginRight: 15 }} />
          <Text style={{ color: "#6A5ACD", marginRight: 20 }}>Log In</Text>
          <Badge count={0} showZero>
            <Avatar
              shape="square"
              icon={<ShoppingOutlined />}
              style={{ background: "#000" }}
            />
          </Badge>
        </div>
      </Header>

      {/* Banner */}
      <div
        style={{
          background: "#6A5ACD",
          padding: "15px 0",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        MOBILE PHONES & TABLETS REPAIR SERVICES FOR ALL BRANDS - GET A QUOTE
      </div>

      {/* Hero Carousel */}
      <Content>
        <Carousel autoplay dotPosition="bottom">
          <div>
            <div
              style={{
                height: "550px",
                background:
                  "linear-gradient(90deg, #e0e0e0 0%, #5DCCCC 30%, #5DCCCC 70%, #9370DB 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Row>
                <Col span={12}>
                  <div style={{ padding: "100px 0 0 80px" }}>
                    <Title
                      style={{
                        fontSize: "72px",
                        color: "white",
                        marginBottom: "20px",
                        lineHeight: "1.1",
                      }}
                    >
                      Best Deals on
                      <br />
                      Mobile Phones
                    </Title>
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        background: "#6A5ACD",
                        borderColor: "#6A5ACD",
                        height: "50px",
                        width: "150px",
                        fontSize: "18px",
                        marginTop: "20px",
                      }}
                    >
                      Shop Now
                    </Button>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ position: "relative", height: "100%" }}>
                    {/* This would be better with actual images, using placeholders */}
                    <div
                      style={{
                        position: "absolute",
                        right: "50px",
                        bottom: "50px",
                        width: "500px",
                        height: "300px",
                        background:
                          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TtvSo30cuMMx2OpQm9xDn7W6r8BKPM.png) right bottom no-repeat",
                        backgroundSize: "contain",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Carousel>
      </Content>
    </Layout>
  );
};

export default HeaderComponent;
