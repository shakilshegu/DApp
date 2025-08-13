import React from 'react';
import { Card, CardContent, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledCard = styled(Card)(({  }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  padding: 0
}));

const IconContainer = styled('div')(({  }) => ({
  width: '30px',
  height: '30px',
  borderRadius: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.10)',
  backdropFilter: 'blur(2px)',
  boxShadow: 'inset 0px -2px 2px 32px rgba(255, 255, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const FeatureTitle = styled(Typography)(({  }) => ({
  fontFamily: 'Blanc Groove, serif',
  fontSize: '14px',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '8px'
}));

const FeatureDescription = styled(Typography)(({  }) => ({
  fontFamily: 'Urbanist, sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '16px',
  color: '#d3d3d6'
}));

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <CardContent className="p-0">
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconContainer>
              {icon}
            </IconContainer>
            <FeatureTitle>{title}</FeatureTitle>
          </Stack>
          <FeatureDescription>
            {description}
          </FeatureDescription>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default FeatureCard;