# React Product List Application

## Objective
Convert the HTML, CSS, and JavaScript solution from Phase 1 into a React application.

## Project Overview
This project implements a product list that can be filtered by category using React components, state management, and props. The app follows a component-based structure with dynamic product listing and filtering functionality.

### Features
- **Product List**: Displays a list of products with names, categories, and prices.
- **Category Filters**: Allows users to filter products by category using buttons.
- **State Management**: Uses React's `useState` hook to manage the product data, active filters, and filtered product list.
- **Component-Based Structure**: Organizes the code into reusable React components for better maintainability.
- **Event Handling**: Handles filter button clicks and dynamically updates the product list.

## Requirements

### 1. **Component Structure**
- **App Component**:
  - Serves as the main component of the application.
  - Manages the state of the product data and the active filter.
  - Passes data and event handler functions to child components via props.
  
- **ProductList Component**:
  - Responsible for rendering the filtered list of products.
  - Receives the filtered product data as props from the `App` component.

- **Additional Components**:
  - At least one more React component (e.g., a `Filter` component for the filter buttons).

### 2. **State Management**
- **State Variables**:
  - An array of products.
  - The currently active filter (e.g., "All", "Electronics").
  - The filtered array of products that should be displayed based on the selected filter.
  
- **State Hook**:
  - Use the `useState` hook to manage the product list, filter, and filtered products within the `App` component.

### 3. **Props & Event Handling**
- **Props**:
  - Pass the filtered product list from the `App` component down to the `ProductList` component as a prop.
  - Pass event handler functions (e.g., for filter button clicks) from the `App` component to the child components.

- **Event Handling**:
  - Implement event handling for filter button clicks within the `App` component.
  - Update the filtered product list and active filter state based on user interaction.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>

2. **Navigate to the project directory:**
   ```sh
   cd second_Phase
3. **Install node modules dependencies:**
   ```sh
   npm install
4. **Start the project:**
   ```sh
   npm start
