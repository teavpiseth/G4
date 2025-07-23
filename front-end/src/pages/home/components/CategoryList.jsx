import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../../const";
import HttpRequest from "../../../services/HttpRequest";
import { Image } from "antd";

function CategoryList() {
  const [listAll, setListAll] = useState([]);
  const fetchAllCategory = async () => {
    const api = `${SERVER_URL}/api/web-site/category/all`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;
    setListAll(data.list);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);
  return (
    <div style={{ maxWidth: "1000px", margin: "20px auto" }}>
      <h2 className="text-2xl font-bold mb-4">Category</h2>
      <div className="flex flex-wrap gap-2 ">
        {listAll
          .filter((item) => item.parent_id === null)
          .map((item) => {
            return (
              <div key={item.id}>
                <div className="flex flex-col items-center space-y-4 cursor-pointer">
                  <div className=" bg-blue-100 rounded-full flex items-center justify-center">
                    <img
                      src={SERVER_URL + "/" + item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-lg font-medium text-center text-gray-800">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default React.memo(CategoryList);
