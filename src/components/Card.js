import React, { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Favorite as HeartIcon,
  Visibility as EyeIcon,
} from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Close as CloseIcon } from "@mui/icons-material"; 
import { useNavigate } from "react-router-dom";

// Using PropTypes for type checking in JavaScript
const CardComponent = ({
  image,
  title,
  description,
  price,
  onAddToCartClick,
  isLastCard,
}) => {
  const [quantity, setQuantity] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const handleViewCartClick = () => {
    navigate("/cart");
  };

  const handleWishlistClick = () => {
    const product = { image, title, description, price };

    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const isProductInWishlist = wishlist.some(
      (item) => item.title === product.title
    );

    if (!isProductInWishlist) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    setSnackbarMessage("Item added to your wishlist!");
    setOpenSnackbar(true);
  };

  const handleQuantityChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div>
        {/* Render individual product data */}
        <Card
          sx={{
            display: "flex",
            marginBottom: "10px",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #febd2f",
            borderRadius: "0",
            position: "relative",
            overflow: "hidden",
            maxWidth: 700,
            height: "300px",
            flex: 1,
            borderRight: isLastCard ? "1px solid #febd2f" : "none",
            "&:hover": {
              ".hover-icons": {
                opacity: 1,
              },
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 180,
              height: "100%",
              objectFit: "contain",
              pl: "10px",
            }}
            image={image}
            alt={title}
          />
          <Box sx={{ display: "flex", flexDirection: "column", p: 3 }}>
            <CardContent sx={{ flex: 1, color: "#febd2f" }}>
              <Typography gutterBottom variant="body2" component="div">
                {title}
              </Typography>
              <Typography variant="h5" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                {price}
              </Typography>
            </CardContent>

            <Box sx={{ mb: 2.5 }}>
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
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 2.5, display: "flex", alignItems: "center", paddingBottom: "100px", pr: 5, gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleViewCartClick}
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
                }}
              >
                View Cart
              </Button>

              <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            </Box>

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
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Tooltip title="Add to Favorites">
                <IconButton sx={{ color: "#febd2f" }} onClick={handleWishlistClick}>
                  <HeartIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="View Details">
                <IconButton sx={{ color: "#febd2f" }} onClick={handleOpenModal}>
                  <EyeIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </div>

      {/* Product Details Modal */}
      <Dialog open={openModal} onClose={handleCloseModal} sx={{ "& .MuiDialog-paper": { backgroundColor: "#173334", color: "#febd2f" } }}>
        <DialogTitle sx={{ color: "#febd2f" }}>{title}</DialogTitle>
        <DialogContent sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <CardMedia component="img" sx={{ width: 200, height: 200, objectFit: "contain" }} image={image} alt={title} />
          <Box>
            <Typography variant="h6" sx={{ color: "#febd2f" }}>{description}</Typography>
            <Typography variant="h5" sx={{ mt: 2, color: "#febd2f" }}>{price}</Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={onAddToCartClick}
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
                }}
              >
                View Cart
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "#febd2f",
              color: "#173334",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "0",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <CloseIcon sx={{ color: "#173334" }} />
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Define prop types for runtime checking
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCartClick: PropTypes.func.isRequired,
  isLastCard: PropTypes.bool,
};

export default CardComponent;
