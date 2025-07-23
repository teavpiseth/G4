import React, { useState, useEffect } from "react";
import HttpRequest from "../services/HttpRequest";
import { SERVER_URL } from "../const";
import { Link } from "react-router-dom";
export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    HttpRequest.get(SERVER_URL + "/api/web-site/product").then((res) => {
      setProducts(res.data.data.list);
    });
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px" }}>
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          Most Popular
        </h1>

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
  );
}
