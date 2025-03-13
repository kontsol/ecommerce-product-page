import React, { useState } from "react";
import "../css/Header.css";
import HeaderMenu from "./HeaderMenu";
import Cart from "./Cart";
import CartFilled from "./CartFilled";

const MENU = ["Collections", "Men", "Women", "About", "Contact"];

function Header({ cartCount, cart, totalCount, removeFromCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="container-md d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <img
          className="d-md-none d-block"
          id="menu-button"
          src={`${process.env.PUBLIC_URL}/images/icon-menu.svg`}
          alt="menu button"
          onClick={handleMenuToggle}
        />
        <img
          className="d-block img-fluid"
          id="header-logo"
          src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          alt="Logo"
        />
        <div className="">
          <ul id="header-menu" className="d-flex gap-5 list-unstyled ms-5">
            {MENU.map((item, index) => (
              <li className="" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="position-relative d-flex align-items-center justify-content-end gap-2">
        <img
          className="d-block w-25 h-25"
          id="cart-button"
          src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`}
          alt="Cart button"
          onClick={handleCartToggle}
        />
        <Cart cartCount={cartCount} />
        <img
          className="d-block w-25 h-25"
          id="header-avatar"
          src={`${process.env.PUBLIC_URL}/images/image-avatar.png`}
          alt="Avatar"
        />
      </div>
      {isMenuOpen && <HeaderMenu toggleMenu={handleMenuToggle} />}
      <CartFilled
        isCartOpen={isCartOpen}
        cartItems={cart}
        totalCount={totalCount}
        onDelete={removeFromCart}
      />
    </header>
  );
}

export default Header;
