import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

// Import styles
import './Loading.scss';

export default () => {
  return (
    <>
      <div className='loading'>
        <Box sx={{ width: '100%' }}>
          <LinearProgress color="inherit" style={{height: '0.15rem'}} />
        </Box>
      </div>
    </>
  );
}