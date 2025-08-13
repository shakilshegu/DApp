import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CrossChainIcon from './icons/CrossChainIcon';
import IdentityIcon from './icons/IdentityIcon';
import SmartContractIcon from './icons/SmartContractIcon';
import GovernanceIcon from './icons/GovernanceIcon';
import TokenizationIcon from './icons/TokenizationIcon';
import DataExchangeIcon from './icons/DataExchangeIcon';

const FeaturesContainer = styled('section')(({ }) => ({
  padding: '120px 0',
  backgroundColor: '#07070a',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #96ea63 50%, transparent 100%)',
    opacity: 0.3
  }
}));

const SectionHeader = styled(Box)(({ }) => ({
  textAlign: 'center',
  marginBottom: '80px',
  position: 'relative'
}));

const SectionTitle = styled(Typography)(({ }) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: '#96ea63',
  marginBottom: '16px',
  lineHeight: 1.2,
  '@media (max-width: 768px)': {
    fontSize: '36px'
  }
}));

const SectionSubtitle = styled(Typography)(({ }) => ({
  fontSize: '18px',
  color: '#a6a7ad',
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
  '@media (max-width: 768px)': {
    fontSize: '16px'
  }
}));

const FeaturesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
  gap: '32px',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px'
  },
  [theme.breakpoints.up('lg')]: {
    gap: '48px'
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
    gap: '24px'
  }
}));

const EnhancedFeatureCard = styled('div')(({ }) => ({
  background: 'linear-gradient(145deg, #0f0f15 0%, #1a1a20 100%)',
  border: '1px solid #212429',
  borderRadius: '16px',
  padding: '32px 24px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: 'linear-gradient(135deg, rgba(150, 234, 99, 0.05) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none'
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: '#96ea63',
    boxShadow: '0 20px 40px rgba(150, 234, 99, 0.1), 0 0 0 1px rgba(150, 234, 99, 0.2)',
    '&::before': {
      opacity: 1
    },
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      filter: 'drop-shadow(0 4px 12px rgba(150, 234, 99, 0.3))'
    },
    '& .feature-title': {
      color: '#96ea63'
    }
  }
}));

const IconContainer = styled('div')(({ }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, rgba(150, 234, 99, 0.1) 0%, rgba(150, 234, 99, 0.05) 100%)',
  border: '1px solid rgba(150, 234, 99, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
  transition: 'all 0.4s ease'
}));

const FeatureTitle = styled(Typography)(({ }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '12px',
  transition: 'color 0.3s ease',
  lineHeight: 1.3
}));

const FeatureDescription = styled(Typography)(({ }) => ({
  fontSize: '14px',
  color: '#a6a7ad',
  lineHeight: 1.6,
  opacity: 0.9
}));

const BackgroundPattern = styled('div')(({ }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '120%',
  height: '120%',
  background: `radial-gradient(circle at 30% 20%, rgba(150, 234, 99, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 70% 80%, rgba(150, 234, 99, 0.02) 0%, transparent 50%)`,
  pointerEvents: 'none',
  zIndex: 0
}));

const features = [
  {
    icon: <CrossChainIcon width={24} height={24} color="#96ea63" />,
    title: 'Cross-Chain Access',
    description: 'Seamlessly interact with diverse blockchain networks and bridge assets across multiple chains with enterprise-grade security.'
  },
  {
    icon: <IdentityIcon width={24} height={24} color="#96ea63" />,
    title: 'Decentralized Identity',
    description: 'Take full control of your digital identity with self-sovereign solutions that work across all decentralized applications.'
  },
  {
    icon: <SmartContractIcon width={24} height={24} color="#96ea63" />,
    title: 'Smart Contract Automation',
    description: 'Deploy and manage automated smart contracts with advanced logic for complex business operations and workflows.'
  },
  {
    icon: <GovernanceIcon width={24} height={24} color="#96ea63" />,
    title: 'Community Governance',
    description: 'Participate in transparent, democratic decision-making through weighted voting and proposal systems.'
  },
  {
    icon: <TokenizationIcon width={24} height={24} color="#96ea63" />,
    title: 'Asset Tokenization',
    description: 'Transform real-world assets into tradeable digital tokens with compliance-ready infrastructure and legal frameworks.'
  },
  {
    icon: <DataExchangeIcon width={24} height={24} color="#96ea63" />,
    title: 'Interoperable Data Exchange',
    description: 'Enable secure, privacy-preserving data sharing between applications with advanced encryption and access controls.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer>
      <BackgroundPattern />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader>
          <SectionTitle variant="h2">
            Powerful Features for the Decentralized Future
          </SectionTitle>
          <SectionSubtitle>
            Experience next-generation blockchain technology with our comprehensive suite of tools designed for seamless Web3 integration and maximum efficiency.
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <EnhancedFeatureCard key={index}>
              <IconContainer>
                <div className="feature-icon" style={{ transition: 'all 0.4s ease' }}>
                  {feature.icon}
                </div>
              </IconContainer>
              <FeatureTitle className="feature-title" variant="h6">
                {feature.title}
              </FeatureTitle>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </EnhancedFeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesContainer>
  );
};

export default FeaturesSection;