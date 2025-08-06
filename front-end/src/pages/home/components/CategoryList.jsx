import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../../const";
import HttpRequest from "../../../services/HttpRequest";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { WebContext } from "../../../context/WebContextProvider";

function CategoryList() {
  const { listAllCategory, setListAllCategory } = useContext(WebContext);

  const { categoryId } = useParams();
  const [previousCategory, setPreviousCategory] = useState([]);
  const fetchAllCategory = async () => {
    if (listAllCategory.length) {
      setListAllCategory(listAllCategory);
      return;
    }
    const api = `${SERVER_URL}/api/web-site/category/all`;
    const res = await HttpRequest.get(api);
    const data = res.data.data;

    setListAllCategory(data.list);
  };

  useEffect(() => {
    if ((categoryId, listAllCategory.length > 0)) {
      const newCategory = listAllCategory.filter(
        (item) => item.parent_id == categoryId
      );
      if (newCategory.length > 0) {
        setPreviousCategory(newCategory);
      }
    }
  }, [categoryId, listAllCategory]);

  function getListCategory() {
    if (categoryId) {
      return previousCategory;
    } else {
      return listAllCategory.filter((item) => item.parent_id == null);
    }
  }

  useEffect(() => {
    fetchAllCategory();
  }, []);
  return (
    <div style={{ maxWidth: "1000px", margin: "20px auto" }}>
      <h2 className="text-2xl font-bold mb-4">Category</h2>
      <div className="flex flex-wrap gap-2 ">
        {getListCategory().map((item) => {
          return (
            <Link
              to={`/product-category/${item.id}`}
              key={item.id}
              state={listAllCategory}
            >
              <div key={item.id}>
                <div className="flex flex-col gap-2 mr-4 items-center space-y-4 cursor-pointer">
                  <div className=" w-[80px] h-[80px] bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
                    <img
                      src={SERVER_URL + "/" + item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-lg font-medium text-center text-gray-800">
                    {item.name}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(CategoryList);
