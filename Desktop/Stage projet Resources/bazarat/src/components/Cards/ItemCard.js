import { Box } from '@mui/system'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

function ItemCard() {
  return (
    

      
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3db71cefac174197af42ac310115b522_9366/Run_Falcon_2.0_Running_Shoes_Black_FY5943_01_standard.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" title="Like">
      <FavoriteBorderRoundedIcon/>
      </Button>
        <Button size="small" title="Add to Cart">
          <ShoppingCartRoundedIcon/>
          </Button>
        <Button size="small" title="Save">
      <BookmarkBorderRoundedIcon/>
      </Button> 
      <Button size="small" title="More Details">
          <MoreHorizRoundedIcon/>
        </Button>
      </CardActions>
    </Card>

    
  )
}

export default ItemCard













