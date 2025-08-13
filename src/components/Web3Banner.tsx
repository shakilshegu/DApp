import React from 'react';
import { Typography, Button, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BannerContainer = styled('section')(({ theme }) => ({
  padding: '40px 0',
  backgroundColor: '#07070a'
}));

const BannerCard = styled('div')(({ theme }) => ({
  backgroundColor: '#0d0e14',
  border: '1px solid #212429',
  borderRadius: '16px',
  padding: '40px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '372px',
    height: '142px',
    background: 'linear-gradient(140.41deg, rgba(13,15,19,0) 23.39%, rgba(150,234,99,1) 109.08%)',
    filter: 'blur(145.1px)',
    zIndex: 0
  }
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Blanc Groove, serif',
  fontSize: '30px',
  fontWeight: 900,
  color: '#ffffff',
  marginBottom: '16px',
  position: 'relative',
  zIndex: 1
}));

const BannerDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#ffffff',
  marginBottom: '24px',
  position: 'relative',
  zIndex: 1
}));

const BannerButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#96ea63',
  color: '#000000',
  fontSize: '16px',
  fontWeight: 400,
  textTransform: 'none',
  borderRadius: '8px',
  padding: '12px 24px',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    backgroundColor: '#7bc94a',
    boxShadow: '0 0 20px rgba(150, 234, 99, 0.4)'
  }
}));

const Web3Banner: React.FC = () => {
  return (
    <BannerContainer>
      <Container maxWidth="lg">
        <BannerCard>
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            spacing={3}
          >
            <div>
              <BannerTitle>
                Unlock the Power of Web3 Today!
              </BannerTitle>
              <BannerDescription>
                Join us on the journey to the decentralized future.
              </BannerDescription>
            </div>
            
            <BannerButton
              endIcon={<ArrowForwardIcon />}
              className="glow-green shrink-0"
            >
              Get Started
            </BannerButton>
          </Stack>
        </BannerCard>
      </Container>
    </BannerContainer>
  );
};

export default Web3Banner;