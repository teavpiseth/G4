export default function Product() {
  const phones = [
    {
      id: 1,
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
      price: "$669.00",
      bestSeller: false,
    },
    {
      id: 2,
      gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      price: "$549.00",
      bestSeller: false,
    },
    {
      id: 3,
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
      price: "$549.00",
      bestSeller: false,
    },
    {
      id: 4,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      price: "$499.00",
      bestSeller: true,
    },
    {
      id: 5,
      gradient: "linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)",
      price: "$199.00",
      bestSeller: false,
    },
  ];

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
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          Mobile Phones
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
        {phones.map((phone) => (
          <div
            key={phone.id}
            style={{
              width: "20%",
              padding: "0 12px",
              marginBottom: "24px",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {phone.bestSeller && (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  right: "12px",
                  zIndex: "10",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#7e3af2",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "2px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Best Seller
                </div>
              </div>
            )}
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ padding: "12px" }}>
                <div
                  style={{
                    height: "320px",
                    background: phone.gradient,
                    borderRadius: "12px",
                    marginBottom: "16px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {phone.id === 1 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "24px",
                        border: "10px solid #000",
                        borderBottom: "40px solid #000",
                      }}
                    ></div>
                  )}
                  {phone.id === 2 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "36px",
                        border: "10px solid #000",
                        borderTop: "40px solid #000",
                      }}
                    ></div>
                  )}
                  {phone.id === 3 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "12px",
                        border: "10px solid #fff",
                      }}
                    ></div>
                  )}
                  {phone.id === 4 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        border: "10px solid #000",
                        borderTop: "40px solid #000",
                        borderBottom: "40px solid #000",
                      }}
                    ></div>
                  )}
                  {phone.id === 5 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "24px",
                        border: "10px solid #fff",
                        borderBottom: "40px solid #fff",
                      }}
                    ></div>
                  )}
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      margin: "0 0 4px 0",
                    }}
                  >
                    I&apos;m a product
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "0",
                    }}
                  >
                    {phone.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
