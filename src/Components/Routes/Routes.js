import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ShowAllServices from "../Home/Services/ShowAllServices";

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
                element: <ShowAllServices></ShowAllServices>
            }

        ]


    }
])