import { Box, Typography, Button } from "@mui/material";
import HeroImage from "../../assets/image1/image 1.png";
import Nav from "../../assets/image1/Nav.png";
import SuccessBadge from "../../assets/image1/Group 42912.png";

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "#FAF8F6",
        fontfamily: "Kumbh Sans, sans-serif"
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 8, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* ZIG ZAG DECOR */}
        <Box
          component="img"
          src={Nav}
          alt="decor"
          sx={{
            position: "absolute",
            top: { xs: 16, md: 40 },
            left: { xs: 16, md: 50 },
            width: "88px",
          }}
        />

        {/* LEFT CONTENT */}
        <Box sx={{ maxWidth: "560px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#9CA3AF",
              mb: 1.5,
            }}
          >
            Proven strategies backed by science for success.
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "36px", md: "72px" },
              fontWeight: 800,
              lineHeight: { xs: "44px", md: "86px" },
              letterSpacing: "-0.02em",
              color: "#2E2C5D",
              mb: 3,
            }}
          >
            Live life at the
            <br />
            full potential
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "30px",
              color: "#475569",
              maxWidth: "520px",
              mb: 4,
            }}
          >
            I help people to discover their true potential and live a fulfilling
            life. Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is backed by science.
            <br />
            Wanna transform your life?
          </Typography>

          <Button
            sx={{
              bgcolor: "#20AD96",
              color: "#FFFFFF",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              boxShadow: "none",
              "&:hover": { bgcolor: "#169C79" },
            }}
          >
            Get your free guide now
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            right: { md: 60 },
            top: { md: 120 },
            mt: { xs: 6, md: 0 },
            width: { xs: "100%", md: "462px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* SUCCESS BADGE */}
          <Box
            sx={{
              position: "absolute",
              top: { xs: -20, md: -36 },
              left: { xs: "50%", md: -110 },
              transform: { xs: "translateX(-50%)", md: "none" },
              bgcolor: "#FFFFFF",
              px: 3,
              py: 2,
              borderRadius: "8px",
              boxShadow: "0px 16px 32px rgba(0,0,0,0.12)",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={SuccessBadge}
              alt="100% success"
              sx={{ width: "150px" }}
            />
          </Box>

          {/* HERO IMAGE */}
          <Box
            component="img"
            src={HeroImage}
            alt="Coach"
            sx={{
              width: "100%",
              maxWidth: "462px",
              height: "500px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;