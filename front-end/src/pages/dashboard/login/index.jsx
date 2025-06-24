import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocalStorage from "../../../utils/Localstorage";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await axios.post("http://localhost:3033/api/login", values);
      if (res.data) {
        LocalStorage.setAssessToken(res.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response.data.message);
      message.info(error.response.data.message);
    }
  };

  return (
    <>
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
