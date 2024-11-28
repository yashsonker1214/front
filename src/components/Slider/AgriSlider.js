import React, { useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Slider from "react-slick";

// Import your images from the assets folder
// import images1 from '..//../assets/img/images1.png';

const AgriSlider = () => {
  const sliderRef = useRef(null);

  // Use the imported images
  const images = [
    // images1,
    // images1,
    // images1,
    // images1,
    // images1,
    // images1,

    "https://logos.textgiraffe.com/logos/logo-name/Agri-designstyle-handy-m.png",
    "https://logos.textgiraffe.com/logos/logo-name/Agri-designstyle-handy-m.png",
    "https://logos.textgiraffe.com/logos/logo-name/Agri-designstyle-handy-m.png",
    "https://logos.textgiraffe.com/logos/logo-name/Agri-designstyle-handy-m.png",
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Adjust this to your desired time (in milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ overflow: "hidden",pt:5 }}>
      <Box
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1170px",
          position: "relative",
        }}
      >
        <Button
          onClick={handlePrevClick}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <KeyboardDoubleArrowLeftIcon
            sx={{ color: "#febd2f", fontSize: "2.5rem", cursor: "pointer" }}
          />
        </Button>

        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ paddingRight: "3rem" }}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: "180px",
                  height: "80px",
                  objectFit: "cover", // Ensures images retain their aspect ratio while covering the space
                  paddingRight: "0.5rem", 
                  paddingLeft: "0.5rem" 
                }}
              />
            </div>
          ))}
        </Slider>

        <Button
          onClick={handleNextClick}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <KeyboardDoubleArrowRightIcon
            sx={{ color: "#febd2f", fontSize: "2.5rem", cursor: "pointer" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default AgriSlider;
