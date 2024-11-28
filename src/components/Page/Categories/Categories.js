import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

export default function Categories() {
  // Define an array of items with their images, titles, and other info
  const items = [
    {
      image: "https://www.idcofoods.com/gallery_gen/4585f18e1288652540c6a9d92631bdf8.jpg",
      title: "Flour",
      description: "Description for Item 1",
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2022/2/AT/CW/KR/121338121/pr14-long-grain-non-basmati-rice-1000x1000.jpg", // Replace with actual image URL
      title: "Non-Basmati Rice",
      description: "Description for Item 2",
    },
    {
      image: "https://img.freepik.com/free-photo/golden-sesame_1368-9410.jpg?ga=GA1.1.159877803.1726133487&semt=ais_hybrid", // Replace with actual image URL
      title: "Grains",
      description: "Description for Item 3",
    },
    {
      image: "https://img.freepik.com/free-photo/top-view-rice-seed-texture_140725-12477.jpg?ga=GA1.1.159877803.1726133487&semt=ais_hybrid", // Replace with actual image URL
      title: "Basmati Rice",
      description: "Description for Item 4",
    },
    {
      image: "https://img.freepik.com/premium-photo/assorted-spices-isolated-white-background_35641-1164.jpg?ga=GA1.1.159877803.1726133487&semt=ais_hybrid", // Replace with actual image URL
      title: "Spices",
      description: "Description for Item 5",
    },
    {
      image: "https://img.freepik.com/premium-photo/hemp-oil-with-hemp-seed-white-backgrounds-cbd-oil-healthy-food-ingredient_183352-3152.jpg?ga=GA1.1.159877803.1726133487&semt=ais_hybrid", // Replace with actual image URL
      title: "Oil-Seed",
      description: "Description for Item 6",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 3,
          color: "#febd2f",
        }}
      >
        <Navbar />
      </Box>
      <Box textAlign={"center"} pt={3} pb={3}>
        <Typography variant="h5">Collection</Typography>
      </Box>
      {/* Card container */}
      <Grid2
        container
        spacing={2}
        sx={{
          margin: "0 auto",
          padding: "0 10px",
          maxWidth: "1160px",
          pt: 15,
          pb: 15,
          display: "flex",
          justifyContent: "space-around", // Use space-around for better distribution
        }}
      >
        {items.map((item, index) => (
          <Grid2 item lg={4} key={index}>
            <Card
              sx={{
                width: "350px",
                borderRadius: "0",
                height: "600px",
                border: "1px solid #000",
                display: "flex",
                flexDirection: "column", // Ensure content stacks vertically
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                    height: "450px",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}> {/* Allow content to grow */}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={2} // Adjust margin for consistent spacing
                  >
                    <Button
                      variant="contained"
                      size="small"
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
                      Show Items
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
