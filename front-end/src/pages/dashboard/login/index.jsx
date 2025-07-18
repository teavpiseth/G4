import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../../utils/Localstorage";
import HttpRequest from "../../../services/HttpRequest";
import { SERVER_URL } from "../../../const/index";

const Login = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const onFinish = async (values) => {
    const res = await HttpRequest.post(SERVER_URL + "/api/login", values);
    if (res.data) {
      LocalStorage.setAssessToken(res.data.data.accessToken);
      LocalStorage.setRefreshToken(res.data.data.refreshToken);
      navigate("/dashboard");
    } else {
      api.error({
        message: "Error",
        description: res.message,
        style: {
          width: 600,
        },
      });
    }
  };

  return (
    <>
      {contextHolder}
      <img
        className="w-[150px] m-auto"
        src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
      />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="tel"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null} className="text-right">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
