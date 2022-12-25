import React from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const CustomAlert = ({
  isSucceeded,
  successText,
  errorText,
  alertVisibility,
  setAlertVisibility,
}) => {
  return (
    <Collapse
      in={alertVisibility}
      addEndListener={() => {
        setTimeout(() => {
          setAlertVisibility(false);
        }, 3000);
      }}>
      <Alert severity={isSucceeded ? 'success' : 'error'}>
        {isSucceeded ? successText : errorText}
      </Alert>
    </Collapse>
  );
};

export default CustomAlert;
