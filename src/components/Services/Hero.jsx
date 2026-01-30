import { Box, Typography } from "@mui/material";
import heroImg from "../../assets/image2/services-hero.png";

export default function Hero() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FBF8F6" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 8 },
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 520px" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* LEFT TEXT */}
          <Box>
            <Typography sx={{ fontSize: 12, opacity: 0.65, mb: 1 }}>
              I can help you in these particular areas.
            </Typography>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: 34, sm: 44, md: 56 },
                lineHeight: 1.1,
                color: "#2B2A4C",
                mb: 2,
              }}
            >
              I help people to
              <br />
              discover their
              <br />
              true potential
            </Typography>

            <Typography sx={{ maxWidth: 520, opacity: 0.75, lineHeight: 1.7 }}>
              I help people to discover their true potential and live a fulfilling
              life. Discover the simple 3 steps that I discovered to hack
              productivity. It just works and it is backed by science. Wanna
              transform your life?
            </Typography>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0px 20px 50px rgba(0,0,0,0.10)",
              bgcolor: "#fff",
            }}
          >
            <Box
              component="img"
              src={heroImg}
              alt="Services hero"
              sx={{
                width: "100%",
                height: { xs: 320, sm: 380, md: 420 },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
