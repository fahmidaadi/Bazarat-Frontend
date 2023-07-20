  import { Box, createTheme } from '@mui/system'
  import * as React from 'react';
  import CategoryBar from './CategoryBar';
  import ItemCard from './Cards/ItemCard';
  import { Grid, IconButton, Popper, Stack } from '@mui/material';
  import useScrollTrigger from '@mui/material/useScrollTrigger';
  import PropTypes from 'prop-types';
  import StoreCouvImg from './StoreCouvImg';
  import StoreProfImg from './StoreProfImg';
  import StoreName from './StoreName';
  import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
  import { useState } from 'react';



 
  

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };


  function Feed({showStoreComponents}) {
    const [selectedComponent, setSelectedComponent] = useState('');

    const handleButtonClick = (componentName) => {
      setSelectedComponent(componentName);
    };
    return (
      
      <Box flex={4} p={1} >

        {showStoreComponents && 
        <>
  <StoreCouvImg/>
  <StoreProfImg/>
  <StoreName/>
  <CategoryBar />
  </>
}

            

        <Grid p={5} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {Array.from(Array(6)).map((_, index) => (
      <Grid item xs={2} sm={4} md={4} key={index}>
        <ItemCard/>
      </Grid>
    ))}
    
  </Grid>
  <Box  display="flex" justifyContent="center">
  <IconButton >
  <ExpandMoreRoundedIcon/>
  </IconButton>
  </Box>
      </Box>
      
    )
  }

  export default Feed;
