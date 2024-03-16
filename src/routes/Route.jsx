import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'
import Products from '../pages/products/Products'
import Users from '../pages/Users/Users'
import AddProduct from '../pages/products/AddProduct'
import Calender from '../pages/calender/Calender'

const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/add-product',
                element: <AddProduct />
            },
            {
                path: '/calender',
                element: <Calender />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default myRoutes
