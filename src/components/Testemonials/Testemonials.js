import React from "react";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
function Resizable() {
  return (
    <>
    <Container maxWidth="xl" >

    </Container>
      <Box sx={{ backgroundColor: "#173334", overflow: "hidden" }}>
        <Footer />
      </Box>
    </>
  );
}

export default Resizable;
