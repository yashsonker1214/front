import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import BrushIcon from "@mui/icons-material/Brush";
import CommonCard from "../Card/CommonCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Testemonials from "../Testemonials/Testemonials"
import { Link } from "react-router-dom";

export default function Delivery() {
  const cardsData = [
    {
      image:
      "https://tse3.mm.bing.net/th?id=OIP.U2XGxfPuBbinVxKR6nmeQQHaFh&pid=Api&P=0&h=180",
      // title:"Flour",
      description: "Flour.",
      // price: "$19.99",
      quantity: 1,
    },
    {
      image:
      "https://tse2.mm.bing.net/th?id=OIP.in8dJ66AnJuBfcqwqmbUigHaHa&pid=Api&P=0&h=180",
      // title: "Spice-Whole",
      description: "Spice-Whole.",
      // price: "$19.99",
      quantity: 1,
    },
    {
      image:
      "https://freepngdesign.com/content/uploads/images/pulses-2274.png",
      // title: "Pulses",
      description: "Pulses.",
      // price: "$19.99",
      quantity: 1,
    },
    {
      image:
      "https://www.pngmart.com/files/23/Spices-PNG-HD.png",
      
      // title: "Spices",
      description: "Spices.",
      // price: "$19.99",
      quantity: 1,
    },
    {
      image:
      "https://www.pngarts.com/files/3/Vegetable-Transparent.png",
      // title: "Vegetable",
      description: "Vegetable .",
      // price: "$19.99",
      quantity: 1,
    },
    {
      image:
      "https://tse4.mm.bing.net/th?id=OIP.IayqhzGdFRrq-fW8zxEarAAAAA&pid=Api&P=0&h=180",
      // title: "Oil Seed",
      description: "Oil Seed.",
      // price: "$1.99",
      quantity: 1,
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.E95GrjMg3f6g8Qhhc1ap9AHaFj&pid=Api&P=0&h=180",      title: "Grain",
      description: "Grain.",
      // price: "$19.99",
      quantity: 1,
    },
    // ... (Other card data)
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Number of cards to display at a time
  const [fade, setFade] = useState(false);

  const handleAddToCartClick = () => {
    console.log("Added to cart");
  };

  const handleQuantityChange = (event) => {
    console.log("Quantity changed to:", event.target.value);
  };

  const handlePrevClick = () => {
    setFade(true);
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  const handleNextClick = () => {
    setFade(true);
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsToShow, cardsData.length - cardsToShow)
    );
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 300); // Match duration to CSS
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div>
      {/* First heading */}
      <Grid item xs={12} lg={12} md={6}>
        <Box
          sx={{
            margin: "0 auto",
            padding: "0 10px",
            maxWidth: "1123px",
            pt: 20,
            lineHeight: "1.2",
            fontWeight: 500,
            marginBottom: "1rem",
            fontSize: "3rem",
           
          }}
        >
          Fast and affordable grocery delivery
        </Box>
      </Grid>

      {/* Second heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "1123px",
          pt: 5,
        }}
      >
        <Grid item xs={6}>
          <Box
            sx={{
              lineHeight: "1.2",
              fontWeight: 500,
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          >
            Mart grocery delivery marketing slogans and taglines that’s <br />
            updated for 2021. Find the best one that captures your store’s
            <br /> essence.
          </Box>
        </Grid>
     
        <Grid item xs={6}>
          <Button as={Link} to="/categories"
            sx={{
              backgroundColor: "#febd2f",
              color: "#173334",
              padding: "10px 20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
              },
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BrushIcon /> Show Products
          </Button>
        </Grid>
      </Box>

      {/* Top Cards Section with Fade Effect */}
      <Grid
        container
        spacing={1 }
        sx={{ justifyContent: "center", margin: "0 auto",  maxWidth: "1140px" }}
        className={fade ? "fade" : ""}
      >
        {cardsData
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((card, index) => (
            <CommonCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
              quantity={card.quantity}
              onAddToCartClick={handleAddToCartClick}
              handleQuantityChange={handleQuantityChange}
              product={{ ...card }} // Pass the whole card object as product
              onAddToCart={handleAddToCartClick} // Update this function
              comments={card.comments} // Pass comments
            />
          ))}
      </Grid>

      {/* Navigation Arrows */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          mb: 2,
          mt: 2,
        }}
      >
        <IconButton
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          sx={{
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          <KeyboardDoubleArrowLeftIcon
            sx={{ fontSize: "55px", color: "#febd2f" }}
          />
        </IconButton>
        <IconButton
          onClick={handleNextClick}
          disabled={currentIndex + cardsToShow >= cardsData.length}
          sx={{
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.2)" },
          }}
        >
          {" "}
          <KeyboardDoubleArrowRightIcon
            sx={{ fontSize: "55px", color: "#febd2f" }}
          />
        </IconButton>
      </Box>

      {/* Bottom Cards Section with Fade Effect */}
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center" }}
        className={fade ? "fade" : ""}
      >
        {cardsData
          .slice(currentIndex + cardsToShow, currentIndex + cardsToShow * 2)
          .map((card, index) => (
            <CommonCard
              key={index + cardsToShow} // Ensure unique keys
              image={card.image}
              title={card.title}
              description={card.description}
              price={card.price}
              quantity={card.quantity}
              onAddToCartClick={handleAddToCartClick}
              handleQuantityChange={handleQuantityChange}
              
              comments={["Great product!", "Very useful.", "Highly recommended."]}
            />
          ))}
      </Grid>
      {/* side imag text and and image */}
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          maxWidth: "1170px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt:10
        }}
      >
        {/* Left Side - Text */}
        <Grid item lg={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://img.freepik.com/free-photo/high-angle-grains-sacks_23-2148289418.jpg?ga=GA1.1.159877803.1726133487&semt=ais_hybrid"
              alt="Modern Accessories"
              style={{ maxWidth: "100%", height: "auto" }} 
            />
          </Box>
        </Grid>

        {/* Right Side - Image */}

        <Grid item lg={6} xs={12}>
          <Box
            sx={{
              lineHeight: "1.2",
              fontWeight: 500,
              marginBottom: "1rem",
              fontSize: "3rem",
              pt: 10,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "1.5rem", color: "#febd2f", lineHeight: "1.2" }}
              gutterBottom
            >
              TheAgriGoods.
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "3rem", fontWeight: 700 }}>
              Delivering happiness <br />
            </Typography>

            <Typography
              variant="h3"
              sx={{ fontSize: "1.5rem", color: "#000000", lineHeight: "1.2" }}
              gutterBottom
            >
              to your home
            </Typography>
            <Typography variant="body1"
              sx={{ fontSize: "1rem", color: "#febd2f", lineHeight: "1.2" }}
              gutterBottom>
              it is clear that more people are opting to have their groceries
              delivered to  <br/> them; even grocery stores know that this is the
              future of the industry. If you <br/> own a local supermarket or are
              thinking of starting one, you need to <br/> advertise it effectively.
            </Typography>
          </Box>
          <Grid item xs={6}>
            <Button as={Link} to="/categories"
              sx={{
                backgroundColor: "#febd2f",
                color: "#173334",
                padding: "10px 20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                },
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <BrushIcon /> Show Products
            </Button>
          </Grid>
        </Grid>
      
      </Grid>
      <Testemonials/>
      
      {/* CSS for Fade Transition */}
      <style jsx>{`
        .fade {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
