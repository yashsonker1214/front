import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppState from "./context/AppState";  // Assuming your context is in `context/AppState`
// Your Login component (not shown in your code)
import Basmati from './components/AllProducts/Basmati';
import Category from './components/Category/Category';
import Pages from './components/Page/Pages';
import Home from './components/Home/Home';
import Abouts from './components/Page/Abouts/Abouts';
import Contact from './components/Page/Contact/Contact';
import Faq from './components/Page/Faq/Faq';
import Article from './components/Page/Article/Article'; // or Articles.jsx
import Blog from './components/Page/Blog/Blog';
import Categories from './components/Page/Categories/Categories';
import ProductCard from '../src/components/Card/ProductCard';
import './assets/font/fonts.css'; // Adjust the path as needed
// import AppContext  from './context/AppContext';
// import './assets/font/font';
import './App.css'
import CommonCard from './components/Card/CommonCard';
import NonBasmati from './components/AllProducts/Non-basmati';
import Riceother from './components/AllProducts/Riceother';
import Flour from './components/Product/Flour';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart.js/Cart';
import Profile from "./components/Login/Profile";
import Register from "./components/Login/Register";
import  Login from "./components/Login/Login";



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };
  // const { data } = useContext(AppContext);

  return (
    <AppState>
    <Router>
      {/* <Navigation /> Add navigation here */}
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/register" element={<Register />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/basmati" element={<Basmati />} />
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
        <Route path="/products" element={<ProductCard />} />
        <Route path="/commoncard" element={<CommonCard />} />
        <Route path="/flour" element={<Flour />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />


        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
      </Routes>
      {/* <div>
            <h1>Current data: {data}</h1>
           
        </div> */}
    </Router>
    </AppState>
    
  );
}

export default App;
