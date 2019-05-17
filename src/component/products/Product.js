import React, { Fragment } from "react";
import moment from "moment";

export default function Product(props) {
  const {
    title,
    images,
    deal,
    saleEndDateString,
    promotion: { buyOnlineLinkURL }
  } = props.product;

  const noImg = <div className="noImg">no image</div>;

  return (
    <div className="product__item">
      {deal && <span className="product__item--deal-badge">{deal}</span>}
      {images[0].imageURL ? (
        <img
          className="product__item--img"
          src={images[0].imageURL}
          alt={title}
        />
      ) : (
        noImg
      )}
      {title && <div className="product__item--title">{title}</div>}
    </div>
  );
}
