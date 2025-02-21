import React from 'react';
import { FaExclamationTriangle } from "react-icons/fa";
import './Shop.css';
import './Shop1.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 


const Shop = ({ searchQuery }) => {
  // Sample product data
  const products = [
    // Cakes
    { name: "Chocolate Cake", description: "Rich cocoa delight, moist cake made with fine chocolate.(550g) ", price: "$15.00", category: "Cakes" },
    { name: "Vanilla Cake", description: "Soft fluffy cake made with vanilla extract, perfect for celebrations.(500g)", price: "$12.00", category: "Cakes" },
    { name: "Butter Choco Cake", description: "Moist buttery cake infused with rich chocolate flavor.(250g)", price: "$16.00", category: "Cakes" },
    { name: "Strawberry Cake", description: "Sweet berry flavor, fluffy cake with fresh strawberries.(500g)", price: "$14.00", category: "Cakes" },
    { name: "Choco-Strawberry Cake", description: "Delightful mix of chocolate and strawberry flavors.(1000g)", price: "$17.00", category: "Cakes" },
    { name: "white Cake", description: "Buttery delight infused with fresh berry essence.(550g)", price: "$14.00", category: "Cakes" },
    { name: "Choco-Berry Cake", description: "Chocolate layers topped with fresh strawberry cream.(550g)", price: "$18.00", category: "Cakes" },
    { name: "Butter Blueberry Cake", description: "Buttery cake infused with blueberries and fresh fruit.(500g)", price: "$19.00", category: "Cakes" },
    { name: "Grand Chocolate Cake", description: "Large decadent chocolate cake with rich cocoa taste. (500g)", price: "$20.00", category: "Cakes" },
    { name: "Classic Choco Cake", description: "Traditional chocolate cake made with finest cocoa.(500g)", price: "$15.00", category: "Cakes" },
    { name: "Butter Chocolate Cake", description: "Moist butter cake infused with rich chocolate glaze.(500g)", price: "$16.00", category: "Cakes" },
    { name: "Fruit Delight Cake", description: "Delicious blend of fresh fruits in soft vanilla sponge.(500g)", price: "$17.00", category: "Cakes" },
    { name: "Pink Berry Cake", description: "White and pink cake topped with fresh berries.(500g)", price: "$18.00", category: "Cakes" },
    { name: "Fresh Strawberry Cake", description: "Strawberry-infused cake with creamy frosting on top.(500g)", price: "$16.00", category: "Cakes" },
    { name: "White Berry Cake", description: "Soft white cake filled with fresh strawberries.(500g)", price: "$19.00", category: "Cakes" },
    { name: "Red Velvet Cake", description: "Classic red velvet cake with creamy frosting.(500g)", price: "$18.00", category: "Cakes" },
    
    // Pies
    { name: "Apple Pie", description: "A classic pie filled with spiced apple slices in a buttery, flaky crust.(1500g)", price: "$16.00", category: "Pies" },
    { name: "Pumpkin Pie", description: "A creamy pie made from spiced pumpkin filling in a pie crust.(1500g)", price: "$14.00", category: "Pies" },
    { name: "Pecan Pie", description: "A sweet, nutty pie with a syrupy filling and whole pecans.(500g)", price: "$17.00", category: "Pies" },
    { name: "Cherry Pie", description: "A tart and sweet pie filled with juicy cherries.(500g)", price: "$15.00", category: "Pies" },
    // Pastries
    { name: "Croissant", description: "A buttery, flaky pastry often served as a breakfast item.(500g)", price: "$7.00", category: "Pastries" },
    { name: "Danish Pastry", description: "A sweet, layered pastry filled with cream cheese, fruit, or nuts.(1500g)", price: "$8.00", category: "Pastries" },
    { name: "Eclair", description: "A delicate pastry filled with cream and topped with chocolate glaze.(500g)", price: "$9.00", category: "Pastries" },
    { name: "Cinnamon Roll", description: "A soft, sweet roll with a swirl of cinnamon and icing.(1000g)", price: "$6.50", category: "Pastries" },
    // Breads
    { name: "Baguette", description: "A long, narrow French loaf with a crispy crust and soft interior.(1000g)", price: "$5.00", category: "Breads" },
    { name: "Ciabatta", description: "An Italian bread with a rustic, airy crumb and crisp crust, often used for sandwiches.(500g)", price: "$6.00", category: "Breads" },
    { name: "Sourdough", description: "A tangy, dense bread made with naturally fermented dough.(500g)", price: "$7.50", category: "Breads" },
    { name: "Focaccia", description: "A flat Italian bread topped with olive oil, herbs, and sometimes vegetables.(1000g)", price: "$6.50", category: "Breads" },
    // Cookies
    { id: 1, name: "Chocolate Chip Cookies", description: "A classic cookie with semi-sweet chocolate chips throughout.(100g)", price: "$3.00", category: "Cookies" },
    { name: "Oatmeal Raisin Cookies", description: "A chewy cookie made with oats, raisins, and often cinnamon.(100g)", price: "$3.50", category: "Cookies" },
    { name: "Sugar Cookies", description: "A sweet, simple cookie often sprinkled with sugar before baking.(100g)", price: "$2.50", category: "Cookies" },
    { name: "Macarons", description: "Delicate almond meringue cookies with creamy fillings.(100g)", price: "$4.00", category: "Cookies" },
    // Muffins
    { name: "Banana Muffins", description: "A muffin made with mashed bananas, often flavored with cinnamon or nutmeg.(300g)", price: "$4.50", category: "Muffins" },
    { name: "Chocolate Muffins", description: "A rich muffin often made with cocoa powder or chocolate chips.(100g)", price: "$5.00", category: "Muffins" },
    { name: "Blueberry Muffins", description: "A soft, moist muffin filled with fresh or dried blueberries.(200g)", price: "$4.00", category: "Muffins" },
    { name: "Lemon Poppy Seed Muffins", description: "A zesty muffin with a hint of lemon and crunchy poppy seeds.(300g)", price: "$4.50", category: "Muffins" },
  ];

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to render products by category
  const renderProductsByCategory = (category) => {
    const categoryProducts = filteredProducts.filter(product => product.category === category);
    if (categoryProducts.length === 0) {
      return <div className="no-products-container">
        <h1 className="no-products"> 
          <a id="shopSectionCake">
            <FaExclamationTriangle style={{ color: "#FFCC00", fontSize: "4rem", marginRight: "15px" }} />
          </a>
          No products available in this category.
        </h1>
      </div>;
    }
    return categoryProducts.map((product, index) => (
      <div key={index} className="row">
        <img
          src={`img/products/${product.category.toLowerCase()}${(index % 16) + 1}.png`}
          alt={product.name}
          onError={(e) => {
            e.target.src = "img/products/default.png"; // Fallback image
          }}
        />
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <h2>{product.price}     

              {/* Quantity Adjustment Text */}
              <div className="quantity-container">
                <span className="circle-button">-</span>
                <span className="circle-number">1</span>
                <span className="circle-button">+</span>
              </div>



        </h2>
        <button className="product-order">
          <a
            href={`/buy?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(product.description)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy now
          </a>
        </button>
      </div>
    ));
  };

  return (
    <div className="shop-container">
      <section id="shopSection">
        {/* Content for your bakery selections */}
        <h1 class="bakery-header">Explore Our <span class="delicious">Delicious</span> Bakery Selections</h1>
      </section>
      {/* Cakes Section */}
      <div className="section">
        <a className="btn">
          Cakes<i id="shopSectionCake" className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Cakes")}
        </div>
      </div>
      {/* Pies Section */}
      <div className="section">
        <a className="btn">
          Pies<i className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Pies")}
        </div>
      </div>
      {/* Pastries Section */}
      <div className="section">
        <a className="btn">
          Pastries<i className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Pastries")}
        </div>
      </div>
      {/* Breads Section */}
      <div className="section">
        <a className="btn">
          Breads<i className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Breads")}
        </div>
      </div>
      {/* Cookies Section */}
      <div className="section">
        <a className="btn">
          Cookies<i className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Cookies")}
        </div>
      </div>
      {/* Muffins Section */}
      <div className="section">
        <a className="btn">
          Muffins<i className="bx bxs-down-arrow"></i>
        </a>
        <div className="shop-content">
          {renderProductsByCategory("Muffins")}
        </div>
      </div>

     {/* Offers Section */}
<div className="section">
  <a id="shopSectionOFFER"  className="btn">
    Special Offers<i   className="bx bxs-down-arrow"></i>
  </a>
  <div className="shop-content">
    {products
      .filter(
        (product) =>
          product.category === "Cakes" &&
          ["Chocolate Cake", "Vanilla Cake", "Strawberry Cake", "Choco-Berry Cake"].includes(product.name)
      )
      .map((product, index) => {
        const originalPrice = parseFloat(product.price.replace("$", ""));
        const discountedPrice = (originalPrice * 0.75).toFixed(2); // 25% discount
        return (
          <div key={index} className="row">
            <img
              src={`img/products/${product.category.toLowerCase()}${(index % 16) + 1}.png`}
              alt={product.name}
              onError={(e) => {
                e.target.src = "img/products/default.png"; // Fallback image
              }}
            />
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <h2>
              <span style={{ textDecoration: "line-through", color: "red" }}>
                ${originalPrice.toFixed(2)}
              </span>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                ${discountedPrice} 


                {/* Quantity Adjustment Text */}
                <div className="quantity-container">
                      <span className="circle-button">-</span>
                      <span className="circle-number">1</span>
                      <span className="circle-button">+</span>
                    </div>
          
              </span> 
            </h2>



            
            {/* Friday Offer Label */}
            <span className="friday-offer">Friday Offer !!</span>
            <button className="product-order">


              <a
                href={`/buy?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(
                  discountedPrice
                )}&description=${encodeURIComponent(product.description)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now
              </a>
            </button>
          </div>
        );
      })}
  </div>
</div>
    </div>
  );
};

export default Shop;