import {
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navlogo from "../../assets/image1/Navbar logo.png";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About us", path: "/about" },
    { label: "Extra Salespage", path: "/sales" },
  ];

  return (
    <>
      {/* HEADER */}
      <Box sx={{ width: "100%", bgcolor: "#FFFFFF", borderBottom: "1px solid #E5E7EB" }}>
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Box component={Link} to="/" sx={{ display: "flex" }}>
            <Box
              component="img"
              src={Navlogo}
              alt="Logo"
              sx={{ width: "150px", height: "auto" }}
            />
          </Box>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={navItemStyle}
                >
                  {item.label}
                </Typography>
              ))}

              <Button
                component={Link}
                to="/free-guide"
                sx={ctaButtonStyle}
              >
                Get your free guide now
              </Button>
            </Box>
          )}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* MOBILE DRAWER MENU */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 3 }}>
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => setOpen(false)}
              sx={drawerItemStyle}
            >
              {item.label}
            </Typography>
          ))}

          <Button
            component={Link}
            to="/free-guide"
            fullWidth
            onClick={() => setOpen(false)}
            sx={{ ...ctaButtonStyle, mt: 3 }}
          >
            Get your free guide now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

/* ===== STYLES ===== */

const navItemStyle = {
  fontSize: "14px",
  color: "#4B5563",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": { color: "#111827" },
};

const drawerItemStyle = {
  fontSize: "14px",
  color: "#4B5563",
  textDecoration: "none",
  display: "block",
  py: 1.5,
  cursor: "pointer",
  "&:hover": { color: "#111827" },
};

const ctaButtonStyle = {
  bgcolor: "#1FAE8A",
  color: "#fff",
  textTransform: "none",
  fontSize: "14px",
  px: 3,
  py: 1,
  borderRadius: "6px",
  "&:hover": { bgcolor: "#169C79" },
};

export default Header;