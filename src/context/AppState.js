import React, { createContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

// Create a context
const AppContext = createContext();

const url = "http://localhost:1000/api"; // Replace with your API URL


// Inside AppState.js (or the file where you manage your context)

const AppState = (props) => {
  // State to manage products, loading state, and error state
  


 

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
    <AppContext.Provider value={{ register, login,  }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppState };
export default AppState;

