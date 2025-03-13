import React from "react";

const ArrowButtons = (props) => {
  const { onPrevious, onNext } = props;

  return (
    <div className="container-fluid container-sm arrows-buttons d-block d-md-none d-flex justify-content-between">
      <img
        src={`${process.env.PUBLIC_URL}/images/icon-previous.svg`}
        alt="previous button"
        onClick={onPrevious}
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/icon-next.svg`}
        alt="next button"
        onClick={onNext}
      />
    </div>
  );
};

export default ArrowButtons;
