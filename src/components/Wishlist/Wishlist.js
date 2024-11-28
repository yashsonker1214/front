import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Link, Typography, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Button } from '@mui/material';
import CustomNavbar from "../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from '@mui/icons-material/Delete';  // Import the Delete icon
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // Import Add to Cart Icon
import { Link as RouterLink } from 'react-router-dom'; // For Link to navigate home
import Footer from '../Footer/Footer';

export default function Wishlist() {
  // Initialize wishlist items from localStorage, if available
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [
      {
        id: 1,
        name: 'Basmati Rice',
        description: 'High quality basmati rice from India.',
        image: 'https://shiva-kriti.com/wp-content/uploads/2021/09/1121-Golden-Sella-Basmati-Rice.jpg',  // Placeholder image
      },
      {
        id: 2,
        name: 'Non Basmati Rice',
        description: 'Fresh organic mangoes from the farm.',
        image: 'https://tse1.mm.bing.net/th?id=OIP.bW8lOf1SDUWP8gci7Phw0QHaFy&pid=Api&P=0&h=180',  // Placeholder image
      }
    ];
  });

  // Update localStorage whenever wishlistItems changes
  useEffect(() => {
    if (wishlistItems.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    } else {
      localStorage.removeItem("wishlist"); // If the wishlist is empty, remove it from localStorage
    }
  }, [wishlistItems]);  // Dependency array ensures this effect runs when wishlistItems changes

  // Delete function
  const handleDelete = (id) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedWishlist);  // Update state and localStorage
  };

  // Clear All function
  const handleClearAll = () => {
    setWishlistItems([]);  // Clears the wishlist from state and localStorage
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <CustomNavbar />
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
            <Link
              component={RouterLink}
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

          {/* Wishlist Section Title */}
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Wishlist
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", textAlign: "left" }}>
              We are driven by a passion for learning, discovery, and connection. <br />
              We constantly strive to enhance our platform, incorporate emerging <br />
              technologies, and adapt to the evolving needs of our users.
            </Typography>
          </Grid>

          {/* Wishlist Table */}
        </Grid>
      </Box>
      <Grid item xs={12} sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1160px", pt: 15 }}>
        <Table sx={{ width: '100%', borderColor: '#000' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Product</TableCell>
              <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Details</TableCell>
              <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Cart Button</TableCell>
              <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistItems.map((item) => (
              <TableRow key={item.id}>
                {/* Product Image */}
                <TableCell>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 100, height: 100, objectFit: 'contain' }}
                  />
                </TableCell>
                {/* Product Details */}
                <TableCell>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#ffffff' }}>
                    {item.description}
                  </Typography>
                </TableCell>
                {/* Cart Button */}
                <TableCell>
                  <IconButton sx={{ color: '#febd2f' }} aria-label="add to cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                {/* Delete Button */}
                <TableCell>
                  <IconButton
                    sx={{ color: '#febd2f' }}
                    aria-label="delete"
                    onClick={() => handleDelete(item.id)}  // Call delete function on click
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>

      {/* Clear All Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleClearAll}
          sx={{
            backgroundColor: "#febd2f",
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#000",
            borderRadius: "0",
            "&:hover": {
              backgroundColor: "#173334",
              color: "#febd2f",
            },
          }}
        >
          Clear All
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#173334",
          mt: 10,
          pb: 10,
          color: "#febd2f",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
