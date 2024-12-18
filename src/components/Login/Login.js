import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { AppContext } from "../../context/AppState"; // Access context here
import CustomNavbar from "../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Footer from "../Footer/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { toast } from "react-toastify";

const Login = () => {
  const { login, isAuthenticated } = useContext(AppContext); // Access login and isAuthenticated from context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await login(email, password); // Use login from context

    if (result.success) {
      toast.success("Login successful!");
      navigate("/"); // Navigate to the dashboard or home page after successful login
    } else {
      setDialogMessage(result.message); // Show the error message from backend
      setOpenDialog(true); // Open the dialog
    }
  };

  // Redirect if user is already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to dashboard if the user is logged in
    }
  }, [isAuthenticated, navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <>
      <CustomNavbar />
      <Container maxWidth="xl" sx={{ marginTop: "5rem" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ marginBottom: "2rem" }}
        >
          {/* "Back to Shop" Link */}
          <Grid item>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                  marginBottom: "1rem",
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
                Back to Shop
              </Typography>
            </Link>
          </Grid>

          {/* "Login" Heading */}
          <Grid item>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: "#173334", fontWeight: "600", mb: '2rem' }}
            >
              Log In
            </Typography>
          </Grid>

          {/* Login Form */}
          <Box
            sx={{
              padding: "2rem",
              maxWidth: "500px",
              margin: "auto",
              backgroundColor: "#fff",
              borderRadius: "0px",
              border: "1px solid #ddd",
            }}
          >
            <Typography
              variant="h6"
              align="left"
              sx={{ color: "#173334", fontWeight: "600", mb: 4 }}
            >
              Log In
            </Typography>
            <form onSubmit={submitHandler}>
              <Grid container spacing={2}>
                {/* Email and Password Fields */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#173334", marginBottom: "0.5rem" }}
                  >
                    Email
                  </Typography>
                  <TextField
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      borderRadius: 0,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="body1"
                    sx={{ color: "#173334", marginBottom: "0.5rem" }}
                  >
                    Password
                  </Typography>
                  <TextField
                    name="password"
                    value={password}
                    onChange={onChangeHandler}
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      borderRadius: 0,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Forgot Password */}
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="right"
                  alignItems="center"
                  sx={{ mt: "3rem" }}
                >
                  <Link
                    to="/forgot-password"
                    style={{ color: "red", fontSize: "0.9rem" }}
                  >
                    Forgot Password?
                  </Link>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      ml: "1rem",
                      fontSize: "1rem",
                      fontWeight: "500",
                      borderRadius: "0px",
                      backgroundColor: "#febd2f",
                      color: "#173334",
                      "&:hover": {
                        backgroundColor: "#173334",
                        color: "#febd2f",
                      },
                    }}
                  >
                    Login <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
                  </Button>
                 
                </Grid>
                <Grid
  item
  xs={12}
  display="flex"
  justifyContent="center"
  sx={{ mt: "1rem" }} // Adds space between login button and registration button
>
  <Link
    to="/register"
    style={{
      textDecoration: "none", // Remove underline
      width: "100%", // Full width of container
    }}
  >
    <Button
      variant="outlined"
      sx={{
        padding: "10px 20px",
        fontSize: "1rem",
        fontWeight: "500",
        borderRadius: "0px",
        color: "#febd2f",
        borderColor: "#febd2f",
        "&:hover": {
          backgroundColor: "#febd2f",
          color: "#173334",
        },
      }}
    >
      Register Here
    </Button>
  </Link>
</Grid>
              </Grid>
            </form>

            {/* Dialog for login errors */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>{"Login Error"}</DialogTitle>
              <DialogContent>
                <p>{dialogMessage}</p>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "#173334", mt: 10, pb: 10, color: "#febd2f" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
