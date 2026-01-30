import React from "react";
import { Box, Typography } from "@mui/material";

import testHand from "../../assets/image2/Testhand.png"; // 👈 HAND ICON
import serve1 from "../../assets/image2/Serve1.png";
import serve2 from "../../assets/image2/Serve2.png";
import serve3 from "../../assets/image2/Serve3.png";

const items = [
  {
    title: "Group Coaching Sessions",
    logo: serve3,
    active: true,
    showHand: true, // 👈 only first card
  },
  {
    title: "Online course",
    logo: serve1,
    offset: true,
  },
  {
    title: "Consultation",
    logo: serve2,
  },
  {
    title: "1:1 Coaching",
    logo: serve3,
    offset: true,
  },
];

export default function HelpAreas() {
  return (
    <Box
      sx={{
        width: "100%",
        py: "80px",
        bgcolor: "#FFFFFF",
        fontFamily: "'Kumbh Sans', sans-serif",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: "16px" }}>
        {/* HEADING */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 800,
            color: "#2E2C5D",
            mb: "64px",
          }}
        >
          I can help you in these <br /> particular areas.
        </Typography>

        {/* CONTAINER */}
        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            overflowX: { xs: "auto", md: "visible" },
            scrollSnapType: { xs: "x mandatory", md: "none" },

            gridTemplateColumns: { md: "repeat(2, 450px)" },
            justifyContent: { md: "center" },
            columnGap: { md: "64px" },
            rowGap: { md: "64px" },

            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {items.map((item) => (
            <Box
              key={item.title}
              sx={{
                position: "relative", // 👈 REQUIRED for hand positioning

                flex: { xs: "0 0 100%", md: "unset" },
                width: { xs: "100%", md: "450px" },
                scrollSnapAlign: "center",

                height: "320px",
                border: "1px solid #EEF2F6",
                borderRadius: "12px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                boxSizing: "border-box",

                mt: { xs: 0, md: item.offset ? "48px" : "0px" },
              }}
            >
              {/* LOGO */}
              <Box
                component="img"
                src={item.logo}
                alt={item.title}
                sx={{
                  width: "72px",
                  height: "72px",
                  mb: "20px",
                }}
              />

              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: item.active ? "#20AD96" : "#2E2C5D",
                  mb: "10px",
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#6B7280",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor  <br />
                incididunt ut labore et dolore magna  <br />
                aliqua minim veniam.   
              </Typography>

              {/* 👇 HAND ICON (EXACT POSITION) */}
              {item.showHand && (
                <Box
                  component="img"
                  src={testHand}
                  alt="hand cursor"
                  sx={{
                    position: "absolute",
                    bottom: "16px",
                    right: "16px",
                    width: "33.45px",
                    height: "35.26px",
                    display: { xs: "none", md: "block" }, // desktop only
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}