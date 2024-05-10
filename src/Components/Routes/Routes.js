import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ShowAllServices from "../Home/Services/ShowAllServices";
import Details from "../Details/Details";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AddReviews from "../Reviews/AddReviews";
import MyReviews from "../Reviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/services',
                element: <PrivateRoutes><ShowAllServices></ShowAllServices></PrivateRoutes>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addReview/:title',
                element: <PrivateRoutes><AddReviews></AddReviews></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/addReview/${params.title}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            }

        ],
    },
    {
        path: '/register',
        element: <Register></Register>

    },
    {
        path: '/login',
        element: <Login></Login>
    },

])