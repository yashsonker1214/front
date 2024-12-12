import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";


const AppContext = createContext();

const url = "http://localhost:1000/api";




const AppState = (props) => {
  const [products, setProducts] = useState([]); 
 
  useEffect(() => {
    axios
      .get(`${url}/products/all`)
      .then((response) => {
        console.log("Fetched products:", response.data.products);  // Log the products array
        setProducts(response.data.products);  // Set the products array correctly
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
  const register = async (lastname, firstname, email, password) => {
    try {
      const response = await axios.post(
        `${url}/user/register`, 
        { firstname, lastname, email, password }, 
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,  // Send cookies if required
        }
      );
      
      // Notify success on successful registration
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });

      return response.data;  // Return response data
    } catch (error) {
      console.error("Registration Error:", error);
      
      // Notify error if registration fails
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        }
      );

      // Return failure message on error
      return { success: false, message: "Registration failed." };
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
          withCredentials: true,  // Send cookies if required
        }
      );

      // Notify success on successful login
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Bounce,
      });

      return response.data;  // Return response data
    } catch (error) {
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

      // Return failure message on error
      return { success: false, message: "Login failed." };
    }
  };

  // Wrap the children components with the context provider
  return (
    <AppContext.Provider value={{ register, login, products }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppState };
export default AppState;

