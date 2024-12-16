import React, { useContext, useState } from "react";
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
import { AppContext } from "../../context/AppState";
import CustomNavbar from "../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Footer from "../Footer/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Register = () => {
  const { register } = useContext(AppContext); // Access register function from context
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { firstName, lastName, email, password } = formData;

  // Submit handler for registration form
  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Destructure the form data
    const { firstName, lastName, email, password } = formData;
  
    // Check if all required fields are filled before submitting the form
    if (!firstName || !lastName || !email || !password) {
      setDialogMessage("Please fill all the required fields.");
      setOpenDialog(true);
      return;
    }
  
    // Call the register function from context
    const result = await register(firstName, lastName, email, password);
  
    // Handle success or failure based on the result
    if (result.success) {
      navigate("/login"); // Redirect to login page if registration is successful
    } else {
      setDialogMessage(result.message); // Show error message from the backend
      setOpenDialog(true); // Open dialog to show error message
    }
  };
  // Show/Hide password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <>
      <CustomNavbar />
      <Container maxWidth="md" sx={{ marginTop: "10rem" }}>
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ marginBottom: "2rem" }}>
          {/* "Back to Shop" Link */}
          <Grid item>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography sx={{ display: "flex", alignItems: "center", fontSize: "0.9rem", marginBottom: "1rem" }}>
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#febd2f", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "0.5rem" }}>
                  <KeyboardBackspaceIcon sx={{ color: "#173334" }} />
                </Box>
                Back to Shop
              </Typography>
            </Link>
          </Grid>

          {/* "Register" Heading */}
          <Grid item>
            <Typography variant="h4" align="center" sx={{ color: "#173334", fontWeight: "600" }}>
              Register
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ padding: "2rem", borderRadius: "0px", border: "1px solid black", backgroundColor: "#fff" }}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Typography variant="h6" align="center" sx={{ color: "#173334", padding: "1rem" }}>
                Your Personal Details
              </Typography>
              {/* First Name and Last Name Fields */}
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box p={2}>
                    <Typography variant="body1" sx={{ color: "#173334", marginBottom: "0.5rem" }}>
                      First Name
                    </Typography>
                    <TextField
                      name="firstName"
                      value={firstName}
                      onChange={onChangeHandler}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{ borderRadius: 0 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box p={2}>
                    <Typography variant="body1" sx={{ color: "#173334", marginBottom: "0.5rem" }}>
                      Last Name
                    </Typography>
                    <TextField
                      name="lastName"
                      value={lastName}
                      onChange={onChangeHandler}
                      variant="outlined"
                      fullWidth
                      required
                      sx={{ borderRadius: 0 }}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* Email Field */}
              <Grid item xs={12} p={2}>
                <Typography variant="body1" sx={{ color: "#173334", marginBottom: "0.5rem" }}>
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
                  sx={{ borderRadius: 0 }}
                />
              </Grid>

              {/* Password Field */}
              <Grid item xs={12} p={2}>
                <Typography variant="body1" sx={{ color: "#173334", marginBottom: "0.5rem" }}>
                  Password
                </Typography>
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={onChangeHandler}
                  autoComplete="new-password" // For registration
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label={showPassword ? "hide the password" : "display the password"} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ borderRadius: 0 }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={6}>
                <Button type="submit" variant="contained" sx={{ padding: "10px 20px", borderRadius: "0px", fontSize: "1rem", fontWeight: "500", backgroundColor: "#febd2f", color: "#173334", maxWidth: "300px", "&:hover": { backgroundColor: "#173334", color: "#febd2f" } }}>
                  Register <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>

      {/* Dialog for email already exists */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{"Email already exists"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ backgroundColor: "#173334", mt: 10, pb: 10, color: "#febd2f" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Register;
