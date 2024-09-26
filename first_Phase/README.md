# Product List Web Page

## Objective
Create a functional and visually appealing web page that displays a filterable list of products.

## Project Overview
This project implements a product list that can be filtered by category using HTML, CSS, and JavaScript. The page features a simple and modern layout with dynamic product listing and filtering functionality.

### Features
- **Product List**: Displays a list of products with names, categories, and prices.
- **Category Filters**: Allows users to filter products by category using buttons or a dropdown menu.
- **Responsive Layout**: The product list and filter buttons are styled using modern CSS techniques like flexbox or grid, providing a responsive and visually appealing design.
- **Dynamic Listing**: Products are dynamically listed using JavaScript, with filtering based on the selected category.

## Requirements

### 1. **HTML Structure**
- **Heading**: A clear heading to identify the product list.
- **Filter Section**: A designated area to hold the filter buttons or dropdown.
- **Product Display Area**: A container element where the product items will be displayed.

### 2. **CSS Styling**
- **Layout**: Use flexbox or grid to create a well-organized and responsive layout for the web page.
- **Typography**: Select readable fonts and sizes.
- **Colors and Visual Appeal**: Use a visually appealing color scheme, with background colors or borders to distinguish various elements.
- **Filter Buttons**: Style the filter buttons to be visually distinctive, including hover effects for interactivity.

### 3. **JavaScript Functionality**
- **Product Data**: 
  Define an array of product objects in JavaScript. Each product object should include:
  - `name` (string): The product name.
  - `category` (string): The product category (e.g., "Electronics", "Clothing").
  - `price` (number): The product price.
  
- **Dynamic Product Listing**:
  Write JavaScript code to:
  - Dynamically create and append HTML for each product in the display area.
  - Display each product’s name, category, and price.

- **Filtering by Category**:
  - Implement filter buttons or a dropdown corresponding to the categories in the product data.
  - Update the product display to show only products from the selected category.
  - Include an "All" option to display all products.

## Installation

No installation is required. Simply clone or download this project and open the `index.html` file in your browser.

## How to Use

1. Open the web page in a browser.
2. The product list is displayed by default with all products.
3. Use the filter buttons or dropdown menu to filter products by category.
4. The product display area will update dynamically to show only products from the selected category.

## File Structure
```plaintext
├── index.html        # Main HTML structure of the page
├── styles.css        # CSS for styling the layout, typography, and interactivity
└── script.js         # JavaScript for dynamic product listing and filtering
