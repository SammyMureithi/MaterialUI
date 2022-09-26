import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Wrong Password</Alert>
      <Alert severity="warning">Aleady Logged In</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert variant="outlined" severity="success">Product added Successfully</Alert>
    </Stack>
  );
}
