import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Update from "../pages/Update.jsx";
import Details from "../pages/Details.jsx";
import Login from "../components/authentication/Login.jsx";
import Registration from "../components/authentication/Registration.jsx";
import Private from "../components/authentication/Private.jsx";
import Users from "../components/users/Users.jsx";

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
                path:"/update/:id",
                element: <Private><Update/></Private>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },{
                path:"/details/:id",
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                element: <Details/>,
            },{
                path:"/login",
                element: <Login></Login>
            },{
                path: "/register",
                element: <Registration></Registration>
            },{
                path: "/users",
                element: <Private><Users></Users></Private>
            }
        ]
    },


]);
export default router;