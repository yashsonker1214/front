// import * as React from "react";
// import { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import CardActionArea from "@mui/material/CardActionArea";
// import CardActions from "@mui/material/CardActions";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import { Grid } from "@mui/material";
// import BrushIcon from "@mui/icons-material/Brush";
// import axios from "axios"; // Ensure Axios is installed

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]); // State to hold cart items
//   const [loading, setLoading] = useState(true); // State for loading status
//   const [error, setError] = useState(""); // State for error handling

//   // Fetch cart data on component mount
//   useEffect(() => {
//     const fetchCartData = async () => {
//       try {
//         // Replace with your actual API endpoint for fetching cart items
//         const response = await axios.get("/api/cart/user", {
//           headers: {
//             "Content-Type": "application/json",
//             // Pass the authentication token if needed
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         // Ensure cart data exists in response and map items accordingly
//         if (response.data && response.data.cart && response.data.cart.items) {
//           setCartItems(response.data.cart.items); // Set cart items
//         } else {
//           setError("Cart is empty.");
//         }

//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch cart data.");
//         setLoading(false);
//       }
//     };

//     fetchCartData();
//   }, []); // Empty dependency array means this runs once on mount

//   // Loading state
//   if (loading) {
//     return <Typography variant="h5">Loading...</Typography>;
//   }

//   // Error state
//   if (error) {
//     return <Typography variant="h5">{error}</Typography>;
//   }

//   return (
//     <Container maxWidth="xl" sx={{ bgcolor: "#febd2f", mt: "5rem", height: "auto" }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 5 }}>
//         <Grid item xs={6}>
//           <Box sx={{ lineHeight: "1.2", fontWeight: 500, marginBottom: "1rem", fontSize: "1rem" }}>
//             <Typography variant="h4">Your Cart</Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={6}>
//           <Button
//             sx={{
//               textDecoration: "none",
//               backgroundColor: "#173334",
//               color: "#febd2f",
//               padding: "10px 20px",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//               borderRadius: "0",
//               "&:hover": {
//                 backgroundColor: "black",
//                 color: "white",
//                 boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
//               },
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}
//           >
//             <BrushIcon /> View Cart Details
//           </Button>
//         </Grid>
//       </Box>

//       <Grid container spacing={4} sx={{ mt: 2 }}>
//         {cartItems.length > 0 ? (
//           // Iterate through the cart items
//           cartItems.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item.productId}>
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardActionArea>
//                   {/* Show product image */}
//                   <CardMedia component="img" height="250" image={item.imgSrc} alt={item.title} />
//                   <CardContent>
//                     {/* Show product title */}
//                     <Typography gutterBottom variant="h5" component="div">
//                       {item.title}
//                     </Typography>
//                     {/* Show quantity */}
//                     <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                       Quantity: {item.qty}
//                     </Typography>
//                     {/* Show price */}
//                     <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                       Price: Rs. {item.price}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                   {/* Remove button (if you need functionality, add event handler) */}
//                   <Button size="small" color="primary">
//                     Remove
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))
//         ) : (
//           <Typography variant="h6" sx={{ width: "100%" }}>
//             Your cart is empty.
//           </Typography>
//         )}
//       </Grid>
//     </Container>
//   );
// }
