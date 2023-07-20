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



   

function HotItem() {

    const theme = useTheme();


  return (

    <Card sx={{ display: 'flex' }}>
    <Box  sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Item 1 
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Item Category
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
      image="https://manubhai.in/SocialMedia/post_artworks/TT-01-24Feb2023.jpg"
      alt="Item 1"
    />
  </Card>
  );
}
export default HotItem ;
