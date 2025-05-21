import React from "react";
import {
  Layout,
  Row,
  Col,
  Input,
  Button,
  Checkbox,
  Typography,
  Divider,
} from "antd";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const FooterComponent = () => {
  return (
    <Footer
      style={{ background: "#000000", padding: "60px 50px", color: "#ffffff" }}
    >
      <Row gutter={[48, 48]}>
        {/* Newsletter Section */}
        <Col xs={24} md={12}>
          <Title
            level={2}
            style={{
              color: "#ffffff",
              fontSize: "42px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Be the First to Know About Deals and Special Offers
          </Title>
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: "20px" }}>
            <Text
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Email *
            </Text>
            <Input
              style={{
                background: "transparent",
                borderColor: "#ffffff",
                borderRadius: 0,
              }}
            />
          </div>
          <Checkbox style={{ color: "#ffffff", marginBottom: "20px" }}>
            Yes, subscribe me to your newsletter. *
          </Checkbox>
          <Button
            type="primary"
            block
            style={{
              height: "50px",
              background: "#7B68EE",
              borderColor: "#7B68EE",
              borderRadius: 0,
            }}
          >
            Subscribe Now
          </Button>
        </Col>
      </Row>

      <Divider style={{ borderColor: "#333333", margin: "40px 0" }} />

      <Title level={3} style={{ color: "#7B68EE", marginBottom: "30px" }}>
        How can we help?
      </Title>

      <Row gutter={[48, 24]}>
        {/* Customer Service Column */}
        <Col xs={24} sm={12} md={6}>
          <div style={{ marginBottom: "20px" }}>
            <Text
              strong
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            >
              Customer Service
            </Text>
            <Text
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "10px",
              }}
            >
              123-456-7890
            </Text>
            <Text
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "10px",
              }}
            >
              info@my-domain.com
            </Text>
            <Text
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "10px",
              }}
            >
              500 Terry Francine Street
            </Text>
            <Text
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "10px",
              }}
            >
              San Francisco, CA 94158
            </Text>
          </div>
        </Col>

        {/* Shop Categories Column */}
        <Col xs={24} sm={12} md={6}>
          <div style={{ marginBottom: "20px" }}>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            >
              Shop All
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Mobile Phones
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Tablets
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Accessories
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              About
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Contact
            </Link>
          </div>
        </Col>

        {/* Help/Policy Links Column */}
        <Col xs={24} sm={12} md={6}>
          <div style={{ marginBottom: "20px" }}>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            >
              FAQ
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Shipping & Returns
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Store Policy
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Payment Methods
            </Link>
          </div>
        </Col>

        {/* Social Media Links Column */}
        <Col xs={24} sm={12} md={6}>
          <div style={{ marginBottom: "20px" }}>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
                fontSize: "16px",
              }}
            >
              Facebook
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Twitter
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Instagram
            </Link>
            <Link
              style={{
                color: "#ffffff",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Youtube
            </Link>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
