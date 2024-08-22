import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const ThemedButton: React.FC = () => {
  const theme = useTheme();

  return (
    <Button variant='contained' color='primary'>
      {theme.palette.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

export default ThemedButton;
