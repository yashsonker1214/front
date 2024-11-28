import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Footer from "../../Footer/Footer";

export default function Abouts() {
  return (
    <>
      {/* First Section */}
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Navbar />
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: "#febd2f",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        />
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
            <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
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
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                About Us
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                At AboutUs, we are a dynamic and innovative company committed to
                providing comprehensive information and valuable insights on a wide range of topics.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Second Section */}
      <Grid
        container
        spacing={2}
        sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1160px", pt: 7 }}
      >
        {/* Left Side */}
        <Grid item lg={6} xs={12}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Be clear and concise
          </Typography>
          <Typography>
            We are passionate about providing our community with a delightful and fulfilling grocery shopping experience. As a trusted and reliable destination for all your food needs, we strive to be more than just a store. We are a hub of culinary inspiration, a gathering place for food enthusiasts, and a champion of health and sustainability.
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid item lg={6} xs={12}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Be clear and concise
          </Typography>
          <Typography>
            We are passionate about providing our community with a delightful and fulfilling grocery shopping experience. As a trusted and reliable destination for all your food needs, we strive to be more than just a store. We are a hub of culinary inspiration, a gathering place for food enthusiasts, and a champion of health and sustainability.
          </Typography>
        </Grid>
      </Grid>

      {/* Image and Text Section */}
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1160px",
          pt: 7,
          alignItems: "center",
        }}
      >
        <Grid item lg={6} xs={12}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Make it inviting and engaging
          </Typography>
          <Typography>
            We believe in the power of food to bring people together. Our grocery store is not just a place to shop; it's a vibrant community hub. We host cooking workshops, tastings, and educational events that foster a sense of connection and inspire culinary creativity.
          </Typography>
        </Grid>

        <Grid item lg={6} xs={12}>
          <img src="https://foodstuffs-workdo.myshopify.com/cdn/shop/files/abt-2.jpg?v=1678698974" alt="imgsection" />
        </Grid>
      </Grid>

      {/* Second Image and Text Section */}
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1160px",
          pt: 7,
          alignItems: "center",
        }}
      >
        <Grid item lg={6} xs={12}>
          <img src="https://foodstuffs-workdo.myshopify.com/cdn/shop/files/abt2.png?v=1678865023" alt="imgsection" />
        </Grid>

        <Grid item lg={6} xs={12}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Keep it short and sweet
          </Typography>
          <Typography>
            Your well-being is of utmost importance to us. That's why we offer a wide range of wholesome, organic, and allergen-friendly options to cater to diverse dietary needs and preferences.
          </Typography>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Box sx={{ textAlign: "center", pt: 5 }}>
        <Typography sx={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
          About our services
        </Typography>
        <Typography sx={{ fontSize: "1rem", marginBottom: "1rem", px:32 }}>
          Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform. We understand the importance of reliable and up-to-date information in today's fast-paced world.
        </Typography>
      </Box>

      {/* Card Section */}
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1160px",
          pt: 7,
        }}
      >
        <Grid item lg={4} xs={12}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={4} xs={12}>
          <RecipeReviewCard />
        </Grid>
        <Grid item lg={4} xs={12}>
          <RecipeReviewCard />
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Footer/>

      </Box>

    </>
  );
}

// Card Component
const RecipeReviewCard = () => {
  
 
  return (
    <Card sx={{ maxWidth: 345,border:"1px solid #000",borderRadius:"0" }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <LocalShippingIcon />
          </IconButton>
        }
        title="Fast Delivery"
      />
      
      
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
       
      </CardActions>
    </Card>
  );
};
