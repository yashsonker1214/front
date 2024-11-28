import React, { useRef, useState } from "react";
import { Box, Divider, Grid, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer/Footer";

export default function Blog() {
  const sliderRef = useRef(null); // Create a ref for the slider
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const articles = [
    {
      id: 1,
      title: "Exploring the Culinary ",
      description: "A deep dive into flavors and ingredients that define our dishes.",
      date: "October 10, 2023",
      author: "Jane Doe",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",
    },
    {
      id: 2,
      title: "The Art of Baking",
      description: "Discover the secrets of baking delicious treats.",
      date: "October 12, 2023",
      author: "John Smith",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",    },
    {
      id: 3,
      title: "Taste of Italy",
      description: "A journey through the flavors of Italian cuisine.",
      date: "October 15, 2023",
      author: "Alice Johnson",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",    },
    {
      id: 4,
      title: "Healthy Eating",
      description: "Tips for incorporating healthy foods into your diet.",
      date: "October 17, 2023",
      author: "Bob Brown",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",    },
    {
      id: 5,
      title: "Baking Basics",
      description: "Learn the fundamentals of baking at home.",
      date: "October 20, 2023",
      author: "Emma White",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",    },
    {
      id: 6,
      title: "Culinary Techniques",
      description: "Essential techniques for aspiring chefs.",
      date: "October 22, 2023",
      author: "Oliver Green",
      imageUrl: "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289",    },
    // Add more articles as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    ref: sliderRef,
    beforeChange: (current, next) => setCurrentSlide(next), 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#173334", pb: 5, color: "#febd2f" }}>
        <Navbar />
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: "#febd2f",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        />

        <Box sx={{ margin: "0 auto", padding: "20px", maxWidth: "1160px" }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Welcome to Our Blog
          </Typography>

          <Grid container spacing={2} pt={5}>
            <Grid item xs={12}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "0.9rem" }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#febd2f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "0.5rem",
                    }}
                  >
                    <KeyboardBackspaceIcon sx={{ color: "#173334" }} />
                  </Box>
                  Back to Home
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={7}>
              <Box sx={{ borderRadius: 1 }}>
                <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold", mb: 1 }}>
                Welcome to Our Blog
                
                </Typography>
                <Typography sx={{ fontSize: "0.8rem" }}>
                  We strive to deliver accurate, trustworthy, and engaging content to our users. Our team works tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Card Slider Section */}
      <Box sx={{ margin: "0 auto", padding: "10px", maxWidth: "1160px" }}>
        
        <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#febd2f", padding: "1rem 0" }}>
            ALL BLOGS
          </Typography>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#febd2f", padding: "1rem 0" }}>
            NEWS
          </Typography>
        </Grid>
          {/* Slider for Blog Cards */}
          <Grid item xs={12} lg={12}>
            <Slider {...settings} ref={sliderRef}>
              {articles.map((article) => (
                <div key={article.id}>
                  <Card sx={{ color: "#febd2f", backgroundColor: "#173334", mb: 2, width: '270px',height: '380px',borderRadius:"0px" }}>
                    <CardMedia component="img" image={article.imageUrl} alt={article.title} />
                    <CardContent>
                      <small>{article.date} / {article.author}</small>
                      <Typography variant="h6">{article.title}</Typography>
                      <Typography variant="body2">{article.description}</Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          marginTop: 2,
                          borderColor: "#173334",
                          borderRadius: "0px",
                          backgroundColor: "white", // Change background to white
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
                  </Card>
                </div>
              ))}
            </Slider>
            {/* Custom Navigation Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <Button
                onClick={() => sliderRef.current.slickPrev()}
                sx={{
                  borderColor: "#febd2f",
                  borderRadius: "0px",
                  backgroundColor: "#173334",
                  color: "#febd2f",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Prev
              </Button>
              <Typography sx={{ color: "#000" }}>
                {currentSlide + 1} / {articles.length} {/* Display current slide number */}
              </Typography>
              <Button
                onClick={() => sliderRef.current.slickNext()}
                sx={{
                  borderColor: "#febd2f",
                  borderRadius: "0px",
                  backgroundColor: "#173334",
                  color: "#febd2f",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 10,
          color: "#febd2f",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
