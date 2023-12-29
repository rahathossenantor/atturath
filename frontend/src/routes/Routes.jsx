import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Teachers from "../pages/Teachers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/teachers",
                element: <Teachers></Teachers>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
]);

export default router;
