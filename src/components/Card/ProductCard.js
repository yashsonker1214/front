import React, { useState } from 'react';
import CustomNavbar from '../Navbar/Navbar';
import CommonCard from '../Card/CommonCard';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: '$10', image: 'image_url_1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: '$20', image: 'image_url_2' },
  // Add more products as needed
];

const App = () => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex > -1) {
      // Update quantity if product already in cart
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <CommonCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
