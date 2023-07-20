import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import { Link } from 'react-router-dom';
import MainAppBar from '../components/MainAppBar';
import Footer from '../components/Footer';
import './LandingPage.css';
import { Stack } from '@mui/material';
import SideBar from '../components/SideBar';
import Feed from '../components/Feed';
import RightBar from '../components/RightBar';

const LandingPage = () => {
    return (
        <>
            <MainAppBar showUserProfileButton={false} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar showContent={false}/>
            <Feed showStoreComponents={false}/>
            <RightBar/>
            </Stack>
            <Footer/>
        </>
    );
};

export default LandingPage;
