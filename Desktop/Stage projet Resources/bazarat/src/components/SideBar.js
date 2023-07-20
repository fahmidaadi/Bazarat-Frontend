import React from 'react';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { ModeNight } from '@mui/icons-material';
import { Switch } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import HotItem from './Cards/Item';

function SideBar({ showContent, onButtonClick }) {

  
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        {showContent ? (
          <React.Fragment>
            <List>
              <ListItem disablePadding>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemButton component="a">
                    <ListItemIcon>
                      <HomeRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding>
                <Link to="" style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemButton onClick={() => onButtonClick('AddCategory')} component="a">
                    <ListItemIcon>
                      <AddBusinessRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Category" />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding>
                <Link to="" style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemButton onClick={() => onButtonClick('AddProduct')} component="a">
                    <ListItemIcon>
                      <AddCircleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Product" />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding>
                <Link to="" style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemButton component="a">
                    <ListItemIcon>
                      <SettingsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding>
                <Link to="" style={{ textDecoration: 'none', color: 'black' }}>
                  <ListItemButton onClick={() => onButtonClick('StoreUI')} component="a">
                    <ListItemIcon>
                      <ColorLensRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Store UI" />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ModeNight />
                  </ListItemIcon>
                  <Switch defaultChecked />
                </ListItemButton>
              </ListItem>
            </List>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography fontSize={30} textAlign="center">
              Hot Products
            </Typography>

            <Box p='20px 0 0 0' display="flex" justifyContent="center">
              <IconButton>
                <ArrowUpwardRoundedIcon />
              </IconButton>
            </Box>

            <Grid>
              {Array.from(Array(3)).map((_, index) => (
                <Grid padding="10px 0" key={index}>
                  <HotItem />
                </Grid>
              ))}
            </Grid>

            <Box display="flex" justifyContent="center">
              <IconButton>
                <ArrowDownwardRoundedIcon />
              </IconButton>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}

export default SideBar;
