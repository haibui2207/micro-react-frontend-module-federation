import React from "react";

const product = {
  title: "Olivia's Space Academy",
  thumbnail:
    "https://www.lego.com/cdn/cs/set/assets/blt142b0b17b6036ea4/41713-T2-202205-PS-Block-Mixed-Large.jpg?fit=crop&format=webply&quality=80&width=650&height=720&dpr=2",
};

const App = () => {
  return (
    <div
      style={{
        flex: "none",
        width: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "1 1 auto",
          height: "450px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${product.thumbnail})`,
        }}
      />
      <p style={{ flex: "none", textAlign: "center" }}>{product.title}</p>
    </div>
  );
};

export default App;
