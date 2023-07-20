import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardMedia } from '@mui/material';

function StoreCouvImg() {
  return (
   
        <Box display="flex" justifyContent="center" sx={{ bgcolor: '#cfe8fc', width : '63vw' , height: '40vh' }} >
        <CardMedia  sx={{  width : '100%' , height: '100%' }}
      component="img"
      image="https://img.freepik.com/psd-gratuit/modele-couverture-facebook-super-vente-black-friday_106176-1538.jpg?w=1380&t=st=1689127811~exp=1689128411~hmac=e5b39a6db88a6c83370a5391c147f79e89aef183a2d25d30792085b1fb38b391"
      
    />
  

        </Box>
        
      
  
  )
}

export default StoreCouvImg