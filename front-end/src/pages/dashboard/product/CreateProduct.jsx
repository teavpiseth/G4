import React from "react";
import { Button, Form, Modal, Input, Select } from "antd";
import axios from "axios";
const CreateProduct = ({ modal, setModal, fetchProductList }) => {
  async function onFinish(values) {
    const res = await axios.post("http://localhost:3033/api/product", values);
    if (res.data) {
      setModal({ ...modal, isCreate: !modal.isCreate });
      fetchProductList();
    }
  }

  return (
    <>
      <Modal
        footer={null}
        centered={true}
        title="Add Product"
        style={{ top: 20 }}
        open={modal.isCreate}
        onOk={() => setModal({ ...modal, isCreate: !modal.isCreate })}
        onCancel={() => setModal({ ...modal, isCreate: !modal.isCreate })}
      >
        {/* 
name
description
qty
price
discount_percent
discount_amount
net_price
status
created_at
updated_at
category_id */}
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Qty"
            name="qty"
            rules={[{ required: true, message: "Please input your qty!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input your price!" },
              {
                validator: (_, value) => {
                  if (value === undefined || value === "")
                    return Promise.resolve();

                  const isFloat = !isNaN(value) && parseFloat(value) == value;
                  return isFloat
                    ? Promise.resolve()
                    : Promise.reject("Must be a valid number (float allowed)");
                },
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Discount Percent"
            name="discount_percent"
            rules={[
              { required: true, message: "Please input your discount!" },
              {
                validator: (_, value) => {
                  if (value === undefined || value === "")
                    return Promise.resolve();

                  const isFloat = !isNaN(value) && parseFloat(value) == value;
                  return isFloat
                    ? Promise.resolve()
                    : Promise.reject("Must be a valid number (float allowed)");
                },
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Discount Amount"
            name="discount_amount"
            rules={[
              { required: true, message: "Please input your discount amount!" },
              {
                validator: (_, value) => {
                  if (value === undefined || value === "")
                    return Promise.resolve();

                  const isFloat = !isNaN(value) && parseFloat(value) == value;
                  return isFloat
                    ? Promise.resolve()
                    : Promise.reject("Must be a valid number (float allowed)");
                },
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Net Price"
            name="net_price"
            rules={[
              {
                required: true,
                message: "Please input your discount net price!",
              },
              {
                validator: (_, value) => {
                  if (value === undefined || value === "")
                    return Promise.resolve();

                  const isFloat = !isNaN(value) && parseFloat(value) == value;
                  return isFloat
                    ? Promise.resolve()
                    : Promise.reject("Must be a valid number (float allowed)");
                },
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category_id"
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Select
              placeholder="Select a category"
              options={[
                { value: "0", label: "Inactive" },
                { value: "1", label: "Active" },
              ]}
            />
          </Form.Item>

          <Form.Item className="text-right" label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CreateProduct;
