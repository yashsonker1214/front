import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Link, Typography, Table, TableHead, TableBody, TableRow, TableCell, IconButton, Button } from '@mui/material';
import CustomNavbar from "../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom'; 
import Footer from '../Footer/Footer';

export default function Cart() {
  // Initialize wishlist items from localStorage, if available
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Update localStorage whenever wishlistItems changes
  useEffect(() => {
    if (wishlistItems.length > 0) {
      console.log("Saving to localStorage:", wishlistItems); // Log the wishlist being saved
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    } else {
      localStorage.removeItem("wishlist"); // If the wishlist is empty, remove it from localStorage
    }
  }, [wishlistItems]);

  // Delete function
  const handleDelete = (id) => {
    console.log("Deleting item with id:", id); // Log the id being deleted
    const updatedWishlist = wishlistItems.filter(item => item.id !== id);
    console.log("Updated Wishlist:", updatedWishlist); // Log the updated wishlist after deletion
    setWishlistItems(updatedWishlist);  // Update state and localStorage
  };

  // Clear All function
  const handleClearAll = () => {
    setWishlistItems([]);  // Clears the wishlist from state and localStorage
  };

  // Function to simulate adding new items to the wishlist
  // const addItemToWishlist = (item) => {
  //   setWishlistItems(prevItems => {
  //     const updatedWishlist = [...prevItems, item];
  //     return updatedWishlist;
  //   });
  // };

  // Simulated item data (this could come from an API or form input)
  // const newItem = {
  //   id: new Date().getTime(), // Unique ID based on timestamp for demo purposes
  //   name: "New Product", // Name of the product
  //   description: "This is a new product added to the cart.",
  //   image: "https://via.placeholder.com/100" // Sample image URL
  // };

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

          {/* Cart Section Title */}
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                mb: 1,
              }}
            >
              Cart
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1160px", pt: 15 }}>
        {/* Add New Item Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          {/* <Button
            variant="contained"
            color="primary"
            onClick={() => addItemToWishlist(newItem)} // Simulating adding a new item
            sx={{ backgroundColor: "#febd2f", fontWeight: "bold", fontSize: "1rem", color: "#000" }}
          >
            Add New Item to Cart
          </Button> */}
        </Box>

        {/* Conditional Rendering: Show the Table or an Empty Message */}
        {wishlistItems.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#febd2f", fontWeight: "bold", mt: 5 }}
          >
            Your cart is empty
          </Typography>
        ) : (
          <Table sx={{ width: '100%', borderColor: '#000' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Product</TableCell>
                <TableCell sx={{ backgroundColor: '#febd2f', fontWeight: 'bold', fontSize: "1rem" }}>Details</TableCell>
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
        )}
      </Grid>

      {/* Clear All Button */}
      {wishlistItems.length > 0 && (
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
      )}

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
