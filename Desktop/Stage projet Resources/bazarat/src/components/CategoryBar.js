import { AppBar, Box, Grid, Toolbar } from '@mui/material';
import * as React from 'react';

function CategoryBar({ color }) {
  return (
    <Box position="static">
      <AppBar position="static" style={{ backgroundColor: color }}>
        <Toolbar variant="dense">
          <Grid
            columnGap={5}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <typography variant="h6" color="inherit" component="div">
              Category 1
            </typography>
            <typography variant="h6" color="inherit" component="div">
              Category 2
            </typography>
            <typography variant="h6" color="inherit" component="div">
              Category 3
            </typography>
            <typography variant="h6" color="inherit" component="div">
              Category 4
            </typography>
            <typography variant="h6" color="inherit" component="div">
              Category 5
            </typography>
            <typography variant="h6" color="inherit" component="div">
              Category 6
            </typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CategoryBar;
