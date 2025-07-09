import React, { useEffect } from "react";
import { Button, Form, Modal, Input, Select } from "antd";
import axios from "axios";
import { SERVER_URL } from "../../../const";

const CreateCategory = ({ modal, setModal, fetchProductList, listAll }) => {
  const [form] = Form.useForm();
  async function onFinish(values) {
    if (modal.isEdit) {
      const res = await axios.put(SERVER_URL + "/api/category", {
        ...values,
        id: form.getFieldValue("id"),
      });
      if (res.data) {
        setModal({ ...modal, isEdit: false });
        fetchProductList();
      }
      return;
    }
    const res = await axios.post(SERVER_URL + "/api/category", values);
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
        title={modal.isEdit ? "Edit Category" : "Add Category"}
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
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Parent"
            name="parent_id"
            rules={[{ required: false, message: "Please input your parent!" }]}
          >
            <Select
              showSearch
              placeholder="Select a parent"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={listAll.map((item) => ({
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
export default CreateCategory;
