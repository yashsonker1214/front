import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

// Context and State URL
const AppContext = createContext();

// Production backend URL
const url = "https://back-2-sw23.onrender.com"; // Replace this URL with your actual production URL

const AppState = (props) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); // User info after successful registration/login

  const isAuthenticated = user !== null; // Check if user is authenticated

  // Fetch products from the server
  useEffect(() => {
    axios
      .get(`${url}/product/all`)
      .then((response) => {
        setProducts(response.data.products); // Set the products correctly
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        });
      });
  }, []);

  // Register function to handle user registration
  const register = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`${url}/user/register`, {
        firstName,
        lastName,
        email,
        password,
      });
      setUser(response.data); // Set user in state if registration is successful
      toast.success('Registration successful!');
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      return { success: false, message: error.response?.data?.message };
    }
  };

  // Login function to handle user login
  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${url}/user/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Required if the backend uses cookies/sessions for authentication
        }
      );
  
      // Handle success
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });
  
      // Set user in context after successful login
      setUser(response.data.user); // Make sure the `response.data.user` is correct
      return response.data; // Return the response
    } catch (error) {
      // Log the error
      console.error("Login Error:", error);
  
      // Notify error if login fails
      toast.error(
        error.response?.data?.message || "Login failed. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        }
      );
  
      return { success: false, message: "Login failed." };
    }
  };

  return (
    <AppContext.Provider value={{ register, login, products, user, isAuthenticated }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppState };
export default AppState;
