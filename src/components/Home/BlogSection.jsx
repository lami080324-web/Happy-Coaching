import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

// Images
import blog1 from "../../assets/image1/Blog 1.png";
import blog2 from "../../assets/image1/Blog 2.png";
import blog3 from "../../assets/image1/Blog 3.png";

export default function BlogSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#EEF3F6",
        py: { xs: "64px", md: "80px" },
      }}
    >
      {/* CONTAINER */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: "16px", sm: "24px", md: 0 },
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Kumbh Sans",
            fontWeight: 800,
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            lineHeight: { xs: "36px", md: "56px" },
            letterSpacing: "-0.01em",
            color: "#333461",
            mb: { xs: "36px", md: "60px" },
          }}
        >
          Stay Motivated, read the <br />
          weekly blog articles.
        </Typography>

        {/* ✅ BLOG CARDS (Mobile: 2 per row, 3rd goes down) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: "16px", sm: "24px", md: "30px" },
            textAlign: "left",
          }}
        >
          <BlogCard image={blog1} title="Balancing your love and work life." />
          <BlogCard
            image={blog2}
            title="A short break from Social Media is important."
          />
          <BlogCard image={blog3} title="How to be 1% Better Every Day" />
        </Box>

        {/* BUTTON */}
        <Button
          sx={{
            mt: { xs: "36px", md: "50px" },
            bgcolor: "#3BB4A0",
            px: { xs: "26px", sm: "40px" },
            py: "10px",
            borderRadius: "8px",
            textTransform: "none",
            fontFamily: "Kumbh Sans",
            fontWeight: 600,
            color: "#FFFFFF",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#2FA392",
              boxShadow: "none",
            },
          }}
        >
          Read more blogs
        </Button>
      </Box>
    </Box>
  );
}

/* ✅ BLOG CARD */
function BlogCard({ image, title }) {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        overflow: "hidden",
        height: "100%",
        bgcolor: "#FFFFFF",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: { xs: "130px", sm: "160px", md: "180px" },
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ p: { xs: "14px", sm: "16px" } }}>
        <Typography
          sx={{
            fontFamily: "Kumbh Sans",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 600,
            color: "#333461",
            mb: "10px",
            lineHeight: { xs: "20px", md: "26px" },
          }}
        >
          {title}
        </Typography>

        {/* ✅ DESCRIPTION: ONLY 3 LINES + DOTS */}
        <Typography
          sx={{
            fontFamily: "Kumbh Sans",
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            color: "#6B7280",
            lineHeight: "1.6",

            display: "-webkit-box",
            WebkitLineClamp: 3,          // ✅ show only 3 lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </Typography>
      </CardContent>
    </Card>
  );
}
