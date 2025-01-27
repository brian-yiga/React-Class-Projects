# E-Commerce Products Page

This project is a simple e-commerce products page created to practice React and JavaScript fundamentals. It demonstrates concepts like state management, props, API integration, and modular component architecture.

---

## Features

### 1. **Product Listing**
- Fetches products dynamically from [Fake Store API](https://fakestoreapi.com/products).
- Displays product information, including:
  - Image
  - Name
  - Description
  - Price
  - Category
  - Ratings

### 2. **Reusable Product Component**
- Each product is rendered using the `ProductDetails` component, which accepts props like image, title, description, price, and more.

### 3. **Add to Cart Simulation**
- Products have an "Add to Cart" button.
- Clicking the button triggers an alert confirming the product has been added to the cart.

### 4. **API Integration**
- Data is fetched using the `fetch` API from Fake Store API and displayed dynamically.
- Implements error handling in the data fetch process.

### 5. **Responsive Header**
- Includes a header with a logo and a site title.
- The logo is imported from the `assets` folder.

---

## Technology Stack

### Frontend:
- **React**: Used to create components, manage state, and handle props.
- **JavaScript**: Handles logic and dynamic rendering.
- **CSS**: Styling for layout and design.

### APIs:
- **Fake Store API**: Provides mock product data for e-commerce use.

---

## Project Structure

```
src/
├── components/
│   └── ProductDetails.js  # Reusable product component
├── assets/
│   └── Logo Blue.png      # Site logo
├── App.js                  # Main React component
├── index.js               # Entry point
│
data/
├── public/
│   ├── index.html
```

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd ecommerce-products-page
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Deployment

The app can be deployed to [Netlify](https://www.netlify.com/) or other platforms. Ensure:

- You build the project before deployment:
  ```bash
  npm run build
  ```

- Include a `_redirects` file in the `public` folder with the following content for proper routing:
  ```
  /*    /index.html   200
  ```

---

## Challenges Faced
- Learning React basics like props and state management.
- Integrating APIs dynamically and handling errors.
- Managing component-based architecture.
- Deployment troubleshooting on Netlify (blank page issues resolved by ensuring correct asset paths and redirects).

---

## Future Improvements
- Add a "View Cart" page to manage selected products.
- Improve styling for a more professional UI.
- Add search and filter functionality.
- Implement authentication and user accounts.

---

## Credits
- [Fake Store API](https://fakestoreapi.com/) for mock product data.
- React documentation and tutorials for guidance.

---

## License
This project is for educational purposes only and is not intended for production use.

