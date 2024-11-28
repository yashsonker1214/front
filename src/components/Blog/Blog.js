import React, { useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Slider from "react-slick";
import styled from "styled-components";
import Footer from "../Footer/Footer";

const CardContainer = styled(Card)`
  margin: 0 10px; /* Add margin for spacing */
  
  img {
    width: 100%;
    height: 200px; /* Adjust height as needed */
    object-fit: cover; /* Ensure image fills container */
  }
`;

const BlogArticles = () => {
  const sliderRef = useRef(null);

  const articles = [
    {
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description: "Immerse yourself in a world of culinary innovation, where...",
    },
    {
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description: "Immerse yourself in a world of culinary innovation, where...",
    },
    {
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description: "Immerse yourself in a world of culinary innovation, where...",
    },
    {
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description: "Immerse yourself in a world of culinary innovation, where...",
    },
    // Add more articles...
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
    }, 2500); // 2 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ backgroundColor: "#173334", overflow: "hidden" }}>
      <Grid container spacing={2} sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1170px", pt: 10 }}>
        <Grid item xs={12}>
          <Typography variant="h4" color="#fedb2f" sx={{ pt: 1, pb: 2 }}>
            TheAgriGoods
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{  margin: "0 auto", padding: "0 10px", maxWidth: "1170px", position: 'relative', backgroundColor: "#173334" }}>
        <Button
          onClick={handlePrevClick}
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ color: "#febd2f", fontSize: "2.5rem", cursor: "pointer" }} />
        </Button>
        <Slider ref={sliderRef} {...settings}>
          {articles.map((article, index) => (
            <CardContainer
              key={index}
              sx={{
                color: "#febd2f",
                backgroundColor: "#173334",
                borderRadius: 0,
                border: "1px solid #fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent>
                <small>
                  {article.date} / {article.author}
                </small>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body2">{article.description}</Typography>
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: 2,
                    borderColor: "#febd2f",
                    borderRadius: 0,
                    color: "#febd2f",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </CardContainer>
          ))}
        </Slider>
        <Button
          onClick={handleNextClick}
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <KeyboardDoubleArrowRightIcon sx={{ color: "#febd2f", fontSize: "2.5rem", cursor: "pointer" }} />
        </Button>
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogArticles;
