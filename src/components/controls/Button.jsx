import React from 'react';
import Grid from '@mui/material/Grid';
import { Button as ButtonMUI } from '@mui/material';

const Button = ({ xs, sm, sx, type, variant, label, handleClick }) => {
  return (
    <Grid item xs={xs} sm={sm}>
      <ButtonMUI
        type={type}
        onClick={handleClick}
        fullWidth
        variant={variant}
        sx={sx}>
        {label}
      </ButtonMUI>
    </Grid>
  );
};

export default Button;
