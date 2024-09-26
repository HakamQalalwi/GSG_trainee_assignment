import React from "react";

const ProductList = ({ products, onFilterChange, activeFilter }) => {
  const categories = ["All", "Electronics", "Clothing"];

  return (
    <div>
      <div className="filter-section">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-display">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
