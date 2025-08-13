import React from 'react';
import { Typography, Container, Stack, Card, CardContent, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const ShowcaseContainer = styled('section')(({ theme }) => ({
  padding: '80px 0',
  backgroundColor: '#07070a'
}));

const ShowcaseTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: '48px',
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '16px'
}));

const ShowcaseSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  color: '#a4a7ae',
  textAlign: 'center',
  marginBottom: '53px'
}));

const BentoGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '32px',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'auto auto',
    '& > :first-of-type': {
      gridColumn: '1 / 2',
      gridRow: '1 / 3'
    },
    '& > :nth-of-type(2)': {
      gridColumn: '2 / 3',
      gridRow: '1 / 2'
    },
    '& > :nth-of-type(3)': {
      gridColumn: '2 / 3',
      gridRow: '2 / 3'
    }
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    '& > :first-of-type': {
      gridColumn: '1 / 2',
      gridRow: '1 / 3'
    },
    '& > :nth-of-type(2)': {
      gridColumn: '2 / 3',
      gridRow: '1 / 2'
    },
    '& > :nth-of-type(3)': {
      gridColumn: '3 / 4',
      gridRow: '1 / 2'
    },
    '& > :nth-of-type(4)': {
      gridColumn: '2 / 4',
      gridRow: '2 / 3'
    }
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#0d0e14',
  border: '1px solid #212429',
  borderRadius: '16px',
  padding: '24px',
  minHeight: '300px'
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '20px',
  fontWeight: 700,
  lineHeight: '22.40px',
  color: '#ffffff',
  marginBottom: '16px'
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '15px',
  fontWeight: 400,
  color: '#a6a7ad',
  marginBottom: '24px'
}));

const CodeBlock = styled('pre')(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: '#737479',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: '16px',
  borderRadius: '8px',
  overflow: 'auto',
  margin: '16px 0'
}));

const TagGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '12px',
  marginTop: '16px'
}));

const TagChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  color: '#ffffff',
  fontSize: '12px',
  height: '32px',
  '&:hover': {
    backgroundColor: 'rgba(150, 234, 99, 0.1)'
  }
}));

const FeatureShowcase: React.FC = () => {
  const codeSnippet = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract MyToken is IERC20 {
    string public name = "MyToken";
    string public symbol = "MT";
    uint256 public override totalSupply;
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;`;

  const tags = [
    'Web 3.0 development', 'Growth',
    'APIs', 'Go-to-Market Solutions',
    'Easy-to-use interface', 'Scalable',
    'Fast Integrations', 'Accessibility'
  ];

  return (
    <ShowcaseContainer>
      <Container maxWidth="lg">
        <ShowcaseTitle>Explore Our Feature</ShowcaseTitle>
        <ShowcaseSubtitle>
          Discover the powerful features that make our platform stand out
        </ShowcaseSubtitle>
        
        <BentoGrid>
          {/* Developer APIs Card */}
          <FeatureCard>
            <CardContent className="p-0 h-full">
              <Stack spacing={2} className="h-full">
                <div>
                  <CardTitle>Powerful APIs for developers</CardTitle>
                  <CardDescription>Seamless Integration for your company</CardDescription>
                </div>
                <CodeBlock>{codeSnippet}</CodeBlock>
              </Stack>
            </CardContent>
          </FeatureCard>
          
          {/* Growing Teams Card */}
          <FeatureCard>
            <CardContent className="p-0 h-full">
              <Stack spacing={2} className="h-full justify-between">
                <div>
                  <CardTitle>For growing teams</CardTitle>
                  <CardDescription>Tailored support to give you progress</CardDescription>
                </div>
                <Stack direction="row" alignItems="center" spacing={1} 
                       className="bg-green-500/10 p-3 rounded-lg">
                  <GroupAddIcon sx={{ color: '#96ea63', fontSize: '16px' }} />
                  <Typography sx={{ color: '#cfd3da', fontSize: '12px' }}>
                    Invite user to this team
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </FeatureCard>
          
          {/* Blockchain Networks Card */}
          <FeatureCard>
            <CardContent className="p-0 h-full">
              <Stack spacing={2} className="h-full">
                <div>
                  <CardTitle>The best blockchains out there</CardTitle>
                  <CardDescription>Pioneering paths in decentralized solutions</CardDescription>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/images/blockchain-network.svg" 
                    alt="Blockchain network visualization with colorful nodes"
                    className="max-w-full h-auto"
                  />
                </div>
              </Stack>
            </CardContent>
          </FeatureCard>
          
          {/* Web 3.0 Development Card */}
          <FeatureCard>
            <CardContent className="p-0 h-full">
              <Stack spacing={2} className="h-full">
                <div>
                  <CardTitle>Web 3.0 development</CardTitle>
                  <CardDescription>Crafting tomorrow's digital landscape today</CardDescription>
                </div>
                <TagGrid>
                  {tags.map((tag, index) => (
                    <TagChip key={index} label={tag} size="small" />
                  ))}
                </TagGrid>
              </Stack>
            </CardContent>
          </FeatureCard>
        </BentoGrid>
      </Container>
    </ShowcaseContainer>
  );
};

export default FeatureShowcase;