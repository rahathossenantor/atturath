import ManageTeachers from "../pages/dashboard/ManageTeachers";
import ManageStudents from "../pages/dashboard/ManageStudents";
import DashboardHome from "../pages/dashboard/DashboardHome";
import UpdateTeacher from "../pages/dashboard/UpdateTeacher";
import UpdateStudent from "../pages/dashboard/UpdateStudent";
import { createBrowserRouter } from "react-router-dom";
import AddStudent from "../pages/dashboard/AddStudent";
import AddTeacher from "../pages/dashboard/AddTeacher";
import Dashboard from "../pages/dashboard/Dashboard";
import Teachers from "../pages/Teachers";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import Register from "../pages/Register";

// const baseUrl = "https://atturath.vercel.app";
const baseUrl = "http://localhost:5000";

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
            },
            {
                path: "/register",
                element: <Register></Register>
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
                path: "/dashboard/add-teacher",
                element: <AddTeacher></AddTeacher>
            },
            {
                path: "/dashboard/add-student",
                element: <AddStudent></AddStudent>
            },
            {
                path: "/dashboard/update-teacher/:id",
                element: <UpdateTeacher></UpdateTeacher>,
                loader: ({ params }) => fetch(`${baseUrl}/teachers/${params.id}`)
            },
            {
                path: "/dashboard/update-student/:id",
                element: <UpdateStudent></UpdateStudent>,
                loader: ({ params }) => fetch(`${baseUrl}/students/${params.id}`)
            },
            {
                path: "/dashboard/manage-teachers",
                element: <ManageTeachers></ManageTeachers>
            },
            {
                path: "/dashboard/manage-students",
                element: <ManageStudents></ManageStudents>
            }
        ]
    }
]);

export default router;
