import React from "react";

const Products = React.lazy(() => import("Products/App"));
const RelatedProducts = React.lazy(() => import("RelatedProducts/App"));

const App = () => {
  return (
    <React.Suspense fallback={null}>
      <div
        style={{
          display: "flex",
          width: "800px",
          margin: "48px auto",
          borderRadius: "5px",
          border: "1px solid #000",
          overflow: "hidden",
          boxShadow: "0px 5px 16px -2px rgba(0,0,0,0.75)",
        }}
      >
        <Products />
        <RelatedProducts />
      </div>
    </React.Suspense>
  );
};

export default App;
