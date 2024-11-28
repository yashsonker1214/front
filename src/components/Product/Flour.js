import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomNavbar from '../Navbar/Navbar'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Flour() {
  return (
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
                Non-Basmati Rice
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
  )
}
