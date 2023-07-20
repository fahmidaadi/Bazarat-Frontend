import { Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import Store from './Stores/Store'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';


function RightBar() {
  return (
    
    <Box  flex={1} p={2} sx={{display: {xs:"none" , sm: "block"}}}  >
      <Box  position='fixed' >
        <Typography fontSize={30} textAlign="center">
          Hot Stores
        </Typography>

        <Box p='20px 0 0 0' display="flex" justifyContent="center">
        <IconButton  >
        <ArrowUpwardRoundedIcon />
        </IconButton>
        </Box>
        
        <Grid >
  {Array.from(Array(3)).map((_, index) => (
    <Grid padding="10px 0">
      <Store/>
    </Grid>
     ))}
  
     </Grid>

     <Box display="flex" justifyContent="center">
     <IconButton >
     <ArrowDownwardRoundedIcon/>
     </IconButton>
     </Box>

      </Box>
      </Box>
      
  )
}

export default RightBar