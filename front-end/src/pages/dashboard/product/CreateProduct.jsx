import React, { useEffect } from "react";
import { Button, Form, Modal, Input, Select } from "antd";
import axios from "axios";
import { SERVER_URL } from "../../../const";
import MultiImageUploader from "./ImageUploader";
const CreateProduct = ({
  modal,
  setModal,
  fetchProductList,
  listAllCategory,
}) => {
  const [form] = Form.useForm();
  async function onFinish(values) {
    if (modal.isEdit) {
      const res = await axios.put(SERVER_URL + "/api/product", {
        ...values,
        id: form.getFieldValue("id"),
      });
      if (res.data) {
        setModal({ ...modal, isEdit: false });
        fetchProductList();
      }
      return;
    }
    const res = await axios.post(SERVER_URL + "/api/product", values);
    if (res.data) {
      setModal({ ...modal, isCreate: !modal.isCreate });
      fetchProductList();
    }
  }

  useEffect(() => {
    form.resetFields();
    if (modal.isEdit) {
      form.setFieldsValue(modal.dataRecord);
      form.setFieldValue("id", modal.dataRecord.id);
    }
  }, [modal]);

  return (
    <>
      <Modal
        footer={null}
        centered={true}
        title={modal.isEdit ? "Edit Product" : "Add Product"}
        style={{ top: 20 }}
        open={modal.isCreate || modal.isEdit}
        onOk={() =>
          setModal({
            ...modal,
            isCreate: false,
            isEdit: false,
          })
        }
        onCancel={() =>
          setModal({
            ...modal,
            isCreate: false,
            isEdit: false,
          })
        }
      >
        <Form
          form={form}
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
            <Input.TextArea rows={4} type="text" />
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
            <Select
              showSearch
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              placeholder="Select a category"
              options={listAllCategory.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input your category!" }]}
          >
            <Select
              placeholder="Select a category"
              options={[
                { value: 0, label: "Inactive" },
                { value: 1, label: "Active" },
              ]}
            />
          </Form.Item>

          {/* <Form.Item
            label="Image"
            name="images"
            rules={[{ required: true, message: "Please input your image!" }]}
          >
            <MultiImageUploader form={form} />
          </Form.Item> */}

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
