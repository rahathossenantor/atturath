import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Teachers from "../pages/Teachers";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageTeachers from "../pages/dashboard/ManageTeachers";
import DashboardHome from "../pages/dashboard/DashboardHome";
import ManageStudents from "../pages/dashboard/ManageStudents";
import AddStudent from "../pages/dashboard/AddStudent";

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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "/dashboard/manage-teachers",
                element: <ManageTeachers></ManageTeachers>
            },
            {
                path: "/dashboard/manage-students",
                element: <ManageStudents></ManageStudents>
            },
            {
                path: "/dashboard/add-student",
                element: <AddStudent></AddStudent>
            }
        ]
    }
]);

export default router;
