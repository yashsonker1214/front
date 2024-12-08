import Navbar from "../Navbar/Navbar"; // Adjust the import path if necessary
import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Delivery from "../GoceryDelivery/Delivery";
import MessageComponent from "./Popup/Popup";
import Image44 from "../../assets/img44.jpg"
import Image51 from "../../assets/img51.jpg"
import Image278 from "../../assets/img199.jpg"
import ShowProduct from "../Product/ShowProduct";
 
const Home = () => {
  return (
    <>
      <Box
       
      >
        <Navbar />
        <Carousel
  autoPlay
  infiniteLoop
  interval={3000}
  showThumbs={false}
  sx={{ width: "100%", height: "30rem", objectFit: "cover"  }}  // Keep carousel container height
>
  <div>
    <img
      src={Image278}
      alt="/"
      style={{ width: "100%", height: "30rem", objectFit: "cover" }}  // Adjusted image height and object-fit
    />
    {/* <p className="legend">Basmati Rice</p> */}
  </div>
  <div>
    <img
      src={Image44}
      alt="/"
      style={{ width: "100%", height: "25rem", objectFit: "cover" }}  // Adjusted image height and object-fit
    />
    {/* <p className="legend">Fresh Produce</p> */}
  </div>
  <div>
    <img
      src={Image51}
      alt="/"
      style={{ width: "100%", height: "25rem", objectFit: "cover" }}  // Adjusted image height and object-fit
    />
    {/* <p className="legend">Fast Delivery</p> */}
  </div>
</Carousel>

      </Box>

      {/* Carousel with autoPlay and infiniteLoop */}

      {/* Additional Components */}
      <ShowProduct/>
     
      <MessageComponent />
      <Delivery />
    </>
  );
};

export default Home;
