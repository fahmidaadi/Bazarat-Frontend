import React from 'react';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import AboutUS from './pages/AboutUs';
import Main from './pages/Main';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register/>,
    }, {
        path: "",
        element: <LandingPage/>,
    }, {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/about_us",
        element: <AboutUS/>,
    },
    {
        path: "/main",
        element: <Main/>,
    },
]);

const App = () => {


    return (
        <RouterProvider router={router}/>
    );
};

export default App;
