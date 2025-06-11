import React from "react";
import { Button, Form, Modal, Input, Select } from "antd";
import axios from "axios";

const DeleteProduct = ({ modal, setModal, fetchProductList }) => {
  async function handleDelete() {
    const res = await axios.delete("http://localhost:3033/api/product", {
      data: { id: modal.deleteId }, // 👈 must be inside `data`
    });
    if (res.data) {
      fetchProductList();
      setModal({ ...modal, isDelete: !modal.isDelete });
    }
  }
  return (
    <>
      <Modal
        centered={true}
        title="Add Product"
        style={{ top: 20 }}
        open={modal.isDelete}
        onOk={() => handleDelete()}
        onCancel={() => setModal({ ...modal, isDelete: !modal.isDelete })}
      >
        Are you sure want to delete
      </Modal>
    </>
  );
};
export default DeleteProduct;
