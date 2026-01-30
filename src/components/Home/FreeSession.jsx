import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import profile from "../../assets/image1/FreeSession.png";

export default function FreeSession() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FFFFFF" }}>
      <Box
        sx={{
          maxWidth: "1350px",
          mx: "auto",
          px: { xs: 2, md: 4 },          
          py: { xs: 6, md: 8 },          
        }}
      >
        {/* CARD */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#FBF8F4",
            borderRadius: "24px",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 0 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ width: { xs: "100%", md: "600px" } }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "28px", md: "40px" },
                lineHeight: { xs: "36px", md: "48px" },
                letterSpacing: "-0.01em",
                color: "#2E2C5D",
                mb: 2,
              }}
            >
              Get 15-Minutes Complimentary
              <br />
              online session.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "28px",
                color: "#9CA3AF",
                mb: 3,
              }}
            >
              Limited Period Offer. Claim Now.
            </Typography>

            <Button
              sx={{
                width: { xs: "100%", md: "240px" },
                height: "44px",
                bgcolor: "#22B286",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "16px",
                color: "#FFFFFF",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#1DA376",
                  boxShadow: "none",
                },
              }}
            >
              Book now
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              mt: { xs: 4, md: 0 },
              ml: { md: "auto" },
              width: { xs: "100%", md: "600px" },
              height: { xs: "240px", md: "416px" },
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {/* MEET CHIP */}
            <Chip
              icon={<VideoCallOutlinedIcon />}
              label="Meet"
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                bgcolor: "#FFFFFF",
                color: "#111827",
                fontWeight: 500,
                px: 1,
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                zIndex: 2,
                "& .MuiChip-icon": {
                  color: "#22B286",
                },
              }}
            />

            {/* IMAGE */}
            <Box
              component="img"
              src={profile}
              alt="Free Session"
              sx={{
                width: "100%",
                height: "100%",
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