import React from "react";

const Product = React.lazy(() => import("Product/App"));
const RelatedProducts = React.lazy(() => import("RelatedProducts/App"));

const App = () => (
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
      <Product />
      <RelatedProducts />
    </div>
  </React.Suspense>
);

export default App;
