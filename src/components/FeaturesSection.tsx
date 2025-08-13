import React from 'react';
import { Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import FeatureCard from './FeatureCard';
import CrossChainIcon from './icons/CrossChainIcon';
import IdentityIcon from './icons/IdentityIcon';
import SmartContractIcon from './icons/SmartContractIcon';
import GovernanceIcon from './icons/GovernanceIcon';
import TokenizationIcon from './icons/TokenizationIcon';
import DataExchangeIcon from './icons/DataExchangeIcon';

const FeaturesContainer = styled('section')(({ theme }) => ({
  padding: '80px 0',
  backgroundColor: '#07070a'
}));

const FeaturesGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '76px',
  marginTop: '40px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  }
}));

const features = [
  {
    icon: <CrossChainIcon width={20} height={20} color="#96ea63" />,
    title: 'Cross-Chain Access',
    description: 'Seamlessly interact with diverse blockchain networks.'
  },
  {
    icon: <IdentityIcon width={20} height={20} color="#96ea63" />,
    title: 'Decentralized Identity',
    description: 'Securely manage your digital identity across applications.'
  },
  {
    icon: <SmartContractIcon width={20} height={20} color="#96ea63" />,
    title: 'Smart Contract Automation',
    description: 'Streamline operations with automated smart contracts.'
  },
  {
    icon: <GovernanceIcon width={20} height={20} color="#96ea63" />,
    title: 'Community Governance',
    description: 'Participate in decentralized decision-making through voting.'
  },
  {
    icon: <TokenizationIcon width={20} height={20} color="#96ea63" />,
    title: 'Asset Tokenization',
    description: 'Digitally tokenize real-world assets for efficient management.'
  },
  {
    icon: <DataExchangeIcon width={20} height={20} color="#96ea63" />,
    title: 'Interoperable Data Exchange',
    description: 'Exchange data seamlessly between applications for collaboration.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer>
      <Container maxWidth="lg">
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesContainer>
  );
};

export default FeaturesSection;