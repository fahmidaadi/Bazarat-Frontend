import{Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Avatar, IconButton, InputBase } from '@mui/material';
import { Badge } from '@mui/base';
import {  LogoutRounded, MailRounded, ShoppingCartRounded } from '@mui/icons-material';
import SearchBar from './SearchBar';



function MainAppBar({showUserProfileButton , color }) {
 
  
   
    const Search  =  styled("div")(({theme})=>({
        backgroundColor:"white", 
        borderRadius : "10px", width:"40%" , 
    }))

    const ConnectionBox = styled(Box)(({theme}) =>({
      display: "flex",
  gap: "20px",
  alignItems: "center",
    }))
   
    const Icons  =  styled(Box)(({theme})=>({
       display  : "flex" , gap :"20px", alignItems : "center",
    }))

    const UserBox = styled(Box)(({theme}) =>({

        display  : "flex" , gap :"10px", alignItems : "center"

    }));

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open , setOpen] = useState(false);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
     
        <AppBar position="stick" style={{ backgroundColor :color}}>
            <Container maxWidth="xl">
                <Toolbar  disableGutters style={{display : 'flex' , justifyContent :'space-between'}}>
                  
                   <Link style={{textDecoration: 'none' , color : "white"}} to = "/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        BAZARAT
                    </Typography>
                   </Link>
                   
                   <SearchBar/> 
                  {showUserProfileButton ? ( 
                  <>
                  
                    <Icons>
                        <Badge badgeContent={3} >
                            <ShoppingCartRounded color='white'/>
                        </Badge>
                    </Icons>
                        <UserBox onClick = {e=>setOpen(true)}>
                        <Avatar sx={{width:30,height:30}} />
                        <Typography variant='span' >User Name</Typography>
                        </UserBox>
                        
                        </> 
                        ):(
                        <>
                        <ConnectionBox>
                          <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                           <Typography variant="body2">Login</Typography>
                             </Link>
                              <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography variant="body2">Register</Typography>
                           </Link>
                          <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                          <Typography variant="body2">About Us</Typography>
                             </Link>
                          </ConnectionBox>
                        </>
                        )}
                </Toolbar>
            </Container>

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SettingsRoundedIcon/>
          </ListItemIcon>
          <ListItemText>Profile Settings</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <ListItemIcon>
            <LogoutRounded/>
        </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
 
      </Menu>

        </AppBar>
        
    );
}
export default MainAppBar;