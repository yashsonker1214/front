import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="divider"
        style={{ backgroundColor: "#febd2f", height: "2px"}}
      ></div>
      
      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center", // Corrected alignItems
        }}
      >
        <Grid item lg={4}>
          <Box sx={{ pb: 5, pt: 10 }}>
           
             <Typography variant="h4" color="#febd2f" sx={{pt: 1 ,pb:2}}>
             TheAgriGoods
            </Typography>
             
          </Box>
          <Box sx={{ }}>
           
          </Box>
        </Grid>
        <Grid item lg={8}>
          <Box sx={{ pt: 5 }}>
            <Grid container spacing={1}>
              {/** Account Links **/}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="#fedb2f">Account:</Typography>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0, }}>
                  <li ><Link to="/about" >About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/faqs">FAQ's</Link></li>
                </ul>
              </Grid>

              {/** Shop Links **/}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="#fedb2f">Shop:</Typography>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/shipping">Shipping & Delivery</Link></li>
                  <li><Link to="/terms">Terms & Conditions</Link></li>
                </ul>
              </Grid>

              {/** Pages Links **/}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="#fedb2f">Pages:</Typography>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li><Link to="/articles">Article Page</Link></li>
                  <li><Link to="/blog">Blog Page</Link></li>
                  <li><Link to="/category">Category Page</Link></li>
                </ul>
              </Grid>

              {/** Social Media Links **/}
              <Grid item xs={12} sm={3}>
                <Typography variant="h6" color="#fedb2f">Follow Us:</Typography>
                <ul className="social-media" style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li><Link to="/facebook">Facebook</Link></li>
                  <li><Link to="/twitter">Twitter</Link></li>
                  <li><Link to="/instagram">Instagram</Link></li>
                  <li><Link to="/linkedin">LinkedIn</Link></li>
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
