import { Box, Typography } from "@mui/material";

import CoachingIcon from "../../assets/image1/Serve 1.png";
import ConsultationIcon from "../../assets/image1/Serve 2.png";
import GroupIcon from "../../assets/image1/Serve 3.png";
import SevLogo from "../../assets/image1/Sevlog.png";

export default function Services() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#EEF3F6" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 8 },
        }}
      >
        {/* TOP CONTENT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT */}
          <Box>
            <Box
              component="img"
              src={SevLogo}
              alt="decor"
              sx={{ width: "72px", mb: 2 }}
            />

            <Typography
              sx={{
                fontFamily: "Kumbh Sans",
                fontWeight: 800,
                fontSize: { xs: "28px", md: "40px" },
                lineHeight: { xs: "36px", md: "52px" },
                letterSpacing: "-0.02em",
                color: "#2E2C5D",
                maxWidth: "460px",
              }}
            >
              I can help you in these
              <br />
              particular areas.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Kumbh Sans",
                fontSize: "16px",
                lineHeight: "28px",
                color: "#475569",
                mb: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Kumbh Sans",
                fontSize: "16px",
                lineHeight: "28px",
                color: "#475569",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </Typography>
          </Box>
        </Box>

        {/* SERVICE CARDS */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: { xs: 3, md: 6 },
            borderRadius: "12px",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.05)",
          }}
        >
          {/* CARD CONTAINER */}
          <Box
            sx={{
              /* MOBILE = SWIPE */
              display: { xs: "flex", md: "grid" },
              gridTemplateColumns: { md: "repeat(3, 1fr)" },
              gap: { xs: 0, md: 6 },

              overflowX: { xs: "auto", md: "visible" },
              scrollSnapType: { xs: "x mandatory", md: "none" },
              WebkitOverflowScrolling: "touch",

              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <ServiceCard icon={CoachingIcon} title="1:1 Coaching" />
            <ServiceCard icon={ConsultationIcon} title="Consultation" />
            <ServiceCard icon={GroupIcon} title="Group Coaching Sessions" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function ServiceCard({ icon, title }) {
  return (
    <Box
      sx={{
        /* MOBILE SLIDE */
        minWidth: { xs: "100%", md: "auto" },
        scrollSnapAlign: "start",
        mr: { xs: 2, md: 0 },
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={title}
        sx={{ width: "48px", mb: 2 }}
      />

      <Typography
        sx={{
          fontFamily: "Kumbh Sans",
          fontWeight: 700,
          fontSize: "18px",
          color: "#0F172A",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION WITH 3-LINE CLAMP (MOBILE ONLY) */}
      <Typography
        sx={{
          fontFamily: "Kumbh Sans",
          fontSize: "14px",
          lineHeight: "24px",
          color: "#475569",
          maxWidth: "300px",

          /* 👇 3 LINE DOTS */
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",

          WebkitLineClamp: { xs: 3, md: "unset" },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </Typography>
    </Box>
  );
}