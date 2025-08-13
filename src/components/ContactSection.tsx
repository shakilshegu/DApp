import React, { useState } from "react";
import { Typography, TextField, Button, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContactContainer = styled("section")(({}) => ({
  padding: "80px 0",
  backgroundColor: "#07070a",
}));

const ContactTitle = styled(Typography)(({}) => ({
  fontFamily: "Manrope, sans-serif",
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "48px",
  color: "#ffffff",
  marginBottom: "16px",
}));

const ContactDescription = styled(Typography)(({}) => ({
  fontFamily: "DM Sans, sans-serif",
  fontSize: "18px",
  fontWeight: 400,
  color: "#a4a7ae",
  marginBottom: "50px",
}));

const StyledTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    borderRadius: "8px",
    "& fieldset": {
      borderColor: "#4d4f5c",
    },
    "&:hover fieldset": {
      borderColor: "#96ea63",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#96ea63",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#7a7b85",
    fontSize: "14px",
    fontWeight: 400,
  },
  "& .MuiInputBase-input": {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 400,
    "&::placeholder": {
      color: "#7a7b85",
      opacity: 1,
    },
  },
}));

const SubmitButton = styled(Button)(({}) => ({
  backgroundColor: "#ffffff",
  color: "#07070a",
  fontSize: "16px",
  fontWeight: 400,
  textTransform: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <ContactContainer>
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <ContactTitle>Get in touch</ContactTitle>
            <ContactDescription>
              Contact us for additional details or assistance.
            </ContactDescription>
          </div>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <StyledTextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                variant="outlined"
                required
              />

              <StyledTextField
                fullWidth
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                variant="outlined"
                required
              />

              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Add your message"
                variant="outlined"
                multiline
                rows={4}
                required
              />

              <SubmitButton type="submit">Submit</SubmitButton>
            </Stack>
          </form>
        </div>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;
