import { useState, useEffect, useRef } from "react";
import useDebounce from "../../../utils/debounce";
import HttpRequest from "../../../services/HttpRequest";
import { SERVER_URL } from "../../../const";
import { Tag, Image } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const useCategory = () => {
  const [modal, setModal] = useState({
    isCreate: false,
    isDelete: false,
    isEdit: false,
    deleteId: null,
    dataRecord: {},
  });
  const [data, setData] = useState();
  const [listAll, setListAll] = useState([]);
  const [debounce] = useDebounce();
  const pagination = useRef({
    // no rerender. get and set with current
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const search = useRef("");
  const fetchProductList = async () => {
    const api = `${SERVER_URL}/api/category?page=${pagination.current.current}&limit=${pagination.current.pageSize}&search=${search.current}`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setData(data.list);
    pagination.current.total = data.total;
  };

  const fetchAllCategory = async () => {
    const api = `${SERVER_URL}/api/category/all`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setListAll(data.list);
  };

  const handleImageError = (event) => {
    event.target.onerror = null; // prevent infinite loop
    event.target.src =
      "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg";
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
      title: "Image",
      dataIndex: "image",
      render: (text) => {
        return (
          <Image
            width={200}
            onError={handleImageError}
            src={SERVER_URL + "/" + text}
          />
        );
      },
    },
    {
      title: "Parent",
      dataIndex: "parent_id",
      render: (value, record, index) => (
        <>{listAll.find((item) => item.id === record.parent_id)?.name}</>
      ),
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
    fetchAllCategory();
  }, []);

  return {
    columns,
    modal,
    setModal,
    data,
    setData,
    listAll,
    setListAll,
    debounce,
    pagination,
    search,
    fetchProductList,
    fetchAllCategory,
  };
};

export default useCategory;
