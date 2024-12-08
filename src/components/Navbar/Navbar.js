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
    url: "/flour",
    submenu: [
      {
        heading: "Flour 1",
        links: [
          { name: "Wheat Flour", url: "/flour/wheat-flour" },
          { name: "Maize(corn) Flour", url: "/flour/maize-flour" },
        ],
      },
      {
        heading: "Flour 2",
        links: [
          { name: "Brown Rice Flour", url: "/flour/brown-rice-flour" },
          { name: "Ragi flour", url: "/flour/brown-rice-flour" },

          { name: "Tamarind Flour", url: "/flour/tamarind-flour" },
          { name: "Singhada Flour", url: "/flour/singhada-flour" },
        ],
      },
      {
        heading: "Flour 3",
        links: [
          { name: "White Flour", url: "/flour/white-flour" },
          { name: "Rice Flour", url: "/flour/rice-flour" },
          { name: "Millet Flour", url: "/flour/millet-flour" },
        ],
      },
      {
        heading: "Flour 4",
        links: [
          { name: "Oat Flour", url: "/flour/oat-flour" },
          { name: "Samolina", url: "/flour/samolina" },
          { name: "Gram Flour", url: "/flour/gram-flour" },
        ],
      },
    ],
  },
  {
    name: "Powdered Spices",
    url: "/powderedspices",
    submenu: [
      {
        heading: "Powdered Spices 1",
        links: [
          { name: "Black Pepper", url: "/powderedspices/black-pepper" },
          { name: "Red Chilly", url: "/powderedspices/red-chilly" },
          { name: "Coriander", url: "/powderedspices/coriander" },
          { name: "Cumin", url: "/powderedspices/cumin" },
        ],
      },
      {
        heading: "Powdered Spices 2",
        links: [
          { name: "Dry Ginger", url: "/powderedspices/dry-ginger" },

          { name: "Garam Masala", url: "/powderedspices/garam-masala" },
          { name: "Garlic Powder", url: "/powderedspices/garlic-powder" },
        ],
      },
      {
        heading: "Powdered Spices 3",
        links: [
          { name: "Hing", url: "/powderedspices/hing" },

          { name: "Onion Powder", url: "/powderedspices/onion-powder" },
          { name: "Paprika", url: "/powderedspices/paprika" },
        ],
      },
      {
        heading: "Powdered Spices 4",
        links: [
          { name: "Turmeric", url: "/powderedspices/turmeric" },
          { name: "White Pepper", url: "/powderedspices/white-pepper" },
          { name: "Fennel Seeds", url: "/powderedspices/fennel-seeds" },
          { name: "Cinnamon", url: "/powderedspices/cinnamon" },
        ],
      },
    ],
  },
  {
    name: "Spices-Whole",
    url: "/spices",
    submenu: [
      {
        heading: "Whole Spices 1",
        links: [
          { name: "Black Pepper", url: "/spices/black-pepper" },
          { name: "Dried Red Chilly", url: "/spices/dried-red-chilly" },
          { name: "Cloves", url: "/spices/cloves" },
          { name: "Nutmeg", url: "/spices/nutmeg" },
        ],
      },
      {
        heading: "Whole Spices 2",
        links: [
          { name: "Mace", url: "/spices/mace" },
          { name: "Large Cardamom", url: "/spices/large-cardamom" },
          { name: "Green Cardamom", url: "/spices/green-cardamom" },
          { name: "Cumin Seeds", url: "/spices/cumin-seeds" },
        ],
      },
      {
        heading: "Whole Spices 3",
        links: [
          { name: "Star Anise", url: "/spices/star-anise" },
          { name: "Dried Ginger", url: "/spices/dried-ginger" },
          { name: "Dried Turmeric", url: "/spices/dried-turmeric" },
          { name: "Fenugreek Seed", url: "/spices/fenugreek-seed" },
        ],
      },
      {
        heading: "Whole Spices 4",
        links: [
          { name: "Dill Seed", url: "/spices/dill-seed" },

          { name: "Mustard Seed", url: "/spices/mustard-seed" },
          { name: "Ajwain Seed", url: "/spices/ajwain" },
        ],
      },
    ],
  },
  {
    name: "Basmati Rice",
    url: "/basmati",
    submenu: [
      {
        heading: "Basmati Rice 1",
        links: [
          { name: "1121 Golden Sella", url: "/basmati/1121-golden-sella" },

          { name: "1121 Golden Sella", url: "/basmati/1121-golden-sella" },
          { name: "1121 Steam Sella", url: "/basmati/1121-steam-sella" },
          { name: "PR11 Golden Sella", url: "/basmati/pr11-golden-sella" },
          { name: "PR11 Steam Sella", url: "/basmati/pr11-steam-sella" },
        ],
      },
      {
        heading: "Basmati Rice 2",
        links: [
          { name: "PR11 Creamy Sella", url: "/basmati/pr11-creamy-sella" },
          { name: "Sharbati", url: "/basmati/sharbati" },
          { name: "Sugandha", url: "/basmati/sugandha" },
          { name: "Pusa", url: "/basmati/pusa" },
        ],
      },
      {
        heading: "Basmati Rice 3",
        links: [
          { name: "1509 Basmati Rice", url: "/basmati/1509-basmati-rice" },
        ],
      },
    ],
  },
  {
    name: "Non-Basmati",
    url: "/nonBasmati",
    submenu: [
      {
        heading: "Non-Basmati Rice 1",
        links: [
          { name: "IR 64 Parboiled", url: "/nonBasmati/ir64-parboiled" },
          { name: "IR64 Raw", url: "/nonBasmati/ir64-raw" },
          { name: "Long Grain Raw", url: "/nonBasmati/long-grain-raw" },

          {
            name: "Long Grain Parboiled",
            url: "/nonBasmati/long-grain-parboiled",
          },
        ],
      },
      {
        heading: "Non-Basmati Rice 2",
        links: [
          { name: "100% Broken Rice", url: "/nonBasmati/100-broken-rice" },
          { name: "Swarna Raw", url: "/nonBasmati/swarna-raw" },
          { name: "Swarna Parboiled", url: "/nonBasmati/swarna-parboiled" },
          { name: "Sona Masuri Raw", url: "/nonBasmati/sona-masuri-raw" },
        ],
      },
      {
        heading: "Non-Basmati Rice 3",
        links: [
          {
            name: "Sona Masuri Parboiled",
            url: "/nonBasmati/sona-masuri-parboiled",
          },
          { name: "Chinnor And Kali mooch", url: "/basmati/1121-golden-sella" },
        ],
      },
    ],
  },
  {
    name: "Rice-other",
    url: "/riceother",
    submenu: [
      {
        heading: "Rice-Other 1",
        links: [
          {
            name: "Thai Long Grain Raw",
            url: "/riceother/thai-long-grain-raw",
          },
          { name: "Thai Long Grain", url: "/riceother/thai-long-grain" },
          { name: "IRRI 6", url: "/riceother/irri-6" },
          { name: "IRRI 9", url: "/riceother/irri-9" },
        ],
      },
      {
        heading: "Rice-Other 2",
        links: [
          {
            name: "Super Karnel Basmati Rice",
            url: "/riceother/super-karnel-basmati-rice",
          },
          { name: "PK 386", url: "/riceother/pk-386" },
          { name: "Japanica", url: "/riceother/japanica" },
          { name: "Calros", url: "/riceother/calros" },
        ],
      },
    ],
  },
  {
    name: "Grains",
    url: "/grains",
    submenu: [
      {
        heading: "Grains 1",
        links: [
          { name: "Wheat", url: "/grains/wheat" },
          { name: "Maize", url: "/grains/maize" },
          { name: "Yellow Corn", url: "/grains/yellow-corn" },
          { name: "Millet", url: "/grains/millet" },
        ],
      },
      {
        heading: "Grains 2",
        links: [
          { name: "Bajra", url: "/grains/bajra" },
          { name: "Sorghum", url: "/grains/sorghum" },
          { name: "Ragi", url: "/grains/ragi" },
          { name: "Oats", url: "/grains/oats" },
        ],
      },
      {
        heading: "Grains 3",
        links: [
          { name: "Buckwheat", url: "/grains/buckwheat" },
          { name: "Durum Wheat", url: "/grains/durum-wheat" },
        ],
      },
    ],
  },
  {
    name: "Oil Seed",
    url: "/oilseed",
    submenu: [
      {
        heading: "Oil Seeds 1",
        links: [
          { name: "Rapeseed", url: "/oilseed/rapeseed" },
          { name: "Soyabean Seeds", url: "/oilseed/soyabean-seeds" },
          { name: "Sunflower Seeds", url: "/oilseed/sunflower-seeds" },
          { name: "Corn Seeds", url: "/oilseed/corn-seeds" },
        ],
      },
      {
        heading: "Oil Seeds 2",
        links: [
          { name: "Sesame Seeds", url: "/oilseed/sesame-seeds" },
          { name: "Cotton Seeds", url: "/oilseed/cotton-seeds" },
          { name: "Flaxseed", url: "/oilseed/flaxseed" },
          { name: "Peanut", url: "/oilseed/peanut" },
        ],
      },
      {
        heading: "Oil Seeds 3",
        links: [
          { name: "Palm Oil", url: "/oilseed/palm-oil" },
          { name: "Coconut", url: "/oilseed/coconut" },
        ],
      },
    ],
  },
  {
    name: "Pulses",
    url: "/pulses",
    submenu: [
      {
        heading: "Pulses 1",
        links: [
          { name: "Chickpeas", url: "/pulses/chickpeas" },
          { name: "Mung Bean", url: "/pulses/mung-bean" },
          { name: "Lentil", url: "/pulses/lentil" },
          { name: "Pigeon Pea", url: "/pulses/pigeon-pea" },
        ],
      },
      {
        heading: "Pulses 2",
        links: [
          { name: "Kidney Beans", url: "/pulses/kidney-beans" },
          { name: "Urad Dal", url: "/pulses/urad-dal" },
          { name: "Lima Beans", url: "/pulses/lima-beans" },
          { name: "Black Eyed Peas", url: "/pulses/black-eyed-peas" },
        ],
      },
      {
        heading: "Pulses 3",
        links: [
          { name: "Horse Gram", url: "/pulses/horse-gram" },
          { name: "Moth Beans", url: "/pulses/moth-beans" },
          { name: "Green Beans", url: "/pulses/green-beans" },
          { name: "Split Pea", url: "/pulses/split-pea" },
        ],
      },
      {
        heading: "Pulses 4",
        links: [
          { name: "Split Pigeon Peas", url: "/pulses/split-pigeon-peas" },
          { name: "Split Pea Gram", url: "/pulses/split-pea-gram" },
          { name: "Bambara Beans", url: "/pulses/bambara-beans" },
          { name: "Lupine", url: "/pulses/lupine" },
        ],
      },
    ],
  },
  {
    name: "Vegetables",
    url: "/vegetables",
    submenu: [
      {
        heading: "Vegetables 1",
        links: [
          { name: "Red Onion", url: "/vegetables/red-onion" },
          { name: "White Onion", url: "/vegetables/white-onion" },
          { name: "Potato", url: "/vegetables/potato" },
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
                     top:"153px",
                     
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
                          {column.links.map((link) => (
                            <NavLink
                              key={link.name}
                              to={link.url}
                              style={{
                                textDecoration: "none",
                                paddingTop: 10,
                                color: "black",
                                display: "block",
                                marginBottom: "8px",
                              }}
                            >
                              {link.name}
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
