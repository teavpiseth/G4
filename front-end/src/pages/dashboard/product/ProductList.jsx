import React, { use, useEffect, useRef, useState } from "react";
import { Button, Input, Table, Tag } from "antd";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import HttpRequest from "../../../services/HttpRequest";
import Localstorage from "../../../utils/Localstorage";
import useDebounce from "../../../utils/debounce";
import { SERVER_URL } from "../../../const";

const ProductList = () => {
  const [modal, setModal] = useState({
    isCreate: false,
    isDelete: false,
    isEdit: false,
    deleteId: null,
    dataRecord: {},
  });
  const [data, setData] = useState();
  const [debounce] = useDebounce();
  const pagination = useRef({
    // no rerender. get and set with current
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const search = useRef("");
  const fetchProductList = async () => {
    const api = `${SERVER_URL}/api/product?page=${pagination.current.current}&limit=${pagination.current.pageSize}&search=${search.current}`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setData(data.list);
    pagination.current.total = data.total;
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
            onClick={() =>
              setModal({
                ...modal,
                isEdit: !modal.isEdit,
                dataRecord: record,
              })
            }
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
      <div className="flex justify-between">
        <Input
          onChange={(e) => {
            debounce(() => {
              search.current = e.target.value;
              fetchProductList();
            }, 500);
          }}
          placeholder="Search"
          style={{ width: 200 }}
        />
        <Button
          type="primary"
          onClick={() => setModal({ ...modal, isCreate: !modal.isCreate })}
        >
          Add Product
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          total: pagination.current.total,
          pageSize: pagination.current.pageSize,
          current: pagination.current.current,
        }}
        onChange={(paginate) => {
          pagination.current.current = paginate.current;
          pagination.current.pageSize = paginate.pageSize;
          fetchProductList();
        }}
      />
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
