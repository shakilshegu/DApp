import React from 'react';
import { Typography, Button, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BlobShape from './icons/blob-shape';

const HeroContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: '120px 0',
  background: '#07070a',
  overflow: 'hidden'
}));

const GlowEffect = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '5%',
  width: '90%',
  height: '634px',
  background: 'radial-gradient(50% 50% at 50% 50%, #96ea63 0%, rgba(0, 0, 0, 0) 100%)',
  opacity: 0.1,
  zIndex: 0
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(48px, 8vw, 85.32px)',
  fontWeight: 900,
  lineHeight: '1',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '24px',
  textShadow: '0 0 40px rgba(150, 234, 99, 0.3)'
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 400,
  color: '#d3d3d6',
  textAlign: 'center',
  marginBottom: '52px',
  maxWidth: '600px',
  margin: '0 auto 52px'
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#96ea63',
  color: '#1e2f14',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  borderRadius: '8px',
  padding: '12px 24px',
  '&:hover': {
    backgroundColor: '#7bc94a',
    boxShadow: '0 0 20px rgba(150, 234, 99, 0.4)'
  }
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      {/* <GlowEffect /> */}
       <div style={{
        position: 'absolute',
        top: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <BlobShape />
      </div>
      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Stack alignItems="center" spacing={4}>
          <HeroTitle variant="h1">
            Build the Future<br />
            with Web3
          </HeroTitle>
          
          <HeroSubtitle variant="subtitle1">
            Discover how we can help you connect with the next generation of the internet.
          </HeroSubtitle>
          
          <Stack direction="row" spacing={3} alignItems="center">
            <PrimaryButton
              endIcon={<ArrowForwardIcon />}
              className="glow-green"
            >
              Sign up
            </PrimaryButton>
            <SecondaryButton>
              Contact sales
            </SecondaryButton>
          </Stack>
        </Stack>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;