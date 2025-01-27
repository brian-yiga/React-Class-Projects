import React from "react";

const ProductDetails = ({
  title,
  description,
  price,
  isInStock,
  image,
  onAddToCart,
  category,
  rating
}) => {
  return (
    <div className="productCard">
      <img src={image} alt={image} />
      <div className="productName">
        <h3 className="name">{title}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <p className="category">{category}</p>
        <p className="rating">Rating {rating.rate}</p>
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
