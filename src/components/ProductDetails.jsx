import React from "react";

const ProductDetails = () => {
  const custom_h3_style = {
    letterSpacing: "3px",
  };

  return (
    <div>
      <h3 style={custom_h3_style}>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <aside className="row align-items-center gap-lg-2">
        <h1 className="col-4 col-lg-3 text-start">$125.00</h1>
        <h2
          id="discount"
          className="col-2 text-center bg-dark rounded text-white col-lg-2 py-2"
        >
          50%
        </h2>
        <h3 className="col-6 text-end text-lg-start text-decoration-line-through col-lg-12">
          $250.00
        </h3>
      </aside>
    </div>
  );
};

export default ProductDetails;
