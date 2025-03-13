import "../css/ImageOverlay.css";
import SmallProductImages from "./SmallProductImages";

const ImageOverlay = ({ image, currentIndex, onClose, onImageChange }) => {
  return (
    <div className="image-overlay">
      {onClose && <div className="background-overlay" onClick={onClose}></div>}
      <img
        id="overlay-product-image"
        src={`${process.env.PUBLIC_URL + image}`}
        alt=""
      />
      <SmallProductImages
        activeImage={currentIndex}
        onClickMainImage={onImageChange}
      />
    </div>
  );
};

export default ImageOverlay;
