import {
  Box,
  Checkbox,
  Divider,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import CustomNavbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Favorite as HeartIcon,
  Visibility as EyeIcon,
  TransferWithinAStation as TransferIcon,
} from "@mui/icons-material";
import Footer from "../Footer/Footer";
import BestSellerCard from "../Card/BestSellerCard";

export default function Riceother() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleAddToCart = () => {
    console.log("Item added to cart");
  };

  const [quantity, setQuantity] = React.useState("");
  const [inStock, setInStock] = React.useState(true); // Tracks if "In stock" checkbox is checked
  const [outStock, setOutStock] = React.useState(false); // Tracks if "Out of stock" checkbox is checked
  const [showAll, setShowAll] = React.useState(false); // Tracks if "Show All" checkbox is checkeds

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleInStockChange = (event) => {
    setInStock(event.target.checked);
  };

  const handleOutStockChange = (event) => {
    setOutStock(event.target.checked);
  };
const handleShowAllChange = (event) => {
    setShowAll(event.target.checked);
  };
  // Array of image URLs and product names/types
  const productData = [
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/1121-Golden-Sella-Basmati-Rice.jpg",
      name: "Basmati Rice",
      type: "1121 Golden Sella",
      inStock: true,
      quantity: 20, // available quantity
    },
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/1121-Steam-Basmati-Rice.jpg",
      name: "Basmati Rice",
      type: "1121 Steam Sella",
      inStock: true,
      quantity: 15,
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.x1A_HaHYQatkzY_jWIv7LQHaHa&pid=Api&P=0&h=180",
      name: "Basmati Rice",
      type: "PR11 Golden Sella",
      inStock: false,
      quantity: 0,
    },
    {
      image: "https://tse1.mm.bing.net/th?id=OIP.5K8drsnBTe3THEC8iPJbsgHaHa&pid=Api&P=0&h=180",
      name: "Basmati Rice",
      type: "PR 11 Crime Sella",
      inStock: false,
      quantity: 0,
    },
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/Sharbati-Creamy-Sella-Rice.jpg",
      name: "Basmati Rice",
      type: "Sharbati",
      inStock: true,
      quantity: 25,
    },
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/Sugandha-Sella-Rice.jpg",
      name: "Sugandha",
      type: "1121 Golden Premium",
      inStock: true,
      quantity: 10,
    },
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/Pusa-Raw-Basmati-Rice.jpg",
      name: "Basmati Rice",
      type: "Pusa",
      inStock: false,
      quantity: 0,
    },
    {
      image: "https://shiva-kriti.com/wp-content/uploads/2021/09/1509-Steam-Basmati-Rice.jpg",
      name: "Basmati Rice",
      type: "509 Basmati Rice",
      inStock: true,
      quantity: 30,
    },
  ];
   // Filter products based on stock availability or "Show All"
  const filteredProducts = productData.filter((product) => {
    if (showAll) return true; // If "Show All" is checked, show all products
    return (
      (inStock && product.inStock) || (outStock && !product.inStock)
    );
  });

  // Get counts for checkboxes
  const inStockCount = filteredProducts.filter((product) => product.inStock).length;
  const outStockCount = filteredProducts.filter((product) => !product.inStock).length;
  const totalCount = productData.length;


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
              to="/home"
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
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Other Rice
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", textAlign: "left" }}>
                India accounts for over 70% of the world's basmati rice
                production.
                <br />
                A small portion of that is being grown organically.
                Organisations <br /> such as Kheti Virasat Mission are trying to
                increase the amount of <br /> organic basmati rice that is being
                grown in the Punjab in India.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1140px",
          pt: 5, // Adjusted padding to reduce gap
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        {/* filter */}
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item lg={3}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              Filters
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Home / Rice
            </Typography>
          </Grid>
          <Divider
            orientation="horizontal"
            sx={{
              width: "100%",
              backgroundColor: "#000",
              height: "2rem",
            }}
          />
        </Grid>

        <Grid item lg={3}>
          {/* Availability Section */}
          <Box>
            <Box sx={{ pt: 0 }}>
              {" "}
              {/* Removed unnecessary padding-top */}
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Availability
              </Typography>
              <Checkbox
                {...label}
                checked={outStock}
                onChange={handleOutStockChange}
                defaultChecked
                sx={{
                  color: "grey", // Black color for both checked and unchecked state
                  backgroundColor: "transparent", // Transparent background
                  "&.Mui-checked": {
                    color: "grey", // Black color when checked
                  },
                }}
              />
              Out of stock <span>({outStockCount})</span>
            </Box>

            <Box sx={{ pt: 1 }}>
              {" "}
              {/* Reduced padding-top to avoid large gap */}
              <Checkbox
                {...label}
                defaultChecked
                checked={inStock}
                onChange={handleInStockChange}
                sx={{
                  color: "grey", // Black color for both checked and unchecked state
                  backgroundColor: "transparent", // Transparent background
                  "&.Mui-checked": {
                    color: "grey", // Black color when checked
                  },
                }}
              />
              In stock <span>({inStockCount})</span>
            </Box>
            <Divider
              orientation="horizontal"
              sx={{
                width: "100%",
                backgroundColor: "#000",
                height: "2rem",
              }}
            />
          </Box>

          {/* Product Type Section */}
          <Box sx={{ pt: 3 }}>
            {" "}
            {/* Slight increase in padding-top for better separation */}
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Product type
            </Typography>
            <Checkbox
              {...label}
              defaultChecked
              checked={showAll}
              onChange={handleShowAllChange}
              sx={{
                color: "grey", // Black color for both checked and unchecked state
                backgroundColor: "transparent", // Transparent background
                "&.Mui-checked": {
                  color: "grey", // Black color when checked
                },
              }}
            />
            Rice Other<span>({totalCount})</span>
          </Box>
          <Divider
            orientation="horizontal"
            sx={{
              width: "100%",
              backgroundColor: "#000",
              height: "2rem",
            }}
          />

          {/* Brand Section */}
          {/* <Box sx={{ pt: 3 }}>
            {" "}
           
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Brand
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
             
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                Daawat
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                India Gate
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                Charminar
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                Fortune
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                Kohinoor
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                Shri Lal Mahal
              </Box>
              <Box>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: "grey", // Black color for both checked and unchecked state
                    backgroundColor: "transparent", // Transparent background
                    "&.Mui-checked": {
                      color: "grey", // Black color when checked
                    },
                  }}
                />
                LAL QILLA
              </Box>
            </Box>
          </Box> */}
          <Divider
            orientation="horizontal"
            sx={{
              width: "100%",
              backgroundColor: "#000",
              height: "2rem",
            }}
          />
        </Grid>

        {/* Products Grid Section */}
        <Grid item lg={9}>
          {/* Manually Typed Cards */}
          <Grid container spacing={2}>
          {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    marginBottom: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #000",
                    borderRadius: "0",
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: 700,
                    height: "300px",
                    "&:hover .hover-icons": {
                      opacity: 1, // Show icons when card is hovered
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 180,
                      height: "100%",
                      objectFit: "contain",
                      pl: "12px",
                    }}
                    image={product.image}
                    alt={product.name}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: 3,
                    }}
                  >
                    <CardContent sx={{ flex: 1, color: "#febd2f" }}>
                      <Typography gutterBottom variant="body2" component="div">
                        {product.name}
                      </Typography>
                      <Typography color="text.secondary">
                        {product.type}
                      </Typography>
                    </CardContent>
                    {/* Quantity section */}
                    <Box sx={{ mb: 2.3 }}>
                      <FormControl size="small" sx={{ minWidth: 120 }}>
                        <InputLabel id="quantity-select-label">Qty</InputLabel>
                        <Select
                          labelId="quantity-select-label"
                          id="quantity-select"
                          value={quantity}
                          label="Qty"
                          onChange={handleQuantityChange}
                          sx={{ borderRadius: "30px" }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    {/* Card Button */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={handleAddToCart}
                        sx={{
                          minWidth: 165,
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
                        View Cart  
                      </Button>
                    </Box>
                    {/* Hover icons */}
                    <Box
                      className="hover-icons"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        p: 1,
                        opacity: 0, // Initially hidden
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <Tooltip title="Add to Favorites">
                        <IconButton sx={{ color: "#febd2f" }}>
                          <HeartIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View Product">
                        <IconButton sx={{ color: "#febd2f" }}>
                          <EyeIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton sx={{ color: "#febd2f" }}>
                          <TransferIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={10}>
          <Grid item lg={4}>
            <Typography variant="h5" color="#000">
              Modern Agri Goods accessories
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography variant="">
              Early casserole recipes consisted of rice that was pounded,
              pressed, and filled with a savoury mixture of meats such as
              chicken or sweetbread.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <Button
              as={Link} to="/categories"
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
        </Grid>
        <BestSellerCard />
      </Grid>
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
