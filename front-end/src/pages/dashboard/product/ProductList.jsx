import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";

const ProductList = () => {
  const [modal, setModal] = useState({
    isCreate: false,
    isDelete: false,
    deleteId: null,
  });
  const [data, setData] = useState();
  const fetchProductList = async () => {
    const res = await axios.get("http://localhost:3033/api/product");
    setData(res.data.data);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => text,
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Discount",
      dataIndex: "discount_percent",
    },
    {
      title: "Net Price",
      dataIndex: "net_price",
    },

    {
      title: "Created At",
      dataIndex: "created_at",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value, record, index) => (
        <>
          {record.status ? (
            <Tag color="green">Active</Tag>
          ) : (
            <Tag color="red">Inactive</Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      render: (_, record) => (
        <>
          <DeleteOutlined
            onClick={() =>
              setModal({
                ...modal,
                isDelete: !modal.isDelete,
                deleteId: record.id,
              })
            }
            style={{ cursor: "pointer", fontSize: "16px" }}
            className="mr-2 text-red-500"
          />
          <EditOutlined
            style={{ cursor: "pointer", fontSize: "16px" }}
            className="text-blue-500"
          />
        </>
      ),
    },
  ];

  // use
  useEffect(() => {
    fetchProductList();
  }, []);
  return (
    <>
      <div className="text-right">
        <Button
          type="primary"
          onClick={() => setModal({ ...modal, isCreate: !modal.isCreate })}
        >
          Add Product
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <CreateProduct
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
      <DeleteProduct
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
    </>
  );
};
export default ProductList;
