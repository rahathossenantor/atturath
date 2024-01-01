import ManageTeachers from "../pages/dashboard/ManageTeachers";
import ManageStudents from "../pages/dashboard/ManageStudents";
import DashboardHome from "../pages/dashboard/DashboardHome";
import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../pages/dashboard/AddStudent";
import AddTeacher from "../pages/dashboard/AddTeacher";
import Dashboard from "../pages/dashboard/Dashboard";
import Teachers from "../pages/Teachers";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";

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
                path: "/dashboard/add-student",
                element: <AddStudent></AddStudent>
            },
            {
                path: "/dashboard/add-teacher",
                element: <AddTeacher></AddTeacher>
            },
            {
                path: "/dashboard/manage-students",
                element: <ManageStudents></ManageStudents>
            },
            {
                path: "/dashboard/manage-teachers",
                element: <ManageTeachers></ManageTeachers>
            }
        ]
    }
]);

export default router;
