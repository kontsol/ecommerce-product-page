import React from "react";
import "../css/Cart.css";

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      {cartCount > 0 && (
        <div className="cart-wrapper position-absolute">
          <span>{cartCount}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
