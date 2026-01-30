import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "How long does the coaching process take?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What if I wanted to end my coaching engagement?",
    answer:
      "You can cancel anytime. There are no long-term contracts or hidden fees.",
  },
  {
    question: "Can I change through coaching?",
    answer:
      "Absolutely. Coaching is designed to help you grow, adapt, and reach your goals.",
  },
  {
    question: "How often do we meet?",
    answer:
      "Sessions are typically held weekly, but the schedule is flexible.",
  },
];

export default function GoodToKnow() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: "64px", md: "120px" },
        bgcolor: "#FFFFFF",
        fontFamily: "'Kumbh Sans', sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          mx: "auto",
          px: "24px",
        }}
      >
        {/* HEADER */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "48px", md: "48px" },
            fontWeight: 800,
            color: "#2E2C5D",
            mb: "12px",
          }}
        >
          Good to know.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: "20px",
            color: "#6B7280",
            mb: "56px",
          }}
        >
          Everything you need to know about the my services.
        </Typography>

        {/* FAQ LIST */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              defaultExpanded={index === 0}
              disableGutters
              elevation={0}
              sx={{
                borderBottom: "1px solid #E5E7EB",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: "2px solid #20AD96",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#20AD96",
                    }}
                  >
                    {index === 0 ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#101828",

                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#6B7280",
                    lineHeight: "22px",
                    maxWidth: "720px",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* CTA BOX */}
        <Box
          sx={{
            mt: "72px",
            bgcolor: "#FBF8F6",
            borderRadius: "16px",
            py: { xs: "32px", md: "48px" },
            px: { xs: "24px", md: "64px" },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#2E2C5D",
              mb: "8px",
            }}
          >
            Still have questions?
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B7280",
              mb: "24px",
            }}
          >
            Can&apos;t find the answer you&apos;re looking for? Please chat to our
            friendly team.
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#20AD96",

              textTransform: "none",
              fontWeight: 600,
              px: "43px",
              py: "13px",
              borderRadius: "8px",
              "&:hover": {
                bgcolor: "#1B9C87",
              },
            }}
          >
            Get in touch
          </Button>
        </Box>
      </Box>
    </Box>
  );
}