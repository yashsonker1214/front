import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const formFields = [
  { label: "First Name", type: "text", required: true },
  { label: "Last Name", type: "text", required: true },
  { label: "Email", type: "email", required: true },
  { label: "Phone Number", type: "tel", required: true },
  { label: "Description", type: "text", multiline: true, rows: 4, required: true },
];

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Navbar />
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
            pt:15,
          }}
        >
          {/* Back to Home Link */}
          <Grid item xs={12}>
            <Link
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

          {/* Contact Us Section */}
          <Grid item xs={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Contact Us
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                With that in mind, we strive to deliver accurate, trustworthy,
                and engaging content to our users. Our team of experts,
                researchers, and writers work tirelessly to curate high-quality
                articles, guides, and resources that cover various domains such
                as technology, science, health, business, and more.
              </Typography>
            </Box>
          </Grid>

          {/* Contact Form Section */}
          <Grid
            item
            lg={6}
            xs={12}
            sx={{ backgroundColor: "#fff", padding: "1rem" }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Contact Form
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {},
                height: "400px", // Set a fixed height for the form container
                overflowY: "auto", // Enable vertical overflow
                padding: "1rem",
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={2}>
                {formFields.map((field, index) => (
                  <Grid item xs={12} sm={field.label === "Description" ? 12 : 6} key={index}>
                    <TextField
                      label={field.label}
                      type={field.type}
                      variant="outlined"
                      required={field.required}
                      fullWidth
                      multiline={field.multiline}
                      rows={field.rows}
                    />
                  </Grid>
                ))}
              </Grid>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#febd2f",
                  color: "#173334",
                  mt: 2,
                }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </Grid>

          {/* Map Directions Section */}
          <Grid item xs={12}>
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Find Us Here
              </Typography>
              <iframe
              title="jjj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.389577257217!2d-122.41941568468161!3d37.77492927975929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818f9b58b9f1%3A0x4e0a1e4f6fcb6d34!2sYour%20Location!5e0!3m2!1sen!2sus!4v1616161628257!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <Typography sx={{ mt: 2 }}>
                Click <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer">here</a> for directions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      <Footer/>
      </Box>
    </>
  );
}
