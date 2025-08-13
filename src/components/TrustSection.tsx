import React from 'react';
import { Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const TrustContainer = styled('section')(({ }) => ({
  padding: '60px 0',
  backgroundColor: '#07070a'
}));

const TrustTitle = styled(Typography)(({ }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '17.86px',
  fontWeight: 700,
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '37px'
}));

const LogosContainer = styled('div')(({ }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',     
  maxWidth: '1000px',   
  margin: '0 auto',
  opacity: 0.6,
  filter: 'grayscale(100%)',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    display: 'block'
  },
  '&:hover': {
    opacity: 0.8,
    filter: 'grayscale(50%)'
  },
  transition: 'all 0.3s ease'
}));

const TrustSection: React.FC = () => {
  return (
    <TrustContainer>
      <Container maxWidth="lg">
        <Stack alignItems="center">
          <TrustTitle>
            Trusted by the world leaders
          </TrustTitle>
          <LogosContainer>
            <img 
              src="/images/company-logos.svg" 
              alt="Trusted company logos including Logoipsum partners"
              className="max-w-full h-auto"
            />
          </LogosContainer>
        </Stack>
      </Container>
    </TrustContainer>
  );
};

export default TrustSection;