import "../css/ImageOverlay.css";
import SmallProductImages from "./SmallProductImages";

const ImageOverlay = ({ images, currentIndex, onClose, onImageChange }) => {
  return (
    <div className="image-overlay">
      {onClose && <div className="background-overlay" onClick={onClose}></div>}
      <img
        src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
        alt="Close button"
        id="close-button"
        onClick={onClose}
      />
      <img
        id="overlay-product-image"
        src={`${process.env.PUBLIC_URL + images}`}
        alt=""
      />
      <div className="image-overlay-small-images">
        <SmallProductImages
          activeImage={currentIndex}
          onClickMainImage={onImageChange}
        />
      </div>
    </div>
  );
};

export default ImageOverlay;
