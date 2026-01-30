import React from "react";
import { Box, Typography } from "@mui/material";

// RIGHT IMAGE
import personImg from "../../assets/image2/image1.png";

// STEP LOGOS
import trans1 from "../../assets/image2/Test1.png";
import trans2 from "../../assets/image2/Test2.png";
import trans3 from "../../assets/image2/Test3.png";
import trans4 from "../../assets/image2/Test4.png";

const steps = [
  {
    title: "Talk to me first",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    logo: trans1,
  },
  {
    title: "Schedule a meeting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    logo: trans2,
  },
  {
    title: "Online consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    logo: trans3,
  },
  {
    title: "Ready to start? Let’s talk!",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    logo: trans4,
  },
];

export default function HowItWorks() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: "60px", md: "120px" },
        fontFamily: "'Kumbh Sans', sans-serif",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: "24px",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: "48px", md: "80px" },
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography sx={{ fontSize: "14px", color: "#9CA3AF", mb: "12px" }}>
            How does it work?
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "58px", md: "56px" },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#2E2C5D",
              mb: "24px",
            }}
          >
            Are you ready to <br /> transform your life?
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              color: "#6B7280",
              lineHeight: "26px",
              mb: "48px",
              maxWidth: "460px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </Typography>

          {/* STEPS */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {steps.map((step, index) => (
              <Box key={index} sx={{ display: "flex", gap: "16px" }}>
                {/* LOGO CIRCLE */}
                <Box
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bgcolor: "#F9FAFB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={step.logo}
                    alt={step.title}
                    sx={{ width: "48px", height: "48px" }}
                  />
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#2E2C5D",
                      mb: "4px",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#6B7280",
                      lineHeight: "22px",
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            component="img"
            src={personImg}
            alt="Person"
            sx={{
              width: { xs: "100%", md: "570px" },
              height:"780px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}