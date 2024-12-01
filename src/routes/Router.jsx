import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Update from "../pages/Update.jsx";
import Details from "../pages/Details.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element: <Home/>,
            },{
                path:"/add",
                element: <Add/>,
            },{
                path:"/update",
                element: <Update/>,
            },{
                path:"/details",
                element: <Details/>,
            }
        ]
    },
]);
export default router;