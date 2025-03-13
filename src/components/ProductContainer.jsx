import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import "../css/ProductContainer.css";
// import ImageOverlay from "./ImageOverlay";

const ProductContainer = ({ addToCart }) => {
  return (
    <div className="product-container container-fluid container-md py-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <ProductImage />
        </div>
        <div className="col-12 col-md-6">
          <ProductInfo addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
