import React, { useState } from "react";
import IconTodo from "../../assets/images/icon-todo.png";
import style from "./style.module.css";
import IconAdd from "../../assets/images/icon-add.png";
import IconDelete from "../../assets/images/icon-delete.png";
import IconEdit from "../../assets/images/icon-edit.png";
export default function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  function handleDelete(index) {
    const itemDelete = list[index];
    setList(list.filter((item) => item != itemDelete));
  }

  function handleEdit(item) {
    setIsEdit(true);
    setInput(item);
  }
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
              input ? setList([...list, input]) : "";
              setInput("");
            }}
            className="bg-[#33cd31] rounded-[50px] overflow-hidden pl-[8px] pr-[6px] py-[6px] -ml-[25px] cursor-pointer"
          >
            <img style={{ height: 20 }} src={IconAdd} alt="add" />
          </div>
        </div>
      </div>
      <p className="mt-4 mb-2 text-[green] text-[10px]">
        Create Successfully 1
      </p>

      <div className="table-list">
        {list.map((item, index) => {
          return (
            <p key={index} className={style.listTodo}>
              {item}
              <span className="flex float-right items-center">
                <img
                  onClick={() => handleEdit(item)}
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
