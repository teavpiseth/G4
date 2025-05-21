import React from "react";
import { Typography, Row, Col, Card, Divider, Space } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f5f5f5" }}>
      {/* About Us Header */}
      <div style={{ marginBottom: "40px" }}>
        <Title level={1} style={{ fontWeight: "bold", marginBottom: "0" }}>
          About Us
        </Title>
        <Divider
          style={{ height: "2px", background: "#000", marginTop: "8px" }}
        />
      </div>

      {/* About Section */}
      <Row gutter={[32, 32]} style={{ marginBottom: "60px" }}>
        <Col xs={24} md={12}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S2sIP50IT03twPHoLElEEoQkwBdOjk.png"
            alt="Person looking at electronic devices"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large">
            <Paragraph>
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click "Edit Text" or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I'm a great place for you to
              tell a story and let your users know a little more about you.
            </Paragraph>
            <Paragraph>
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </Paragraph>
          </Space>
        </Col>
      </Row>

      {/* Meet the Team Section */}
      <div style={{ marginBottom: "40px" }}>
        <Title level={2} style={{ fontWeight: "bold", marginBottom: "40px" }}>
          Meet the Team
        </Title>

        <Row gutter={[24, 24]}>
          {/* Team Member 1 */}
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              style={{ background: "transparent" }}
            >
              <div style={{ backgroundColor: "white", marginBottom: "16px" }}>
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team member"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Title level={4} style={{ margin: "8px 0" }}>
                Jonny Butler
              </Title>
              <Paragraph>
                I'm a title. Click here to add your own text and edit me.
              </Paragraph>
            </Card>
          </Col>

          {/* Team Member 2 */}
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              style={{ background: "transparent" }}
            >
              <div style={{ backgroundColor: "white", marginBottom: "16px" }}>
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team member"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Title level={4} style={{ margin: "8px 0" }}>
                Jennie Welch
              </Title>
              <Paragraph>
                I'm a title. Click here to add your own text and edit me.
              </Paragraph>
            </Card>
          </Col>

          {/* Team Member 3 */}
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              bodyStyle={{ padding: 0 }}
              style={{ background: "transparent" }}
            >
              <div style={{ backgroundColor: "white", marginBottom: "16px" }}>
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Team member"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <Title level={4} style={{ margin: "8px 0" }}>
                Randall Holt
              </Title>
              <Paragraph>
                I'm a title. Click here to add your own text and edit me.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
