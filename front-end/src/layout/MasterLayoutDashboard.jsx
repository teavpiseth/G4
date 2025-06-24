import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import LocalStorage from "../utils/Localstorage";
const { Header, Sider, Content } = Layout;
const MasterLayoutDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    //did mount
    const token = LocalStorage.getAssessToken();
    if (!token) {
      navigate("/dashboard/login");
    } else {
      setIsLogin(true);
    }
  }, []);
  if (isLogin == false) return <></>;
  return (
    <div className="w-full">
      <Layout className="w-full h-screen">
        <Sider theme="dark" trigger={null} collapsible collapsed={collapsed}>
          <div
            className="demo-logo-vertical"
            style={{
              height: "32px",
              margin: "16px",
              background: "rgba(255, 255, 255, .2)",
              borderRadius: "6px",
            }}
          />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
                disabled: true,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Product",
                children: [
                  {
                    key: "product-list",
                    label: "List",
                    icon: <UserOutlined />,
                    onClick: () => {
                      navigate("/dashboard/product/list");
                    },
                  },
                ],
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "4",
                icon: <LoginOutlined />,
                label: "Log out",
                onClick: () => {
                  navigate("/dashboard/login");
                  LocalStorage.removeAssessToken();
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default MasterLayoutDashboard;
