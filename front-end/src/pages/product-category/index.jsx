import React, { useState, useEffect, useCallback } from "react";
import HttpRequest from "../../services/HttpRequest";
import { SERVER_URL } from "../../const";
import { Link, useParams } from "react-router-dom";
import CategoryList from "../home/components/CategoryList";
import { useLocation } from "react-router-dom";
import { WebContext } from "../../context/WebContextProvider";
import { useContext } from "react";
export default function ProductCategory() {
  const web = useContext(WebContext);
  console.log(web);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [breadScrum, setBreadScrum] = useState([]);
  const location = useLocation();
  const listAll = location.state || {};
  console.log({ listAll });
  useEffect(() => {
    HttpRequest.get(
      SERVER_URL + "/api/web-site/product?category_id=" + categoryId
    ).then((res) => {
      setProducts(res.data.data.list);
    });
  }, [categoryId]);

  const getListBreadcrumb = useCallback((items, category_Id, value = []) => {
    let _value = value;
    const category = items.find((item) => item.id == category_Id);
    _value.push(category);
    if (category.parent_id) {
      getListBreadcrumb(items, category.parent_id, _value);
    } else {
      setBreadScrum(_value);
    }
  }, []);

  useEffect(() => {
    getListBreadcrumb(listAll, categoryId, []);
  }, [listAll, categoryId, getListBreadcrumb]);

  return (
    <>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 16px" }}
      >
        <ul>
          <li style={{ display: "inline", marginLeft: 5 }}>
            <Link to={"/"}> Home</Link>
          </li>

          {breadScrum
            ?.map((item, index) => {
              return (
                <>
                  {index === 0 ? (
                    <li style={{ display: "inline", marginLeft: 5 }}>
                      {item.name}
                    </li>
                  ) : (
                    <li style={{ display: "inline", marginLeft: 5 }}>
                      <Link to={"/product-category/" + item.id} state={listAll}>
                        {item.name}
                      </Link>
                    </li>
                  )}
                </>
              );
            })
            .reverse()}
        </ul>
      </div>
      <div>
        <CategoryList />
      </div>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px" }}
      >
        <div style={{ marginBottom: "32px" }}>
          <div
            style={{
              height: "4px",
              background: "#000",
              marginTop: "16px",
              width: "100%",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0 -12px",
          }}
        >
          {products
            .filter((object) => object.status === 1)
            .map((product) => (
              <div
                key={product.id}
                style={{
                  width: "25%",
                  padding: "12px",
                  boxSizing: "border-box",
                }}
                className="cursor-pointer"
              >
                <Link to={`/product/${product.id}`} state={product}>
                  <div
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="flex justify-center h-[120px]">
                      <img
                        className="object-contain item-center"
                        src={SERVER_URL + "/" + product?.images?.[0]?.name}
                        alt={product.name}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>

                    <div
                      style={{
                        padding: "12px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          margin: "0",
                          lineHeight: "1.1",
                        }}
                      >
                        {product.name}
                      </h2>
                      <p
                        style={{
                          fontSize: "1.2rem",
                          margin: "8px 0",
                        }}
                      >
                        $ {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
