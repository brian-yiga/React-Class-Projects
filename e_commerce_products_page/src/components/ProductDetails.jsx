import React from "react";

const ProductDetails = ({
  name,
  description,
  price,
  isInStock,
  image,
  onAddToCart,
}) => {
  return (
    <div className="productCard">
      <img src={image} alt={image} />
      <div className="productName">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">UGX {price}</p>
        <p className="stock">{
          isInStock ? 'In Stock' : 'Out Of Stock'
        }</p>
      </div>
      <button
        id="addToCart"
        onClick={() => onAddToCart(name)}>
          Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
