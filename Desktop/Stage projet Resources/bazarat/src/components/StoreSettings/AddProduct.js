import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function AddProduct({}) {
  const [image, setImage] = React.useState(null);
  const [productName, setProductName] = React.useState('Enter Product Name');
  const [description, setDescription] = React.useState('Enter Product Description');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    

    // Add your logic to handle the submission of the new item
    const newItem = {
      image,
      productName,
      description,
      price,
      category,
    };

    console.log('New Item:', newItem);

   
  };

  const handleReset = () => {
     // Reset the form fields
     setImage(null);
     setProductName('Enter Product Name');
     setDescription('Enter Product Description');
     setPrice('');
     setCategory('');
    console.log("reset");
  };
  return (
    <Box style={{ padding: '50px 0 0 0 ' }} flex={4} p={2} display="flex" justifyContent="center" alignItems="center">
                    
    

    
      <Card  sx={{ maxWidth: 400 }}>
      

        <form onSubmit={handleSubmit}>
          {image ? (
            <CardMedia component="img" height="300" image={image} alt="Selected Image" />
          ) : (
            
<label htmlFor="image-upload">
            <input 
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none'  }}
            />
            <Button variant="contained" component="span" color="primary">
              Upload Image
            </Button>
          </label>            
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product Name:
              <input
                type="text"
                value={productName}
                onChange={handleProductNameChange}
                style={{
                  width: '100%',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  border: 'none',
                  outline: 'none',
                }}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description:
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                style={{ width: '100%', minHeight: '100px', border: 'none', outline: 'none' }}
              />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price:
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                style={{ width: '100%', fontSize: '1rem', border: 'none', outline: 'none' }}
              />
            </Typography>
            <FormControl style={{ width: '100%', marginTop: '8px' }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                value={category}
                onChange={handleCategoryChange}
                style={{ width: '100%' }}
              >
                <MenuItem value="Category 1">Category 1</MenuItem>
                <MenuItem value="Category 2">Category 2</MenuItem>
                <MenuItem value="Category 3">Category 3</MenuItem>
                <MenuItem value="Category 4">Category 4</MenuItem>
                <MenuItem value="Category 5">Category 5</MenuItem>
                <MenuItem value="Category 6">Category 6</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
             
                <Button variant="contained" color="error" onClick={handleReset}>
                 Reset
                </Button>
            
        
            <Button variant="contained" color="secondary" type="submit">
              Submit
             </Button>
            </CardActions>

        </form>
      </Card>
      </Box>
   
  );
}

export default AddProduct;