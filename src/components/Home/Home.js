import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../Home/Home.css"; // Import CSS

import Navbar from "../Navbar/Navbar"; // Adjust the import path if necessary
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Delivery from "../GoceryDelivery/Delivery";
import MessageComponent from "./Popup/Popup";
import Image44 from "../../assets/img44.jpg";
import Image51 from "../../assets/img51.jpg";
import Image278 from "../../assets/img199.jpg";
import ShowProduct from "../Product/ShowProduct";

// Import the Parallax component
import { Parallax } from "react-parallax";

const Home = () => {
  // State to manage the visibility of the text
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    AOS.init(); // Initialize AOS on mount

    // Set timeout to hide the text after 1 second
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3000); // 1000ms = 1 second

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Conditionally render the text message */}
      {showText && (
       <div className="fadeIn" style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.76)", // Semi-transparent background
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#febd2f", // Gold color
        zIndex: 1000,
      }}>
        TheAgrigoods
      </div>
      )}

      {/* Main Page Content */}
      <div
        data-aos="fade-top"
        style={{
          backgroundColor: "#fff", // Background color
        }}
      >
        <Navbar />

        {/* Parallax Wrapper for Carousel */}
        <Parallax
          bgImage={Image278} // Add a background image for the parallax effect
          strength={500} // Controls the intensity of the parallax effect
          style={{ height: "30rem" }}
        >
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            sx={{ width: "100%", height: "30rem", objectFit: "cover" }} // Keep carousel container height
          >
            <div>
              <img
                src={Image278}
                alt="/"
                style={{ width: "100%", height: "30rem", objectFit: "cover" }} // Adjusted image height and object-fit
              />
            </div>
            <div>
              <img
                src={Image44}
                alt="/"
                style={{ width: "100%", height: "30rem", objectFit: "cover" }} // Adjusted image height and object-fit
              />
            </div>
            <div>
              <img
                src={Image51}
                alt="/"
                style={{ width: "100%", height: "30rem", objectFit: "cover" }} // Adjusted image height and object-fit
              />
            </div>
          </Carousel>
        </Parallax>

        {/* Animated Section with Scroll Effect */}

        {/* Other Components */}
        <ShowProduct />
        <MessageComponent />
        <Delivery />
      </div>
    </>
  );
};

export default Home;
