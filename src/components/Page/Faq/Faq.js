import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../Footer/Footer";

const faqData = [
  {
    question: "What products do you export?",
    answer: "We export a variety of high-quality agricultural seeds and products, including but not limited to wheat, pulses (dal), and various certified seeds.",
  },
  {
    question: "Where do you export your products?",
    answer: "We export products across India. Our logistics team ensures timely delivery to any location within the country.",
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by contacting us directly through our website or reaching out to our sales team via email or phone. Once we confirm the order, we’ll provide an invoice with detailed specifications and prices.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, we have minimum order quantity (MOQ) requirements depending on the type of product. Please contact our sales team for details on MOQs for specific items.",
  },
  {
    question: "How do you ensure product quality?",
    answer: "Quality is our priority. All our products are certified and meet the agricultural quality standards set by the Government of India. We also conduct rigorous checks before dispatching each order.",
  },
  {
    question: "What are your payment terms?",
    answer: "Payment terms vary based on the order size and type. We typically require partial payment upon order confirmation, with the balance due before dispatch. Payment methods include bank transfers and other secure payment options.",
  },
  {
    question: "How can I contact customer support",
    answer: "Order processing times vary based on the quantity and location. Generally, most orders are processed within [X] days, and delivery times depend on the destination. We’ll provide an estimated delivery date once your order is confirmed.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, once your order is shipped, we will provide a tracking ID or shipping details so you can monitor the progress of your delivery.",
  },
  {
    question: "What are your business hours",
    answer: "We operate from [Your Business Hours] on [Your Business Days].",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds are available for defective, damaged, or incorrect products. Refunds are processed according to our refund policy. Please refer to our terms and conditions or contact our support team for assistance.",
  },
  {
    question: "Do you provide samples?",
    answer: "Yes, samples can be provided upon request. Please reach out to our sales team for details on sample availability and shipping.",
  },
  {
    question: "What certifications do your products hold?",
    answer: "Our products are certified as per the quality standards mandated by the Government of India, ensuring compliance with safety and quality norms for agricultural products.",
  },
  {
    question: " How long does it take to process and deliver an order??",
    answer: "You can reach us through our contact form on the website, by email at [Your Email], or by phone at [Your Phone Number]. Our support team is available during business hours to assist you.",
  },
  {
    question: " What should I do if I receive damaged or incorrect products?",
    answer: "If you receive damaged or incorrect products, please contact us within [X] days of receiving the order. We’ll work with you to resolve the issue, whether that involves a replacement, return, or refund.",
  },
  {
    question: "Do you have minimum order requirements?",
    answer: "Yes, we have minimum order quantity (MOQ) requirements depending on the type of product. Please contact our sales team for details on MOQs for specific items.",
  },
];

export default function Faq() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Navbar />
        <Divider
          orientation="horizontal"
          sx={{
            borderColor: "#febd2f",
            width: "100%",
            backgroundColor: "#ffffff",
          }}
        />
        <Grid
          container
          spacing={2}
          sx={{
            margin: "0 auto",
            padding: "0 10px",
            maxWidth: "1160px",
            pt: 15,
          }}
        >
          {/* Back to Home Link */}
          <Grid item xs={12}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.9rem",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "#febd2f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "0.5rem",
                  }}
                >
                  <KeyboardBackspaceIcon sx={{ color: "#173334" }} />
                </Box>
                Back to Home
              </Typography>
            </Link>
          </Grid>

          {/* FAQ Section */}
          <Grid item xs={6}>
            <Box>
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Faq's
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                People will always seek help and advice. They are unwilling to
                pick up the phone, walk into a store, or wait hours (even
                minutes) for that information or insight to become accessible.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Accordion Section of FAQ */}
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", textAlign: 'center', marginTop: "3rem" }}
      >
        About shop
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ margin: "0 auto", padding: "0 10px", maxWidth: "1160px", pt: 5, pb: 15 }}
      >
        {faqData.map((faq, index) => (
          <Grid item lg={4} key={index}>
            <Accordion sx={{ border: "1px solid black", borderRadius: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <Divider />
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          backgroundColor: "#173334",
          pb: 5,
          color: "#febd2f",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
