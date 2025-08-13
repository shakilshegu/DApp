import React from 'react';
import { Typography, Container, Stack, Divider, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import VetricLogoIcon from './icons/VetricLogoIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')(({ theme }) => ({
  padding: '60px 0 40px',
  backgroundColor: '#07070a'
}));

const FooterLink = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: '#7a7b85',
  cursor: 'pointer',
  '&:hover': {
    color: '#ffffff'
  }
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  color: '#7a7b85'
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '1px solid #4d4f5c',
  borderRadius: '34px',
  color: '#a6a7ad',
  fontSize: '14px',
  fontWeight: 400,
  '& .MuiChip-icon': {
    color: '#11a844',
    fontSize: '6px'
  }
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#7a7b85',
  padding: '8px',
  '&:hover': {
    color: '#96ea63',
    backgroundColor: 'rgba(150, 234, 99, 0.1)'
  }
}));

const StatusDot = styled('div')(({ theme }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#11a844',
  marginRight: '8px'
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Top Section */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            justifyContent="space-between" 
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={3}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <VetricLogoIcon width={24} height={24} color="#96ea63" />
              <Typography className="text-white font-semibold text-lg ml-2">
                VETRIC
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={4}>
              <FooterLink>Solutions</FooterLink>
              <FooterLink>Pricing</FooterLink>
              <FooterLink>Get Started</FooterLink>
              <FooterLink>Use cases</FooterLink>
              <FooterLink>Documentation</FooterLink>
            </Stack>
          </Stack>
          
          <Divider sx={{ borderColor: '#4d4f5c', backdropFilter: 'blur(10.9px)' }} />
          
          {/* Bottom Section */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            justifyContent="space-between" 
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={3}
          >
            <CopyrightText>VETRIC - 2024</CopyrightText>
            
            <StatusChip
              icon={<StatusDot />}
              label="Operating System"
              variant="outlined"
            />
            
            <Stack direction="row" spacing={1}>
              <SocialIcon>
                <InstagramIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <FacebookIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <YouTubeIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <LinkedInIcon fontSize="small" />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon fontSize="small" />
              </SocialIcon>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;