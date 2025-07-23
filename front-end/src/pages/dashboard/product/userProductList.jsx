import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Tag, Image } from "antd";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../../utils/debounce";
import HttpRequest from "../../../services/HttpRequest";
import { SERVER_URL } from "../../../const";

const useProductList = () => {
  const [modal, setModal] = useState({
    isCreate: false,
    isDelete: false,
    isEdit: false,
    deleteId: null,
    dataRecord: {},
    isUploadImage: false,
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
    const api = `${SERVER_URL}/api/product?page=${
      pagination.current.current
    }&limit=${pagination.current.pageSize}&search=${
      search.current ? search.current : ""
    }${categoryId ? `&category_id=${categoryId}` : ""}`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setData(data.list);
    pagination.current.total = data.total;
  };

  const [categoryId, setCategoryId] = useState(null);

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
      title: "Images",
      dataIndex: "images",
      render: (value, record, index) => {
        return (
          <Image.PreviewGroup
            items={record?.images?.map((item) => {
              return SERVER_URL + "/" + item?.name;
            })}
          >
            <Image
              width={200}
              src={SERVER_URL + "/" + record.images?.[0]?.name}
            />
          </Image.PreviewGroup>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category_id",
      render: (value, record, index) => {
        return <>{listAllCategory.find((item) => item.id === value)?.name}</>;
      },
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
          <Button
            onClick={() =>
              setModal({ ...modal, isUploadImage: true, dataRecord: record })
            }
          >
            <EditOutlined /> Image
          </Button>
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

  const [listAllCategory, setListAllCategory] = useState([]);

  const fetchAllCategory = async () => {
    const api = `${SERVER_URL}/api/category/all`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setListAllCategory(data.list);
  };

  function getParentCategory({ parentId }) {
    const parent = listAllCategory.find((item) => item.id === parentId);
    if (parent) {
      return parent.name;
    }
    return "None";
  }

  // use
  useEffect(() => {
    fetchAllCategory();
  }, []);

  // didmount, didupdate
  useEffect(() => {
    fetchProductList();
  }, [categoryId]);

  return {
    modal,
    setModal,
    data,
    setData,
    pagination,
    search,
    fetchProductList,
    columns,
    listAllCategory,
    getParentCategory,
    debounce,
    categoryId,
    setCategoryId,
  };
};

export default useProductList;
