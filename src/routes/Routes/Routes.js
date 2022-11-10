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
import MyReviews from '../../pages/Reviews/MyReviews/MyReviews';
import UpdateReviews from '../../pages/Reviews/UpdateReviews/UpdateReviews';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                loader: ({ params }) => fetch(`https://graphics-service-app-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/reviews/:id/update',
                element: <PrivateRoutes><UpdateReviews></UpdateReviews></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://graphics-service-app-server.vercel.app/reviews/${params.id}`)
            }

        ]
    }
])