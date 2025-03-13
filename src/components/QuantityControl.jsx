import React from "react";

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="d-flex align-items-center px-3 justify-content-between py-2 product-quantity">
      <img
        id="minus-button"
        className=""
        src={`${process.env.PUBLIC_URL}/images/icon-minus.svg`}
        alt="product big"
        onClick={onDecrease}
      />
      <span className="text-center py-2">{quantity}</span>
      <img
        id="plus-button"
        className=""
        src={`${process.env.PUBLIC_URL}/images/icon-plus.svg`}
        alt="product big"
        onClick={onIncrease}
      />
    </div>
  );
};

export default QuantityControl;
