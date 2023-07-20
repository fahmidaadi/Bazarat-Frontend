import { Input } from '@mui/material';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

function AddCategory() {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
  
    // Add your logic to handle the submission of the new category
    console.log('New Category:', categoryName);
    // Reset the category name field
    setCategoryName('');
  };

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <Box style={{ padding: '50px 0 0 0' }} flex={4} p={2} display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Type new Category Name"
          value={categoryName}
          onChange={handleCategoryNameChange}
          required
          sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddCategory;
  