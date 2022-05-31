import React from "react";

const products = [
  {
    title: "Olivia's Space Academy",
    thumbnail:
      "https://www.lego.com/cdn/cs/set/assets/blt142b0b17b6036ea4/41713-T2-202205-PS-Block-Mixed-Large.jpg?fit=crop&format=webply&quality=80&width=650&height=720&dpr=2",
  },
  {
    title: "Boutique Hotel",
    thumbnail:
      "https://www.lego.com/cdn/cs/set/assets/blt17847ab2955d9c74/06-10297-Palm-Homepage-202201-Block-Mixed-Large-Product.jpg?fit=crop&format=webply&quality=80&width=650&height=720&dpr=2",
  },
  {
    title: "Blue & Beta Velociraptor Capture",
    thumbnail:
      "https://www.lego.com/cdn/cs/set/assets/blt13af902854c190eb/76946-T1-202204-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
  },
];

const App = () => {
  return (
    <div
      style={{
        flex: "none",
        width: "300px",
        height: "inherit",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginTop: 0, textAlign: "center" }}>Related products</h2>
      {products.map((product, index) => (
        <div key={index} style={{ cursor: "pointer" }}>
          <div
            style={{
              height: "100px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${product.thumbnail})`,
            }}
          />
          <p style={{ marginTop: "4px", textAlign: "center" }}>
            {product.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
