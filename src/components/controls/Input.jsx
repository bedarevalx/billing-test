import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const Input = ({ label, name, isLoading, defaultValue, error }) => {
  return (
    <Grid item xs={12}>
      <TextField
        defaultValue={defaultValue}
        disabled={isLoading}
        error={error}
        name={name}
        required
        fullWidth
        id={name}
        label={label}
        helperText={error ? 'Поле обязательно для заполнения' : ''}
      />
    </Grid>
  );
};

export default Input;
