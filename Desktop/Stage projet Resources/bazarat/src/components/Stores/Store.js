import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StartRoundedIcon from '@mui/icons-material/StartRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';



   

function Store() {

    const theme = useTheme();


  return (

    <Card sx={{ display: 'flex' }}>
    <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Store 1
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Store Type
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
       
        <IconButton>
          < StartRoundedIcon/>
        </IconButton>

        <IconButton>
        <BookmarkBorderRoundedIcon/>
        </IconButton>

      </Box>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 120 }}
      image="https://media.istockphoto.com/id/912819604/vector/storefront-flat-design-e-commerce-icon.jpg?s=612x612&w=0&k=20&c=_x_QQJKHw_B9Z2HcbA2d1FH1U1JVaErOAp2ywgmmoTI="
      alt="Store 1"
    />
  </Card>
  );
}
export default Store ;
