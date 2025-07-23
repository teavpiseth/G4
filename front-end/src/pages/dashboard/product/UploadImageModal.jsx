import { Form, Modal, Button } from "antd";
import React, { useState } from "react";

import { SERVER_URL } from "../../../const";
import HttpRequest from "../../../services/HttpRequest";

export default function UploadImageModal({
  setModal,
  modal,
  fetchProductList,
}) {
  const [form] = Form.useForm();

  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Generate preview URLs
    const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...previewUrls, ...prev]);

    form.setFieldValue("images", selectedFiles);
  };

  const handleDelete = (index) => {
    setPreviews((prev) => prev.filter((_, prevIdx) => prevIdx !== index));
    form.setFieldValue(
      "images",
      form.getFieldValue("images").filter((_, idx) => idx !== index)
    );
    setFiles((prev) => prev.filter((_, prevIdx) => prevIdx !== index));
  };

  async function onFinish() {
    const data = new FormData();
    files.forEach((file) => {
      data.append("images", file); // must match server field name
    });
    data.append("product_id", modal.dataRecord.id);
    const res = await HttpRequest.post(
      SERVER_URL + "/api/product-image",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res.data) {
      setModal({ ...modal, isUploadImage: !modal.isUploadImage });
      fetchProductList();
    }
  }
  return (
    <div>
      <Modal
        centered={true}
        title="Add Product"
        style={{ top: 20 }}
        open={modal.isUploadImage}
        footer={null}
        onCancel={() =>
          setModal({ ...modal, isUploadImage: !modal.isUploadImage })
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
            label="Images"
            name="images"
            // rules={[{ required: true, message: "Please input your Image!" }]}
            rules={[
              {
                required: true,
                validator: (_, value) => {
                  if (Array.isArray(value) && value.length > 0) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Please upload at least one image.")
                  );
                },
              },
            ]}
          >
            <input
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
            />

            <div className="mt-4 flex gap-4 flex-wrap">
              {previews.map((img, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={img}
                    alt={`preview-${idx}`}
                    className="w-32 h-32 object-cover border rounded"
                  />
                  <button
                    onClick={() => handleDelete(idx)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs hidden group-hover:flex items-center justify-center"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </Form.Item>

          <Form.Item className="text-right" label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
