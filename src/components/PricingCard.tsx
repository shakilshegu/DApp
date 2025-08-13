import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const StyledCard = styled(Card)<{ isPopular?: boolean }>(({ theme, isPopular }) => ({
  backgroundColor: isPopular ? '#0d0e14' : 'rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(25.8px)',
  border: '0.5px solid #ffffff',
  borderRadius: '12px',
  padding: '20px',
  position: 'relative',
  minHeight: '423px',
  ...(isPopular && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '12px',
      background: 'linear-gradient(140.41deg, rgba(13,15,19,0) 23.39%, rgba(150,234,99,0.1) 109.08%)',
      zIndex: -1
    }
  })
}));

const PlanTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '8px'
}));

const PlanPrice = styled(Typography)(({ theme }) => ({
  fontFamily: 'Source Sans Pro, sans-serif',
  fontSize: '32px',
  fontWeight: 600,
  color: '#797c83',
  marginBottom: '16px'
}));

const PlanDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '18px',
  fontWeight: 400,
  color: '#a4a7ae',
  marginBottom: '24px'
}));

const PlanButton = styled(Button)<{ isPopular?: boolean }>(({ theme, isPopular }) => ({
  backgroundColor: isPopular ? '#96ea63' : 'transparent',
  color: isPopular ? '#1e2f14' : '#e8e9ea',
  border: isPopular ? 'none' : '1px solid rgba(255, 255, 255, 0.30)',
  borderRadius: '8px',
  padding: '12px 24px',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  width: '100%',
  marginBottom: '24px',
  '&:hover': {
    backgroundColor: isPopular ? '#7bc94a' : 'rgba(255, 255, 255, 0.05)'
  }
}));

const FeatureItem = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  marginBottom: '8px'
}));

const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  color: '#ffffff'
}));

const PopularChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#96ea63',
  color: '#0d0e14',
  fontSize: '13px',
  fontWeight: 400,
  height: '24px',
  position: 'absolute',
  top: '20px',
  right: '20px'
}));

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText
}) => {
  return (
    <StyledCard isPopular={isPopular}>
      {isPopular && <PopularChip label="Most popular" size="small" />}
      <CardContent className="p-0">
        <Stack spacing={2}>
          <div>
            <PlanTitle>{title}</PlanTitle>
            <PlanPrice>{price} {period}</PlanPrice>
            <PlanDescription>{description}</PlanDescription>
          </div>
          
          <PlanButton 
            isPopular={isPopular}
            endIcon={<ArrowForwardIcon />}
          >
            {buttonText}
          </PlanButton>
          
          <Stack spacing={1}>
            {features.map((feature, index) => (
              <FeatureItem key={index} direction="row" spacing={1}>
                <CheckIcon 
                  sx={{ 
                    color: '#96ea63', 
                    fontSize: '18px',
                    backgroundColor: '#e8e9ea',
                    borderRadius: '50%',
                    padding: '2px'
                  }} 
                />
                <FeatureText>{feature}</FeatureText>
              </FeatureItem>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default PricingCard;