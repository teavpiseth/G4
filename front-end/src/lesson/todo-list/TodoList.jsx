import React, { useEffect, useState } from "react";
import IconTodo from "../../assets/images/icon-todo.png";
import style from "./style.module.css";
import IconAdd from "../../assets/images/icon-add.png";
import IconDelete from "../../assets/images/icon-delete.png";
import IconEdit from "../../assets/images/icon-edit.png";
import Gallary from "../Gallary";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState({
    status: false,
    index: 0,
  });
  const [status, setStatus] = useState({ created: false, updated: false });
  function handleDelete(index) {
    const itemDelete = list[index];
    setList(list.filter((item) => item != itemDelete));
  }

  function handleEdit(item, index) {
    setIsEdit({ ...isEdit, status: true, index });
    setInput(item);
  }

  function clearStatus() {
    setTimeout(() => {
      setStatus({ created: false, updated: false });
    }, 5000);
  }

  function handleAdd() {
    let _list = [];
    if (isEdit.status) {
      _list = list.map((item, index) => {
        if (index == isEdit.index) {
          return input;
        }
        return item;
      });
      setList(_list);

      setIsEdit({ ...isEdit, status: false });
      setStatus({ ...status, updated: true });
      clearStatus();
    } else {
      _list = [...list, input];
      setList(_list);
      setStatus({ ...status, created: true });
      clearStatus();
    }
    localStorage.setItem("todo", JSON.stringify(_list));
  }

  useEffect(() => {
    setTimeout(() => {
      const initList = JSON.parse(localStorage.getItem("todo"));
      setList(initList);
    }, 2000);
  }, []);

  useEffect(() => {
    // console.log("did update");
  }, [input]);

  useEffect(() => {
    // console.log("render");
  });
  // init
  // state update
  return (
    <div className={style.wrap}>
      <h2 className={style.title}>
        Todo List{" "}
        <img
          className="w-auto h-[20px] ml-[10px]"
          src={IconTodo}
          alt="icon todo"
        />
      </h2>

      <div>
        <div className="flex w-[200px] m-auto">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            type="text"
            style={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: 30,
              height: 32,
              background: "#eceef0",
            }}
          />
          <div
            onClick={() => {
              input ? handleAdd() : "";
              setInput("");
            }}
            className="bg-[#33cd31] rounded-[50px] overflow-hidden pl-[8px] pr-[6px] py-[6px] -ml-[25px] cursor-pointer"
          >
            <img
              style={{ height: 20 }}
              src={isEdit.status ? IconEdit : IconAdd}
              alt="add"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 mb-2 text-[green] text-[10px]">
        {status.created && "Create Successfully"}
        {status.updated && "Update Successfully"}
      </p>

      <div className="table-list">
        {list.map((item, index) => {
          return (
            <p key={index} className={style.listTodo}>
              {index + 1}. {item}
              <span className="flex float-right items-center">
                <img
                  onClick={() => handleEdit(item, index)}
                  src={IconEdit}
                  className="h-[13px] cursor-pointer"
                />
                <img
                  onClick={() => handleDelete(index)}
                  src={IconDelete}
                  className="h-[20px] cursor-pointer"
                />
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
