import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from "./context/AppState";  // Your context provider
import Basmati from './components/AllProducts/Basmati';
import Category from './components/Category/Category';
import Pages from './components/Page/Pages';
import Home from './components/Home/Home';
import Abouts from './components/Page/Abouts/Abouts';
import Contact from './components/Page/Contact/Contact';
import Faq from './components/Page/Faq/Faq';
import Article from './components/Page/Article/Article';
import Blog from './components/Page/Blog/Blog';
import Categories from './components/Page/Categories/Categories';
import ProductCard from './components/Card/ProductCard';
import CommonCard from './components/Card/CommonCard';
import NonBasmati from './components/AllProducts/Non-basmati';
import Riceother from './components/AllProducts/Riceother';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart.js/Cart';
import Profile from "./components/Login/Profile";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import ShowProduct from "./components/Product/ShowProduct";
import './assets/font/fonts.css';
import './App.css';
import Allproducts from "./components/AllProducts/Allproducts";
import  ProductDetails from "./components/Product/ProductDetails";


function App() {
  return (
    <AppState>
      <Router>
      
        

        <Routes>
           {/* Define the Home route */}
        <Route path="/" element={<Home />} />
        
        {/* Show Products route */}
        <Route path="/product" element={<ShowProduct />} />

{/* Route for displaying individual product details */}
<Route path="/product/:productId" element={<ProductDetails />} />

        {/* All products route */}
   
          <Route path="/Allproducts" element={<Allproducts />} />

       
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Basmati" element={<Basmati />} />
          <Route path="/nonBasmati" element={<NonBasmati />} />
          <Route path="/riceother" element={<Riceother />} />
          <Route path="/products" element={<Category />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/commoncard" element={<CommonCard />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AppState>
  );
}

export default App;
