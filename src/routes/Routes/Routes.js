import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import HomeItems from '../../pages/Home/HomeItems/HomeItems';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }

        ]
    }
])