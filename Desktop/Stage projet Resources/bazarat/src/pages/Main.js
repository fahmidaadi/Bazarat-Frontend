import React from "react";
import  {Box ,Container , Stack} from "@mui/material";

import MainAppBar from '../components/MainAppBar'
import Footer from '../components/Footer'
import RightBar from '../components/RightBar'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import { useState } from "react";
import StoreUiSettings from "../components/StoreSettings/StoreUiSettings";
import AddProduct from "../components/StoreSettings/AddProduct";
import AddCategory from "../components/StoreSettings/AddCategory";


const Main = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleButtonClick = (componentName) => {
      setSelectedComponent(componentName);
    };

    return (
        <Box>
            <MainAppBar showUserProfileButton={true}/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <SideBar showContent={true} onButtonClick={handleButtonClick}/>
            {selectedComponent === 'StoreUI' ? (
        <StoreUiSettings />
      ) : selectedComponent === 'AddProduct' ? (
        <AddProduct />
      ) : selectedComponent === 'AddCategory' ? (
        <AddCategory />
      ) : (
        <Feed showStoreComponents={true} />
      )}
           
            <RightBar/>
            </Stack>
            <Footer/>
        </Box>
    );
};

export default Main;