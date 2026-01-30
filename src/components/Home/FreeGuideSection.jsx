import {
  Box,
  Typography,
  Button,
  Card,
  Avatar,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import guideImage from "../../assets/image1/FreeGuideSection.png";

export default function FreeGuideSection() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#EEF3F6",
        fontFamily: "Kumbh Sans, sans-serif", // ✅ apply once
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "44px" },
              fontWeight: 800,
              lineHeight: { xs: "36px", md: "56px" },
              color: "#2B2F5B",
              mb: 2,
            }}
          >
            Don’t miss out on my
            <br />
            ‘Live life at the full
            <br />
            potential’ free guide
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5F6B7A",
              lineHeight: "28px",
              mb: 2,
              maxWidth: "520px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#7A8699",
              lineHeight: "26px",
              mb: 3,
              maxWidth: "520px",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </Typography>

          <Button
            sx={{
              bgcolor: "#2BB39C",
              color: "#FFFFFF",
              px: 4,
              py: 1.5,
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#239A86" },
            }}
          >
            Get your free guide now
          </Button>
        </Box>

        {/* RIGHT CARD */}
        <Box sx={{ width: { xs: "100%", md: "446px" }, position: "relative" }}>
          {/* BADGE */}
          <Box
            sx={{
              position: "absolute",
              top: -16,
              right: -16,
              width: "72px",
              height: "72px",
              bgcolor: "#2BB39C",
              color: "#FFFFFF",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "13px",
              zIndex: 3,
              textAlign: "center",
            }}
          >
            Free
            <br />
            guide!
          </Box>

          <Card
            sx={{
              width: "100%",
              minHeight: { xs: "480px", md: "560px" },
              background:
                "linear-gradient(180deg, #4B3F8C 0%, #3D3575 100%)",
              color: "#FFFFFF",
              p: { xs: 3, md: 5 },
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px", // ✅ added
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "50px" },
                fontWeight: 700,
                lineHeight: { xs: "36px", md: "62px" }, // ✅ FIXED
                maxWidth: "220px",
                zIndex: 2,
                position: "relative",
              }}
            >
              Are you
              <br />
              ready to
              <br />
              transform
              <br />
              your life?
            </Typography>

            {/* IMAGE */}
            <Box
              component="img"
              src={guideImage}
              alt="Guide"
              sx={{
                position: "absolute",
                width: { xs: "300px", md: "443.56px" },
                height: { xs: "300px", md: "443.54px" },
                top: { xs: "auto", md: "217.49px" },
                left: { xs: "auto", md: "105.08px" },
                bottom: { xs: "-40px", md: "auto" },
                right: { xs: "-40px", md: "auto" },
                borderRadius: "50%",
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            {/* FOOTER CTA */}
            <Box
              sx={{
                position: "absolute",
                bottom: 24,
                left: 24,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                zIndex: 2,
              }}
            >
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: "#FFFFFF",
                  color: "#2BB39C",
                }}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
              </Avatar>

              <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  Ready to start? Let’s talk!
                </Typography>
                <Typography sx={{ fontSize: "12px", opacity: 0.85 }}>
                  Lorem ipsum dolor sit amet
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}