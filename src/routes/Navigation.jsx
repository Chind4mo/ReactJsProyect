import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { HomePage, CheckOut , Intermedio , Barato } from '../Pages'
import HomePage from '../Pages/HomePage/HomePage'
import  Intermedio  from '../Pages/Intermedio/Intermedio';
import  Barato  from '../Pages/Barato/Barato';
import  CheckOut  from '../Pages/CheckOut/CheckOut';
import ItemDetail from '../components/ItemDetail/index'
import Caros from '../Pages/Caros/Caros';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/product/:idProduct',
        element: <ItemDetail />
    },
    {
        path: '/Checkout',
        element: <CheckOut />
    },
    {
        path: '/Intermedio',
        element: <Intermedio />
    },
    {
        path: '/Barato',
        element: <Barato/>
    },
    {
        path: '/Caros',
        element: <Caros/>
    },
])

const Navigation = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default Navigation;