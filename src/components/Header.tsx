import React from 'react';
import { AppBar, Toolbar, Button, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import VetricLogoIcon from './icons/VetricLogoIcon';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const StyledAppBar = styled(AppBar)(({  }) => ({
  backgroundColor: '#000000 !important',
  backdropFilter: 'blur(10.9px)',
  borderBottom: '1px solid #212429',
  boxShadow: 'none'
}));

const NavButton = styled(Button)(({  }) => ({
  color: '#a6a7ad',
  fontSize: '14px',
  fontWeight: 400,
  textTransform: 'none',
  '&:hover': {
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
}));

const ConnectWalletButton = styled(Button)(({  }) => ({
  backgroundColor: '#96ea63',
  color: '#11111c',
  fontSize: '14px',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: '#7bc94a'
  }
}));

const LanguageButton = styled(IconButton)(({  }) => ({
  color: '#a6a7ad',
  borderRadius: '8px',
  border: '1px solid #4d4f5c',
  padding: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  }
}));

const ToolbarContainer = styled(Toolbar)({
  maxWidth: '1280px',
  margin: '0 auto',
  width: '100%',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between'
});

const Header: React.FC = () => {
  const handleConnectWallet = () => {
    // Add your wallet connection logic here
    console.log('Connecting wallet...');
  };

  return (
    <StyledAppBar position="sticky" elevation={0} color="transparent">
      <ToolbarContainer className="px-8 lg:px-40">
        <Stack direction="row" alignItems="center" spacing={1} className="mr-auto">
          <VetricLogoIcon width={24} height={24} color="#96ea63" />
          <span className="text-white font-semibold text-lg ml-2">D-App</span>
        </Stack>
        
        <Stack direction="row" spacing={4} className="mx-auto">
          <NavButton>Home</NavButton>
          <NavButton>Pricing</NavButton>
          <NavButton>Features</NavButton>
          <NavButton>Contact</NavButton>
        </Stack>
        
        <Stack direction="row" alignItems="center" spacing={2}>
          <ConnectWalletButton onClick={handleConnectWallet}>
            <AccountBalanceWalletIcon fontSize="small" />
            Connect Wallet
          </ConnectWalletButton>
          <LanguageButton>
            <LanguageIcon fontSize="small" />
            <KeyboardArrowDownIcon fontSize="small" />
          </LanguageButton>
        </Stack>
      </ToolbarContainer>
    </StyledAppBar>
  );
};

export default Header;