import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
// import HeartIcon from "@mui/icons-material/Favorite";
// import EyeIcon from "@mui/icons-material/Visibility";
// import TransferIcon from "@mui/icons-material/TransferWithinAStation";

const CommonCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  // Check if the product is defined; if not, return a placeholder
  if (!product) {
    return null; // Simply return null instead of an error message
  }

  const { id, name, description, price, image } = product; // Destructure product properties

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value); // Update quantity state
  };

  // Function to format the price (if it's a number)
  const formatPrice = (price) => {
    if (typeof price === "number") {
      return price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
    }
    return price;
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            border: "1px solid #000",
            borderRadius: "0px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={2}>
            {/* Image Section */}
            <Grid item xs={6}>
              <CardMedia
                component="img"
                image={image}
                alt={name || "Product Image"}
                sx={{
                  width: "100%",
                  height: 200,
                  objectFit: "contain",
                  paddingTop: "1rem",
                }}
              />
            </Grid>

            {/* Card Content Section */}
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography gutterBottom variant="body2" component="div" sx={{ fontWeight: "bold" }}>
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {description}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {formatPrice(price)}
                  </Typography>
                </CardContent>

                {/* Quantity Selector */}
                <FormControl size="small" sx={{ minWidth: 145, mb: 2 }}>
                  <InputLabel id="quantity-select-label">Qty</InputLabel>
                  <Select
                    labelId="quantity-select-label"
                    id="quantity-select"
                    value={quantity}
                    label="Qty"
                    onChange={handleQuantityChange}
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <MenuItem key={qty} value={qty}>
                        {qty}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Add to Cart Button */}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => onAddToCart(product, quantity)} // Call the prop function
                  sx={{
                    backgroundColor: "#febd2f",
                    color: "#173334",
                    lineHeight: "2rem",
                    borderRadius: "0",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },
                  }}
                >
                  View Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default CommonCard;
