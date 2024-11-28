import { Box, Grid } from "@mui/material";
import CardComponent from "../Card";

const cardData = [
  {
    image: "https://www.thespruceeats.com/thmb/lQ2RJYfARyMX2vWUpOPvs6FSNWU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basmati-rice-in-a-bowl-with-a-spoon-519309138-7ca58970c0914bb9b117d43cb09d7dd8.jpg",
    title: "Rice",
     description: "Basmati",
    // price: "Rs.1,3000",
  },
  {
    image: "https://www.thespruceeats.com/thmb/YbxtmFJRrUXJJyVBoIjYxxftcx8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-126372385-58950f353df78caebc239b4d.jpg",
    title: "Flour",
     description: "Wheat Flour",
    // price: "Rs.1,3000",
  },
  {
    image: "https://as2.ftcdn.net/v2/jpg/01/94/80/95/1000_F_194809519_dOd3qUvnC0tCFrKMZWmjCAsw4cL6gfnA.jpg",
    title: "Vegetables",
     description: "Red Onion",
    // price: "Rs.1,3000",
  },
];

const BestSellerCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "0 auto",
        maxWidth: "1125px",
        pt: 10,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={0}> {/* Set spacing to 0 */}
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div style={{ margin: 0 }}> {/* Remove margins */}
              <CardComponent
                image={card.image}
                title={card.title}
                description={card.description}
                price={card.price}
                onAddToCartClick={() => console.log("Add to cart clicked")}
                isLastCard={index === cardData.length - 1}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestSellerCard;
