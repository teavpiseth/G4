import React from "react";
import { Button, Input, Table, Select } from "antd";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";

import useProductList from "./userProductList";
import UploadImageModal from "./UploadImageModal";

const ProductList = () => {
  const {
    modal,
    setModal,
    data,
    pagination,
    search,
    fetchProductList,
    columns,
    listAllCategory,
    getParentCategory,
    debounce,
    setCategoryId,
  } = useProductList();

  return (
    <>
      <div className="flex justify-between">
        <div>
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
          <Select
            allowClear
            onChange={(value) => {
              setCategoryId(value);
            }}
            showSearch
            filterOption={(input, option) =>
              option?.label?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
            }
            placeholder="Select a category"
            options={listAllCategory.map((item) => ({
              value: item.id,
              label: `${getParentCategory({ parentId: item.parent_id })} - ${
                item.name
              }`,
            }))}
          />
        </div>
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
        listAllCategory={listAllCategory}
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
      <DeleteProduct
        listAllCategory={listAllCategory}
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
      <UploadImageModal
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
    </>
  );
};
export default ProductList;
