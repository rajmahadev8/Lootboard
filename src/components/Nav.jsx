import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="primary"  sx={{ padding:'10px',display:'flex', justifyContent:'center', position:'relative', alignItems:'center' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          LOOTBOARD
        </Typography>
       
      </AppBar>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, display:'flex', alignItems:'center' }}>
        <Toolbar>
          copyright &#169; Santvani	
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
