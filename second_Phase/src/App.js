import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css"; 

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    { name: "Smartphone", category: "Electronics", price: 499 },
    { name: "Laptop", category: "Electronics", price: 899 },
    { name: "Headphones", category: "Electronics", price: 199 },
    { name: "T-shirt", category: "Clothing", price: 29 },
    { name: "Jeans", category: "Clothing", price: 59 },
    { name: "Jacket", category: "Clothing", price: 99 },
  ];

  const filterProducts = () => {
    if (activeFilter === "All") {
      return products;
    } else {
      return products.filter((product) => product.category === activeFilter);
    }
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductList
        products={filterProducts()}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
