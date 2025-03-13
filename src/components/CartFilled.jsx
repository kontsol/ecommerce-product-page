import React, { useState } from "react";
import "../css/CartFilled.css";
import Button from "./Button";

const CartFilled = ({ cartItems, totalCount, isCartOpen, onDelete }) => {
  return (
    <div
      className={`${isCartOpen ? "d-block" : "d-none"} cart-filled py-4 px-4`}
    >
      <h1 className="pb-4">Cart</h1>
      <div className="w-100">
        {cartItems &&
          cartItems.map((item, index) => (
            <div
              key={index}
              className="d-flex g-2 align-items-center justify-content-between cart-product-info py-4 "
            >
              <img
                className=""
                alt="cart product"
                id="cart-product-img"
                src={`${process.env.PUBLIC_URL}/images/image-product-1-thumbnail.jpg`}
              />
              <div className="">
                <h2 id="cart-product-title">{item.title}</h2>
                <p id="cart-product-price">
                  ${item.price} x {totalCount}{" "}
                  <strong>${item.price * totalCount}</strong>
                </p>
              </div>
              <img
                alt="delete button"
                src={`${process.env.PUBLIC_URL}/images/icon-delete.svg`}
                onClick={() => onDelete(item.id)}
              />
            </div>
          ))}

        {cartItems.length === 0 && (
          <div className="cart-empty">
            <h2>Your cart is empty. </h2>
          </div>
        )}
        {cartItems.length !== 0 ? <Button text="Checkout" /> : null}
      </div>
    </div>
  );
};

export default CartFilled;
