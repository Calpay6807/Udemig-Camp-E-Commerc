import React from "react";

const index = () => {
  return (
    <>
      <div className="product-block">
        <div className="product-img">
          <img src="assets/images/product_img_7.png" alt="" />
        </div>
        <div className="product-content">
          <h5>
            <a href="#" className="product-title">
              <strong>{props.title}</strong>{" "}
            </a>
          </h5>
          <div className="product-meta">
            <a href="#" className="product-price">
              {props.price}
            </a>
            {props.discountedPrice ? (
              <a href="#" className="discounted-price">
                {props.discountedPrice}
              </a>
            ) : null}
          </div>
          <div class="shopping-btn">
            <a href="#" className="product-btn btn-like">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#" className="product-btn btn-cart">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
