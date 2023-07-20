import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import CategoryBar from '../CategoryBar';
import MainAppBar from '../MainAppBar';


function StoreUiSettings() {
  const [navColor, setNavColor] = useState(blue[500]);
  const [categoryColor, setCategoryColor] = useState(blue [500]);

  const handleNavColorChange = (event) => {
    setNavColor(event.target.value);
  };

  const handleCategoryColorChange = (event) => {
    setCategoryColor(event.target.value);
  };

  const handleSubmit = () => {
    // Apply the color settings to the CategoryBar component
    console.log(navColor, categoryColor);
    setNavColor(navColor);
    setCategoryColor(categoryColor);
  };

  return (
    <Box flex={4} p={2}>
      <form onSubmit={handleSubmit}>

      <Box mb={5 }  >
        <Typography style={{ margin: '15px 0 0 0 ' }}  variant="subtitle1">Navigation Bar Color:</Typography>
        <input 
          type="color"
          value={navColor}
          onChange={handleNavColorChange}
          style={{ margin: '15px 0 0 0 ' }}        />
      </Box>

      <MainAppBar color={navColor} />

      <Box mb={5}>
        <Typography  style={{ margin: '20px 0 0 0 ' }} variant="subtitle1">Category Bar Color:</Typography>
        <input style={{ margin: '15px 0 0 0 ' }}
          type="color"
          value={categoryColor}
          onChange={handleCategoryColorChange}
          
        />
      </Box>

      <CategoryBar color={categoryColor} />

      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2}}>
          Apply changes
        </Button>
        </form>
    </Box>
  );
}

export default StoreUiSettings;
