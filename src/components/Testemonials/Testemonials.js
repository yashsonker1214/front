import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import BrushIcon from "@mui/icons-material/Brush";
// import BestSellerCard from "../Card/BestSellerCard";
// import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";

function Resizable() {
  const sliderRef = useRef(null); // Create a ref to control the slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Go to the previous slide
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Go to the next slide
    }
  };

  const slides = [
    {
      image:
        "https://tse3.mm.bing.net/th?id=OIP.U2XGxfPuBbinVxKR6nmeQQHaFh&pid=Api&P=0&h=180",
      title: "Basmati ",
      // Subtitles: "Great Supports",
      // description: "This is a description for product 1.",
      rating: "⭐⭐⭐⭐☆ 4",
    },
    {
      image:
       "https://tse1.mm.bing.net/th?id=OIP.7YKnYrpdEiw8LDj-D7RHtgHaFc&pid=Api&P=0&h=180",
      title: "Flour",
      // Subtitles: "Exception",
      // description: "This is a description for product 2.",
      rating: "⭐⭐⭐⭐⭐ 5",
    },
    {
      image:
      "https://tse2.mm.bing.net/th?id=OIP.in8dJ66AnJuBfcqwqmbUigHaHa&pid=Api&P=0&h=180",      title: "Spice",
      // Subtitles: "Exception",
      // description: "This is a description for product 3.",
      rating: "⭐⭐⭐⭐☆ 4",
    },
    {
      title: "Wheat",
      // Subtitles: "Exception",
      // description: "This is a description for product 4.",
      rating: "⭐⭐⭐⭐⭐ 5",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.AGDqCa1pqK6L7vLyMK_k1AAAAA&pid=Api&P=0&h=180",
    },
  ];

  return (
    <>
      <Grid lg={12}>
        <Box sx={{ maxWidth: "1270px" }}>
          <Typography
            sx={{
              margin: "0 auto",
              lineHeight: "1.2",
              fontWeight: 500,
              marginBottom: "1rem",
              fontSize: "3rem",
              color: "#febd2f",
              paddingLeft: "200px",

              pt: 10,
            }}
          >
            Testimonials
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "space-around",
          margin: "0 auto",
          maxWidth: "1123px",
         
          pt:3,
          pb: 10,
        }}
        justifyContent="center"
      >
        <Grid item xs={1}>
          <Button onClick={handlePrevClick}>
            <KeyboardDoubleArrowLeftIcon
              sx={{
                color: "#febd2f",
                lineHeight: "1.5rem",
                fontSize: "2.5rem",
              }}
            />
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <Grid container spacing={0.5} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    m: "5px",
                    border: "1px solid #000000",
                    borderRadius: "0",
                  }}
                >
                  <Box>
                    <Grid lg={6}>
                      <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" component="div">
                          {slide.title}
                        </Typography>
                        <Typography variant="h6" component="div">
                          {slide.Subtitles}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {slide.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {slide.rating}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Box>
                  <Box>
                    <Grid lg={6}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100, height: 100, objectFit: "contain" }}
                        image={slide.image}
                        alt={slide.title}
                      />
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={handleNextClick}>
            <KeyboardDoubleArrowRightIcon
              sx={{
                color: "#febd2f",
                lineHeight: "1.5rem",
                fontSize: "2.5rem",
              }}
            />
          </Button>
        </Grid>
      </Grid>
      {/* Best seller section */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "1200px",
          pt: 10,
        }}
      >
        <Grid lg={6}>
          <Box
            sx={{
              lineHeight: "1.2",
              fontWeight: 500,
              marginBottom: "1rem",
              fontSize: "3rem",
            }}
          >
            Best Seller
          </Box>
        </Grid>
        <Grid lg={6}>
          <Button href="/categories"
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
      </Box> */}
      {/* <BestSellerCard /> */}
      {/* <Blog /> */}
      <Container maxWidth="lg" >
      <img
              src="https://media.bighaat.com/trustmarkers/tm_pdp_page_v2.webp?w=1200&q=80"
              alt="Modern Accessories"
              style={{ maxWidth: "fullwidth", height: "auto" }} 
            />
      </Container>
      

      <Box sx={{ backgroundColor: "#173334", overflow: "hidden" }}>
        
      <Footer/>
      </Box>


    </>
  );
}

export default Resizable;
