import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import test1 from "../../assets/image1/Test 1.png";
import test2 from "../../assets/image1/Test 2.png";
import test3 from "../../assets/image1/Test 3.png";
import handCursor from "../../assets/image1/Testhand.png";

const reviews = [
  { name: "Jane", img: test1, rating: 5 },
  { name: "Catherine", img: test2, rating: 4 },
  { name: "Jane", img: test3, rating: 4 },
];

export default function Testimonials() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#FAF8F6" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 8 },
        }}
      >
        {/* HEADING */}
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "28px", md: "50px" },
            lineHeight: { xs: "36px", md: "56px" },
            letterSpacing: "-0.02em",
            color: "#2E2C5D",
            maxWidth: "520px",
            mb: { xs: 4, md: 6 },
          }}
        >
          Hear out what my <br />
          clients say about me.
        </Typography>

        {/* CARDS CONTAINER */}
        <Box
          sx={{
            /* MOBILE = SWIPE CAROUSEL */
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: { md: "repeat(3, 1fr)" },
            gap: { xs: 0, md: 4 },

            overflowX: { xs: "auto", md: "visible" },
            scrollSnapType: { xs: "x mandatory", md: "none" },
            WebkitOverflowScrolling: "touch",

            /* hide scrollbar */
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {reviews.map((item, index) => (
            <Box
              key={index}
              sx={{
                /* MOBILE CARD */
                minWidth: { xs: "100%", md: "auto" },
                scrollSnapAlign: "start",

                bgcolor: "#FFFFFF",
                p: { xs: 3, md: 4 },
                boxShadow: "0px 8px 24px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative",

                /* spacing between slides */
                mr: { xs: 2, md: 0 },
              }}
            >
              {/* TEXT */}
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  lineHeight: { xs: "26px", md: "30px" },
                  color: "#6B7280",
                  mb: 3,
                }}
              >
                "I gained so much <br />
                <Box component="span" sx={{ fontWeight: 700, color: "#4b4981" }}>
                  confidence
                </Box>{" "}
                in my ability to <br />
                connect and deepen my <br />
                relationships with people."
              </Typography>

              {/* NAME */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#2E2C5D",
                  mb: 2,
                }}
              >
                {item.name}
              </Typography>

              {/* AVATAR */}
              <Avatar
                src={item.img}
                alt={item.name}
                sx={{ width: 48, height: 48, mb: 2 }}
              />

              {/* STARS */}
              <Box sx={{ display: "flex", gap: 0.5, mt: "auto" }}>
                {[...Array(5)].map((_, i) =>
                  i < item.rating ? (
                    <StarIcon key={i} sx={{ fontSize: 18, color: "#FBBF24" }} />
                  ) : (
                    <StarBorderIcon
                      key={i}
                      sx={{ fontSize: 18, color: "#E5E7EB" }}
                    />
                  )
                )}
              </Box>

              {/* HAND CURSOR — ONLY FIRST CARD */}
              {index === 0 && (
                <Box
                  component="img"
                  src={handCursor}
                  alt="cursor"
                  sx={{
                    position: "absolute",
                    bottom: "-28px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "34px",
                    pointerEvents: "none",
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