import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Grid, Box, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { AppContext } from "../../context/AppState"; 
import CustomNavbar from "../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Footer from "../Footer/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { firstName, lastName, email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setDialogMessage("Please fill all the required fields.");
      setOpenDialog(true);
      return;
    }

    const result = await register(firstName, lastName, email, password);

    if (result.success) {
      navigate("/login");
    } else {
      setDialogMessage(result.message || "Registration failed.");
      setOpenDialog(true);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <>
      <CustomNavbar />
      <Container maxWidth="md" sx={{ marginTop: "10rem" }}>
        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ marginBottom: "2rem" }}>
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
          <Grid item>
            <Typography variant="h4" align="center" sx={{ color: "#173334", fontWeight: "600" }}>Register</Typography>
          </Grid>
        </Grid>

        <Box sx={{ padding: "2rem", borderRadius: "0px", border: "1px solid black", backgroundColor: "#fff" }}>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Typography variant="h6" align="center" sx={{ color: "#173334", padding: "1rem" }}>
                Your Personal Details
              </Typography>

              {/* First Name and Last Name */}
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField name="firstName" value={firstName} onChange={onChangeHandler} variant="outlined" fullWidth required sx={{ borderRadius: 0 }} />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="lastName" value={lastName} onChange={onChangeHandler} variant="outlined" fullWidth required sx={{ borderRadius: 0 }} />
                </Grid>
              </Grid>

              {/* Email */}
              <Grid item xs={12} p={2}>
                <TextField name="email" value={email} onChange={onChangeHandler} type="email" variant="outlined" fullWidth required sx={{ borderRadius: 0 }} />
              </Grid>

              {/* Password */}
              <Grid item xs={12} p={2}>
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={onChangeHandler}
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
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
                <Button type="submit" variant="contained" sx={{ padding: "10px 20px", borderRadius: "0px", fontSize: "1rem", backgroundColor: "#febd2f", color: "#173334", maxWidth: "300px" }}>
                  Register <ArrowRightAltIcon sx={{ fontSize: "2rem" }} />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>

      {/* Dialog for registration failure */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{"Error"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default Register;
