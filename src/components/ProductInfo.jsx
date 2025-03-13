import React, { useState } from "react";
import "../css/ProductInfo.css";
import Button from "./Button";
import ProductDetails from "./ProductDetails";
import QuantityControl from "./QuantityControl";

const ProductInfo = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="product-info container px-md-0 px-4 py-5 py-md-0 py-lg-5 d-flex flex-column justify-content-center">
      <ProductDetails />
      <div className="row gy-2 gy-md-0">
        <div className="col-12 col-md-4">
          {/* TODO pass multiple props as one  */}
          <QuantityControl
            quantity={quantity}
            onDecrease={decreaseQuantity}
            onIncrease={increaseQuantity}
          />
        </div>
        <div className="col-12 col-md-8">
          <Button
            onClick={handleAddToCart}
            className="col-12 col-md-8 w-100"
            text="Add to cart"
            icon={`${process.env.PUBLIC_URL}/images/icon-cart.svg`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
