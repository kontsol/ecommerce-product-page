import React, { useState } from "react";
import "../css/SmallProductImages.css";
import IMAGES from "../IMAGES";

const SmallProductImages = ({ activeImage, onClickMainImage }) => {
  //* index comes from the map,  when we click the small image the index is passed to onClickMainImage, setActiveImage
  //* and then that index is being passed to parent component (productImage)

  return (
    <div className="container d-md-grid small-product-images d-none mt-4">
      <div className="row small-product-images-container">
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className={`${activeImage === index ? "image-clicked" : ""}`}
          >
            <img
              src={process.env.PUBLIC_URL + image}
              alt="small product images"
              onClick={() => onClickMainImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProductImages;
