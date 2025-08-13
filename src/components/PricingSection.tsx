import React, { useState } from "react";
import {
  Typography,
  Container,
  Stack,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PricingCard from "./PricingCard";

const PricingContainer = styled("section")(({}) => ({
  padding: "80px 0",
  backgroundColor: "#07070a",
}));

const PricingTitle = styled(Typography)(({}) => ({
  fontFamily: "Manrope, sans-serif",
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "48px",
  color: "#ffffff",
  textAlign: "center",
  marginBottom: "37px",
}));

const PricingSubtitle = styled(Typography)(({}) => ({
  fontFamily: "DM Sans, sans-serif",
  fontSize: "18px",
  fontWeight: 400,
  color: "#a4a7ae",
  textAlign: "center",
  marginBottom: "24px",
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({}) => ({
  backgroundColor: "#07070a",
  border: "1px solid #4d4f5c",
  borderRadius: "100px",
  marginBottom: "56px",
  "& .MuiToggleButton-root": {
    border: "none",
    borderRadius: "100px",
    padding: "8px 16px",
    fontSize: "13px",
    fontWeight: 400,
    textTransform: "none",
    "&.Mui-selected": {
      backgroundColor: "#96ea63",
      color: "#0d0e14",
    },
    "&:not(.Mui-selected)": {
      color: "#7a7b85",
    },
  },
}));

const PricingGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "32px",
  marginBottom: "53px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

const pricingPlans = [
  {
    title: "Basic",
    price: "$9.99",
    period: "/month",
    description: "Essential features for beginners.",
    features: [
      "Basic Platform Access",
      "Email Support",
      "Limited Data Storage",
    ],
    buttonText: "Get Started with Basic",
  },
  {
    title: "Pro",
    price: "$19.99",
    period: "/month",
    description: "Advanced tools for growth.",
    features: [
      "Full Platform Access",
      "Email and Chat Support",
      "Unlimited Data Storage",
    ],
    buttonText: "Get Started with Pro",
    isPopular: true,
  },
  {
    title: "Premium",
    price: "$29.99",
    period: "/month",
    description: "Top-tier support and customization.",
    features: [
      "Advanced Platform Access",
      "24/7 Support via Chat, and Phone",
      "Customized Features",
    ],
    buttonText: "Get Started with Premium",
  },
];

const PricingSection: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const handleBillingChange = (
    _event: React.MouseEvent<HTMLElement>, // optional underscore to indicate "ignored"
    newBillingPeriod: string
  ) => {
    if (newBillingPeriod !== null) {
      setBillingPeriod(newBillingPeriod);
    }
  };

  return (
    <PricingContainer>
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <PricingTitle>Pricing</PricingTitle>
          <PricingSubtitle>
            Explore our pricing plans tailored to fit your needs.
          </PricingSubtitle>

          <StyledToggleButtonGroup
            value={billingPeriod}
            exclusive
            onChange={handleBillingChange}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">Yearly •20% off</ToggleButton>
          </StyledToggleButtonGroup>

          <PricingGrid>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
              />
            ))}
          </PricingGrid>
        </Stack>
      </Container>
    </PricingContainer>
  );
};

export default PricingSection;
