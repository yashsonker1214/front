import {
  Box,
  Divider,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "../../Footer/Footer";

export default function Article() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const articles = [
    {
      imageUrl:
        "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description:
        "Immerse yourself in a world of culinary innovation, where...",
    },
    {
      imageUrl:
        "https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/5.png?v=1678335393",
      date: "08 Mar 2023",
      author: "WorkDo",
      title: "Simple Green Smoothies...",
      description:
        "Immerse yourself in a world of culinary innovation, where...",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Comment post karne ki logic yahan
    alert(
      `Comment posted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    // Form reset
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* First Section */}
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
        <Box
          sx={{
            backgroundImage: `url("https://foodstuffs-workdo.myshopify.com/cdn/shop/files/blog-page-banner.jpg?v=1678699433")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pb: 5,
            color: "#febd2f",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              margin: "0 auto",
              padding: "0 10px",
              maxWidth: "1160px",
              pt: 15,
            }}
          >
            {/* Back to Home Link */}
            <Grid item xs={12}>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.9rem",
                  }}
                >
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

            {/* About Us Section */}
            <Grid item xs={12}>
              <Box>
                <Typography
                  sx={{ fontSize: "2.5rem", fontWeight: "bold", mb: 1 }}
                >
                  Foodie’s Favourites Chef’s Table
                </Typography>
                <Typography sx={{ fontSize: "0.8rem" }}>
                  Experience the perfect harmony of sweet and savory, where
                  every forkful dances on your palate in a symphony of flavors.
                  Delight in a medley of textures that playfully tease your
                  senses, creating a delightful culinary adventure in every
                  dish. Embarking on a tantalizing adventure through the world
                  of food is like stepping into a portal that transports us to a
                  realm of flavors.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Article Content */}
      <Box
        sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1160px", pt: 7 }}
      >
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Foodie’s Favourites Chef’s Table
        </Typography>

        <Grid container spacing={2}>
          {/* right section */}
          <Grid item lg={8}>
            <img
              src="https://foodstuffs-workdo.myshopify.com/cdn/shop/articles/4.png?v=1678335289"
              alt="sideimg"
              width={"100%"}
              style={{ maxWidth: "800px", height: "auto" }}
            />
            <br />
            <Typography variant="body2" sx={{ mt: 4, lineHeight: "1.3rem" }}>
              Experience the perfect harmony of sweet and savory, where every
              forkful dances on your palate in a symphony of flavors. Delight in
              a medley of textures that playfully tease your senses, creating a
              delightful culinary adventure in every dish.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, lineHeight: "2.2rem" }}>
              Embarking on a tantalizing adventure through the world of food is
              like stepping into a portal that transports us to a realm of
              flavors, aromas, and textures. From the first sip of a perfectly
              brewed cup of coffee to the last bite of a decadent dessert, food
              has the remarkable ability to nourish not only our bodies but also
              our souls. In this blog, we invite you to join us on a
              mouthwatering expedition, as we delve into the diverse and
              captivating realm of gastronomy.
            </Typography>

            <Typography variant="h4" sx={{ mt: 4, lineHeight: "3.3rem" }}>
              <span>"</span> Cooking is both a science and an art, requiring
              precision, creativity, and passion. In this section, we'll delve
              into the techniques and skills that elevate a dish from good to
              extraordinary.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Share this Post:</Typography>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon sx={{ fontSize: 30, color: "#3b5998" }} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon sx={{ fontSize: 30, color: "#1DA1F2" }} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon sx={{ fontSize: 30, color: "#C13584" }} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon sx={{ fontSize: 30, color: "#0077B5" }} />
                  </Link>
                </Grid>
              </Grid>
            </Box>

            {/* Share Tags Section */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Share Tags:</Typography>
              
            </Box>
          </Grid>

          {/* Article Cards Section */}
          <Grid item lg={4}>
            {articles.map((article, index) => (
              <Card
                key={index}
                sx={{
                  color: "#febd2f",
                  backgroundColor: "#173334",
                  borderRadius: 0,
                  mb: 2,
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
              </Card>
            ))}
            {/* form  */}
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "0px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: 1,
              }}
            >
              <h2>Leave a Comment</h2>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  required
                  margin="normal"
                  multiline
                  rows={4}
                />
                <Button
                  sx={{
                    backgroundColor: "#febd2f",
                    color: "#000",
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
                  Post Comment
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 10,
          color: "#febd2f",
        }}
      >
        <Footer/>

      </Box>
    </>
  );
}
