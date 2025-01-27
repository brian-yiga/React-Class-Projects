import React, { useState, useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import logo from "./assets/logo.png";

const App = () => {
  // const products = [
  //   {
  //     name: "Laptop Stand",
  //     description: "Metal Foldable Adjustable Height Laptop Stand - Silver",
  //     price: 29000,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/6626211/1.jpg?1205",
  //     isInStock: true,
  //   },

  //   {
  //     name: "Laptop Bag",
  //     description: "Waterproof Laptop Bag with USB Port - Black",
  //     price: 100000,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/971603/1.jpg?4693",
  //     isInStock: true
  //   },

  //   {
  //     name: "Sudo cream",
  //     description: "Sudocream. - 60g - White",
  //     price: 40000,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/3000442/1.jpg?5704",
  //     isInStock: true
  //   },

  //   {
  //     name: "HDMI Cable",
  //     description: "HDMI Cable - HD - High Speed ​​/ Ethernet - V1.4 4K 3D - 20M - Red / Black",
  //     price: 64800,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/1453791/1.jpg?6444",
  //     isInStock: true
  //   },

  //   {
  //     name: "Smart doorbell",
  //     description: "Smart WiFi Video Doorbell, 1080p HD Night Vision, Home Intercom Surveillance",
  //     price: 66200,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/2945291/1.jpg?7733",
  //     isInStock: true
  //   },

  //   {
  //     name: " LED Television",
  //     description: "SPJ 32 Inch HD Digital Satellite Free To Air Led TV - Black",
  //     price: 279600,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/1442932/1.jpg?4521",
  //     isInStock: true
  //   },

  //   {
  //     name: "Portable Radio",
  //     description: "Global Star 6.5 Inch Portable Speaker- Black (1YR WRTY)",
  //     price: 88000,
  //     image: "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/149546/1.jpg?4128",
  //     isInStock: true
  //   }
  // ];
  const handleToAddToCart = (productName) => {
    alert(`${productName} has been added to the cart`);
  };

  const [data, setData] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(apiUrl);
        const data = await result.json();
        setData(data);
      } catch (error) {
        console.error("error catching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="ABC Logo" />
        <h1>ABCSHOPPING.COM</h1>
      </header>
      <div className="productDisplay">
        {data.map((product, index) => (
          <ProductDetails
            key={index}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            rating={product.rating}
            isInStock={true}
            onAddToCart={handleToAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
