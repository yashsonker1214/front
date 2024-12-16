import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppState";
import {
  Container,
  Grid,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import BrushIcon from "@mui/icons-material/Brush";
import { Parallax } from "react-parallax";

function ShowProduct() {
  const { products } = useContext(AppContext); // Get the products from the context
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleQuantityChange = (event, productId) => {
    setSelectedQuantities({
      ...selectedQuantities,
      [productId]: event.target.value,
    });
  };
  

  return (
    <>
      <div style={{ backgroundColor: "#fff",}}>
        {" "}
        {/* Outer background */}
        <Parallax
          bgImage="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/f16c4b5c-d439-4b1f-b81c-8ab426673378/f3b719e9-e3c6-4851-8d64-8f7e7dfaac88_1792x1024.jpg?t=1716722272" // Parallax background image
          strength={300} // Controls how strong the parallax effect is
          style={{
            minHeight: "50vh",
            position: "relative", // Position to allow the overlay
          }} // Set minimum height
        >
          {" "}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: -10,
              backgroundColor: "rgba(0, 0, 0, 0.64)", // Dark overlay (adjust opacity)
              zIndex: -1,
            }}
          />
          {/* Dark overlay */}
          {/* Content that will appear on top of the parallax */}
          <Container maxWidth="xl" style={{ position: "relative", zIndex: 2 }}>
            {/* Heading and Show Products button */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: -10,
                backgroundColor: "rgba(0, 0, 0, 0.64)", // Dark overlay (adjust opacity)
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 5,
              }}
            >
              <Grid item xs={6}>
                <Box
                  sx={{
                    lineHeight: "1.2",
                    fontWeight: 500,
                    marginBottom: "1rem",
                    fontSize: "2rem",
                    color: "#febd2f",
                  }}
                >
                  BestSeller
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Button
                  component={Link}
                  to="/categories"
                  sx={{
                    textDecoration: "none",
                    backgroundColor: "#febd2f",
                    color: "#173334",
                    padding: "10px 20px",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "#173334", // Background color on hover
                      color: "#febd2f", // Text color on hover
                    },
                  }}
                >
                  <BrushIcon /> View Products
                </Button>
              </Grid>
            </Box>
          </Container>
          {/* card */}
          <Container maxWidth="xl">
            <Grid
              container
              spacing={3}
              justifyContent="center"
              pt={"3rem"}
              pb={"3rem"}
            >
              {products.length === 0 ? (
                <Typography variant="h6" align="center" color="textSecondary">
                  Loading products...
                </Typography>
              ) : (
                // Show first 4 products
                products.slice(0, 4).map((product) => (
                  <Grid item xs={12} sm={6} md={3} key={product._id}>
                   
                 
                   <div
                      className="max-w-xs rounded-md shadow-md dark:text-gray-800"
                      style={{
                        backgroundColor: "#fff", // Card background
                        color: "#173334", // Card text color

                        overflow: "hidden", // Prevents content overflow
                        position: "relative", // Allows positioning of overlay
                        transition:
                          "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease", // Smooth transition for transform, shadow, and filter
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Initial shadow
                        "&:hover": {
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
                          transform: "scale(1.05)", // Slight scale on hover
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition on hover
                        },
                      }}
                    >
                      {/* Image */}  <Link to={`/products/${product._id} `}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.imgSrc}
                        alt={product.title}
                        sx={{
                          objectFit: "cover",
                          objectPosition: "center",
                          width: "100%",
                          transition: "transform 0.3s ease", // Smooth scaling effect on image hover
                          "&:hover": {
                            transform: "scale(1.1)", // Slight zoom effect on hover
                          },
                        }}
                      />
                      </Link>
                      <div className="flex flex-col justify-between p-6 space-y-8">
                        {/* Title and Description */}
                        <div className="space-y-2">
                          <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            sx={{
                              fontWeight: "bold",
                              p: "1rem",
                              color: "#173334",
                            }}
                          >
                            {product.title}
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                color: "#173334", // Set text color for description
                              }}
                            >
                              {product.description}
                            </Typography>
                          </Typography>
                        </div>

                        {/* Price and Quantity Dropdown */}
                        <Box display="flex" flexDirection="column" gap="8px">
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                              pl: "1rem",
                              color: "#173334", // Set price text color
                            }}
                          >
                            Price: ${product.price}
                          </Typography>

                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ p: "1rem", color: "#173334" }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              Quantity
                            </Typography>
                            <Select
                              value={selectedQuantities[product._id] || 1}
                              onChange={(e) =>
                                handleQuantityChange(e, product._id)
                              }
                              size="small"
                              sx={{
                                width: "40%",
                                color: "#173334", // Set text color for select
                              }}
                            >
                              {[...Array(product.qty).keys()].map((qty) => (
                                <MenuItem key={qty + 1} value={qty + 1}>
                                  {qty + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </Box>
                        </Box>
                      </div>
                    </div>
                   
                  </Grid>
                ))
              )}
            </Grid>
          </Container>
        </Parallax>
      </div>

      <div style={{ textAlign: "center" }}>
        {/* Image display */}
        {/* <img
          src="https://media.bighaat.com/trustmarkers/tm_pdp_page_v2.webp?w=1200&q=80"
          alt="Trust Marker"
          style={{
            width: "100%", // Make it responsive
          }}
        /> */}
      </div>
    </>
  );
}

export default ShowProduct;
