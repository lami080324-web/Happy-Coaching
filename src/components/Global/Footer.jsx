import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../../assets/image1/Navbar logo.png";
import logo1 from "../../assets/image1/Group 138.svg";

function Footer() {
  return (
    <Box sx={{ width: "100%", fontFamily: "Kumbh Sans" }}>
      {/* SUBSCRIBE SECTION */}
      <Box sx={{ bgcolor: "#FBF8F6" }}>
        <Box
          sx={{
            maxWidth: "1350px",
            mx: "auto",
            px: { xs: 2, md: 6 },     
            py: { xs: 4, md: 5 },     
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: 700,
                color: "#2E2C5D",
                mb: 0.5,
              }}
            >
              Get notified when I publish new articles
            </Typography>

            <Typography sx={{ fontSize: "14px", color: "#6B7280" }}>
              Stay up to date with the latest news, announcements, and articles.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1.5,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <TextField
              size="small"
              placeholder="Enter your email"
              sx={{
                width: { xs: "100%", sm: "240px" },
                bgcolor: "#FFFFFF",
                borderRadius: "8px",
              }}
            />

            <Button
              sx={{
                bgcolor: "#1FAE8A",
                color: "#FFFFFF",
                textTransform: "none",
                fontSize: "14px",
                px: 3,
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#169C79" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>

      {/* MAIN FOOTER */}
      <Box sx={{ bgcolor: "#FFFFFF" }}>
        <Divider />

        <Box
          sx={{
            maxWidth: "1350px",
            mx: "auto",
            px: { xs: 2, md: 6 },      
            py: { xs: 4, md: 6 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.5fr 1fr 1fr",
            },
            gap: { xs: 3, md: 6 },
          }}
        >
          {/* LOGO + TEXT */}
          <Box>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ width: "150px", mb: 1 }}
            />

            <Typography
              sx={{
                fontSize: "13px",
                color: "#6B7280",
                maxWidth: "280px",
              }}
            >
              Design amazing digital experiences that create more happy in the
              world.
            </Typography>
          </Box>

          {/* PAGES */}
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Pages</Typography>
            {[
              "Home",
              "Services",
              "About us",
              "Extra Sales/Landingpage",
              "Free guide",
            ].map((item) => (
              <Typography key={item} sx={linkStyle}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* CONTACT */}
          <Box>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>Contact</Typography>
            <Typography sx={linkStyle}>+123 456 789</Typography>
            <Typography sx={linkStyle}>hello@happydigital.nl</Typography>
            <Typography sx={linkStyle}>Instagram</Typography>
            <Typography sx={linkStyle}>LinkedIn</Typography>
          </Box>
        </Box>

        <Divider />

        {/* BOTTOM BAR */}
        <Box
          sx={{
            maxWidth: "1440px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: 2,                  
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 1.5, md: 0 },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* COPYRIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Typography sx={{ fontSize: "13px", color: "#6B7280" }}>
              © HappyDigital.
            </Typography>

            <Box
              component="img"
              src={logo1}
              alt="icon"
              sx={{ width: "18px", height: "18px" }}
            />

            <Typography sx={{ fontSize: "13px", color: "#6B7280" }}>
              All rights reserved.
            </Typography>
          </Box>

          {/* SOCIAL ICONS */}
          <Box>
            <IconButton size="small">
              <LinkedInIcon sx={{ color: "#9CA3AF" }} />
            </IconButton>
            <IconButton size="small">
              <FacebookIcon sx={{ color: "#9CA3AF" }} />
            </IconButton>
            <IconButton size="small">
              <LanguageIcon sx={{ color: "#9CA3AF" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const linkStyle = {
  fontSize: "14px",
  color: "#9CA3AF",
  mb: 0.5,        
  cursor: "pointer",
  "&:hover": {
    color: "#111827",
  },
};

export default Footer;