import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import HomeItems from '../../pages/Home/HomeItems/HomeItems';
import Login from '../../pages/Login/Login';
import Blog from '../../pages/Blog/Blog';
import Signup from '../../pages/Signup/Signup';
import About from '../../pages/About/About';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import AddService from '../../pages/AddService/AddService';
import AllServices from '../../pages/Services/AllServices';
import ServiceDetails from '../../pages/Services/ServiceDetails';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeItems></HomeItems>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/services/:id/details',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },

        ]
    }
])