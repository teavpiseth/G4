import React from "react";
import { Button, Input, Table, Tag } from "antd";

import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";

import useCategory from "./useCategory";

const CategoryList = () => {
  const {
    modal,
    setModal,
    data,
    debounce,
    listAll,
    fetchProductList,
    pagination,
    search,
    columns,
  } = useCategory();

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
          Add Category
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
        onChange={(pagin) => {
          pagination.current.current = pagin.current;
          pagination.current.pageSize = pagin.pageSize;
          fetchProductList();
        }}
      />
      <CreateCategory
        listAll={listAll}
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
      <DeleteCategory
        modal={modal}
        setModal={setModal}
        fetchProductList={fetchProductList}
      />
    </>
  );
};
export default CategoryList;
