import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link for navigation
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import "./Navbar.css";
import { Button, Divider, Drawer } from "@mui/material";
import Marquee from "react-fast-marquee";


const menuData = [
  {
    name: "Flour",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Flour 1",
        links: [
          { name: "Wheat Flour", url: "/Allproducts" },
          { name: "Maize(corn) Flour", url: "/basmati" },
        ],
      },
      {
        heading: "Flour 2",
        links: [
          { name: "Brown Rice Flour", url: "/Allproducts" },
          { name: "Ragi flour", url: "/Allproducts" },

          { name: "Tamarind Flour", url: "/Allproducts" },
          { name: "Singhada Flour", url: "/Allproducts" },
        ],
      },
      {
        heading: "Flour 3",
        links: [
          { name: "White Flour", url: "/Allproducts" },
          { name: "Rice Flour", url: "/Allproducts" },
          { name: "Millet Flour", url: "/Allproducts-flour" },
        ],
      },
      {
        heading: "Flour 4",
        links: [
          { name: "Oat Flour", url: "/Allproducts" },
          { name: "Samolina", url: "/Allproducts" },
          { name: "Gram Flour", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Powdered Spices",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Powdered Spices 1",
        links: [
          { name: "Black Pepper", url: "/Allproducts" },
          { name: "Red Chilly", url: "/Allproducts" },
          { name: "Coriander", url: "/Allproduts" },
          { name: "Cumin", url: "/Allproducts" },
        ],
      },
      {
        heading: "Powdered Spices 2",
        links: [
          { name: "Dry Ginger", url: "/Allproducts" },

          { name: "Garam Masala", url: "/Allproducts" },
          { name: "Garlic Powder", url: "/Allproducts" },
        ],
      },
      {
        heading: "Powdered Spices 3",
        links: [
          { name: "Hing", url: "/Allproducts" },

          { name: "Onion Powder", url: "/Allproducts" },
          { name: "Paprika", url: "/Allproducts" },
        ],
      },
      {
        heading: "Powdered Spices 4",
        links: [
          { name: "Turmeric", url: "/Allproducts" },
          { name: "White Pepper", url: "/Allproducts" },
          { name: "Fennel Seeds", url: "/Allproducts" },
          { name: "Cinnamon", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Spices-Whole",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Whole Spices 1",
        links: [
          { name: "Black Pepper", url: "/Allproducts" },
          { name: "Dried Red Chilly", url: "/Allproducts" },
          { name: "Cloves", url: "/Allproducts" },
          { name: "Nutmeg", url: "/Allproducts" },
        ],
      },
      {
        heading: "Whole Spices 2",
        links: [
          { name: "Mace", url: "/Allproducts" },
          { name: "Large Cardamom", url: "/Allproducts" },
          { name: "Green Cardamom", url: "/Allproducts" },
          { name: "Cumin Seeds", url: "/Allproducts" },
        ],
      },
      {
        heading: "Whole Spices 3",
        links: [
          { name: "Star Anise", url: "/Allproducts" },
          { name: "Dried Ginger", url: "/Allproducts" },
          { name: "Dried Turmeric", url: "/Allproducts" },
          { name: "Fenugreek Seed", url: "/Allproducts" },
        ],
      },
      {
        heading: "Whole Spices 4",
        links: [
          { name: "Dill Seed", url: "/Allproducts" },

          { name: "Mustard Seed", url: "/Allproducts" },
          { name: "Ajwain Seed", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Basmati Rice",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Basmati Rice 1",
        links: [
          { name: "1121 Golden Sella", url: "/Allproducts" },

          { name: "1121 Golden Sella", url: "/Allproducts" },
          { name: "1121 Steam Sella", url: "/Allproducts" },
          { name: "PR11 Golden Sella", url: "/Allproducts" },
          { name: "PR11 Steam Sella", url: "/Allproducts" },
        ],
      },
      {
        heading: "Basmati Rice 2",
        links: [
          { name: "PR11 Creamy Sella", url: "/Allproducts" },
          { name: "Sharbati", url: "/Allproducts" },
          { name: "Sugandha", url: "/Allproducts" },
          { name: "Pusa", url: "/Allproducts" },
        ],
      },
      {
        heading: "Basmati Rice 3",
        links: [
          { name: "1509 Basmati Rice", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Non-Basmati",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Non-Basmati Rice 1",
        links: [
          { name: "IR 64 Parboiled", url: "/Allproducts" },
          { name: "IR64 Raw", url: "/Allproducts" },
          { name: "Long Grain Raw", url: "/Allproducts" },

          {
            name: "Long Grain Parboiled",
            url: "/Allproducts",
          },
        ],
      },
      {
        heading: "Non-Basmati Rice 2",
        links: [
          { name: "100% Broken Rice", url: "/Allproducts" },
          { name: "Swarna Raw", url: "/Allproducts" },
          { name: "Swarna Parboiled", url: "/Allproducts" },
          { name: "Sona Masuri Raw", url: "/Allproducts" },
        ],
      },
      {
        heading: "Non-Basmati Rice 3",
        links: [
          {
            name: "Sona Masuri Parboiled",
            url: "/Allproducts",
          },
          { name: "Chinnor And Kali mooch", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Rice-other",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Rice-Other 1",
        links: [
          {
            name: "Thai Long Grain Raw",
            url: "/Allproducts",
          },
          { name: "Thai Long Grain", url: "/Allproducts" },
          { name: "IRRI 6", url: "/Allproducts" },
          { name: "IRRI 9", url: "/Allproducts" },
        ],
      },
      {
        heading: "Rice-Other 2",
        links: [
          {
            name: "Super Karnel Basmati Rice",
            url: "/Allproducts",
          },
          { name: "PK 386", url: "/Allproducts" },
          { name: "Japanica", url: "/Allproducts" },
          { name: "Calros", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Grains",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Grains 1",
        links: [
          { name: "Wheat", url: "/Allproducts" },
          { name: "Maize", url: "/Allproducts" },
          { name: "Yellow Corn", url: "/Allproducts" },
          { name: "Millet", url: "/Allproducts" },
        ],
      },
      {
        heading: "Grains 2",
        links: [
          { name: "Bajra", url: "/Allproducts" },
          { name: "Sorghum", url: "/Allproducts" },
          { name: "Ragi", url: "/Allproducts" },
          { name: "Oats", url: "/Allproducts" },
        ],
      },
      {
        heading: "Grains 3",
        links: [
          { name: "Buckwheat", url: "/Allproducts" },
          { name: "Durum Wheat", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Oil Seed",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Oil Seeds 1",
        links: [
          { name: "Rapeseed", url: "/Allproducts" },
          { name: "Soyabean Seeds", url: "/Allproducts" },
          { name: "Sunflower Seeds", url: "/Allproducts" },
          { name: "Corn Seeds", url: "/Allproducts" },
        ],
      },
      {
        heading: "Oil Seeds 2",
        links: [
          { name: "Sesame Seeds", url: "/Allproducts" },
          { name: "Cotton Seeds", url: "/Allproducts" },
          { name: "Flaxseed", url: "/Allproducts" },
          { name: "Peanut", url: "/Allproducts" },
        ],
      },
      {
        heading: "Oil Seeds 3",
        links: [
          { name: "Palm Oil", url: "/Allproducts" },
          { name: "Coconut", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Pulses",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Pulses 1",
        links: [
          { name: "Chickpeas", url: "/Allproducts" },
          { name: "Mung Bean", url: "/Allproducts" },
          { name: "Lentil", url: "/Allproducts" },
          { name: "Pigeon Pea", url: "/Allproducts" },
        ],
      },
      {
        heading: "Pulses 2",
        links: [
          { name: "Kidney Beans", url: "/Allproducts" },
          { name: "Urad Dal", url: "/Allproducts" },
          { name: "Lima Beans", url: "/Allproducts" },
          { name: "Black Eyed Peas", url: "/Allproducts" },
        ],
      },
      {
        heading: "Pulses 3",
        links: [
          { name: "Horse Gram", url: "/Allproducts" },
          { name: "Moth Beans", url: "/Allproducts" },
          { name: "Green Beans", url: "/Allproducts" },
          { name: "Split Pea", url: "/Allproducts" },
        ],
      },
      {
        heading: "Pulses 4",
        links: [
          { name: "Split Pigeon Peas", url: "/Allproducts" },
          { name: "Split Pea Gram", url: "/Allproducts" },
          { name: "Bambara Beans", url: "/Allproducts" },
          { name: "Lupine", url: "/Allproducts" },
        ],
      },
    ],
  },
  {
    name: "Vegetables",
    url: "/Allproducts",
    submenu: [
      {
        heading: "Vegetables 1",
        links: [
          { name: "Red Onion", url: "/Allproducts" },
          { name: "White Onion", url: "/Allproducts" },
          { name: "Potato", url: "/Allproducts" },
        ],
      },
    ],
  },
];

const Search = styled("div")(({ theme }) => ({
  borderRadius: 0,
  border: "1px solid #febd2f",
  backgroundColor: "#173334",
  display: "flex",
  alignItems: "center",
  height: "50px",
  width: "100%",
  left: "2rem",
  marginLeft: "10rem",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  "&:hover": {
    backgroundColor: "#173334",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: 5,
    paddingLeft: "2rem",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function ResponsiveAppBar() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = (menuName) => {
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Close dropdown if scrolled more than a small threshold (e.g., 20 pixels)
      if (Math.abs(currentScrollPos - scrollPosition) > 20) {
        setHoveredMenu(null);
      }
      
      // Update scroll position
      setScrollPosition(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleMouseEnterScroll = (menuName) => {
    if (!isScrolling) {
      setHoveredMenu(menuName);
    }
  };

  const handleMouseLeaveScroll = () => {
    if (!isScrolling) {
      setHoveredMenu(null);
    }
  };

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Set scrolling state
      setIsScrolling(true);
      setHoveredMenu(null);

      // Clear the timeout
      clearTimeout(scrollTimeout);

      // Reset scrolling state after a short delay
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };



  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#173334", pb: 1 }}>
        <Marquee
          className="marquee-text"
          style={{
            backgroundColor: "#173334", // Background color of the marquee
            color: "#febd2f", // Text color
            whiteSpace: "nowrap", // Prevent text from wrapping
            animation: "marquee 100s linear infinite", // Apply the marquee animation
          }}
        >
          "Our website is under maintenance. We’re making improvements and will be back shortly. Thank you for your patience."
        </Marquee>

        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                pr: 10,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#febd2f",
                textDecoration: "none",
                "&:hover": {
                  color: "#febd2f",
                  textDecoration: "none",
                },
              }}
            >
              TheAgriGoods
            </Typography>

            {/* Search Field */}
            <Search>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "#febd2f",
                }}
              />
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: "#173334",
                    bgcolor: "#febd2f",
                    height: "100%",
                    ml: 5,
                    width: "2rem",
                  }}
                />
              </SearchIconWrapper>
            </Search>

            <Box sx={{ flexGrow: 1 }} />

            {/* Cart Icon and Text */}
            <Box sx={{ display: "flex", alignItems: "center", color: "#febd2f" }}>
              <Tooltip title="My Cart">
                <IconButton
                  sx={{ p: 0, color: "#febd2f" }}
                  onClick={toggleDrawer}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
              <Typography
                variant="body1"
                sx={{ mr: 5, ml: 1 }}
                onClick={toggleDrawer}
              >
                My Cart
              </Typography>

              {/* Profile Icon and Text */}
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0, color: "#febd2f" }}>
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Link
                to="/login" // Change this to "/register" if you want the registration page
                style={{
                  textDecoration: "none", // Remove default underline from the link
                  color: "inherit", // Inherit color from parent
                }}
              >
                <Typography variant="body1" sx={{ mr: 5, ml: 1 }}>
                  My Profile
                </Typography>
              </Link>

              {/* Menu */}
            </Box>
          </Toolbar>
        </Container>

        {/* Divider with full width */}
        <Divider sx={{ color: "#febd2f", my: 1, width: "100%", mx: 0 }} />

        <Container maxWidth="lg">
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuData.map((menu) => (
              <Box
                key={menu.name}
                onMouseEnter={() => handleMouseEnter(menu.name)}
                sx={{ position: "relative" }}
              >
                {/* Main Navigation Button */}
                <NavLink to={menu.url} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      color: "#febd2f",
                      textTransform: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {menu.name}
                  </Button>
                </NavLink>

                {/* Dropdown Menu */}
                {menu.submenu && hoveredMenu === menu.name && (
                  <Box
                    onMouseEnter={(e) => {
                      handleMouseEnter(menu.name);
                      handleMouseEnterScroll(menu.name);  // Call handleMouseEnterScroll
                    }}
                    onMouseLeave={(e) => {
                      handleMouseLeave();          // Call handleMouseLeave
                      handleMouseLeaveScroll();    // Call handleMouseLeaveScroll
                    }}
                    sx={{
                      position: "fixed",
                     
                     
                      left: 0,
                      right: 0,
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      padding: "32px 0",
                      zIndex: 1300,
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 4,
                        px: 5,
                      }}
                    >
                      {menu.submenu.map((column) => (
                        <Box key={column.heading}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", color: "#173334", mb: 1 }}
                          >
                            {column.heading}
                          </Typography>
                          <Divider
                            sx={{
                              color: "#173334",
                              my: 1,
                              width: "100%",
                              mx: 0,
                            }}
                          />
                          {column.links.map((links) => (
                              <NavLink
                              key={links.name}
                              to={links.url}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                display: "block",
                                marginBottom: "8px",
                              }}
                            >
                              {links.name}
                            </NavLink>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 350, padding: 2, backgroundColor: "#173334" }}>
          <IconButton sx={{ p: 0, color: "#febd2f" }} onClick={toggleDrawer}>
            <Typography variant="h6" p={2}>
              Your Cart <ShoppingCartIcon />
            </Typography>
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ mt: "10rem", ml: "5rem" }}>
          There are no products in your cart.
        </Typography>
        <Button sx={{ color: "#febd2f", backgroundColor: "#173334", m: "5rem" }}>
          Continue Shopping
        </Button>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
