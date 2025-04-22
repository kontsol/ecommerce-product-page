import React, { useState, useEffect } from "react";
import "../css/ProductImage.css";
import SmallProductImages from "./SmallProductImages";
import IMAGES from "../IMAGES";
import ArrowButtons from "./ArrowButtons";
import ImageOverlay from "./ImageOverlay";

const ProductImage = () => {
  const [imageState, setImageState] = useState({
    mainImage: IMAGES[0],
    currentIndex: 0,
  });

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleToggleOverlay = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  const handleMainImage = (index) => {
    setImageState({
      mainImage: IMAGES[index],
      currentIndex: index,
    });
  };

  const handlePrevious = () => {
    setImageState((prevState) => ({
      ...prevState,
      currentIndex:
        prevState.currentIndex === 0
          ? IMAGES.length - 1 //Go to the last image
          : prevState.currentIndex - 1,
      mainImage:
        prevState.currentIndex === 0
          ? IMAGES[IMAGES.length - 1]
          : IMAGES[prevState.currentIndex - 1],
    }));
  };

  const handleNext = () => {
    setImageState((prevState) => ({
      ...prevState,
      currentIndex:
        prevState.currentIndex === IMAGES.length - 1
          ? 0 //Go to the last image
          : prevState.currentIndex + 1,
      mainImage:
        prevState.currentIndex === IMAGES.length - 1
          ? IMAGES[0]
          : IMAGES[prevState.currentIndex + 1],
    }));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Pass multiple props as one
  const handlers = {
    onPrevious: handlePrevious,
    onNext: handleNext,
  };

  return (
    <div className="product-image">
      <div className="main-image">
        <img
          onClick={handleToggleOverlay}
          src={`${process.env.PUBLIC_URL + imageState.mainImage}`}
          alt="product big"
          className="container-fluid container-sm main-product-image"
        />
      </div>
      <SmallProductImages
        activeImage={imageState.currentIndex}
        onClickMainImage={handleMainImage}
      />
      <ArrowButtons {...handlers} />
      {isOverlayOpen && (
        <ImageOverlay
          isOverlayOpen={handleToggleOverlay}
          images={IMAGES[imageState.currentIndex]}
          currentIndex={imageState.currentIndex}
          onClose={handleToggleOverlay}
          onImageChange={handleMainImage}
        />
      )}
    </div>
  );
};

export default ProductImage;
