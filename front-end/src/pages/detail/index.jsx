import React from "react";
import { Breadcrumb, Rate, Button, Row, Col, Image } from "antd";
import {
  ShoppingCartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { SERVER_URL } from "../../const";
import { Link } from "react-router-dom";

export default function DetailProduct() {
  const location = useLocation();
  const product = location.state || {};
  const [mainImage, setMainImage] = React.useState(product.images?.[0]?.name);
  return (
    <div>
      {/* Product Details */}
      <div
        className="space-y-6"
        style={{ maxWidth: "1200px", margin: "50px auto" }}
      >
        {/* Breadcrumb */}
        <Breadcrumb className="text-gray-500">
          <Breadcrumb.Item>
            <Link to="/">HOME</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Detail</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img
              className="w-full"
              style={{ height: "400px", objectFit: "cover" }}
              src={SERVER_URL + "/" + mainImage}
              alt=""
            />
            <div className="flex gap-4 mt-4">
              <Image.PreviewGroup>
                {product.images.map((image, index) => {
                  return (
                    <Image
                      onClick={() => setMainImage(image.name)}
                      className="w-full cursor-pointer"
                      style={{
                        height: "80px",
                        width: "80px",
                        objectFit: "cover",
                      }}
                      key={index}
                      src={SERVER_URL + "/" + image.name}
                      alt=""
                    />
                  );
                })}
              </Image.PreviewGroup>
            </div>
          </Col>
          <Col span={12}>
            {/* Product Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <Rate disabled defaultValue={4} className="text-orange-400" />
              <span className="text-gray-600">(15)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-2xl text-gray-400 line-through">
                $ {product.price}
              </span>
              <span className="text-3xl font-bold text-blue-600">
                $ {product.net_price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <Button
              type="primary"
              size="large"
              icon={<ShoppingCartOutlined />}
              className="w-full bg-blue-800 hover:bg-blue-900 border-blue-800 hover:border-blue-900 h-12 text-base font-medium"
            >
              ADD TO CART
            </Button>

            {/* Social Share */}
            <div className="flex space-x-3 pt-4">
              <Button
                shape="circle"
                icon={<FacebookOutlined />}
                className="border-gray-300 text-gray-500 hover:text-blue-600 hover:border-blue-600"
              />
              <Button
                shape="circle"
                icon={<TwitterOutlined />}
                className="border-gray-300 text-gray-500 hover:text-blue-400 hover:border-blue-400"
              />
              <Button
                shape="circle"
                icon={<InstagramOutlined />}
                className="border-gray-300 text-gray-500 hover:text-pink-600 hover:border-pink-600"
              />
              <Button
                shape="circle"
                icon={<MailOutlined />}
                className="border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-700"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
