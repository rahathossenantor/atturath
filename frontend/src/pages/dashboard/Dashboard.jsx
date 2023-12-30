import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import Navigation from "../../components/Navigation";
import { NavLink, Outlet } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";

const navItems =
    <>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard/manage-teachers"><FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher> Manage Teachers</NavLink></li>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard/manage-students"><PiStudentBold className="text-[21px]"></PiStudentBold> Manage Students</NavLink></li>
    </>

const Dashboard = () => {
    return (
        <Navigation
            navLinks={navItems}
            mainContent={
                <Outlet></Outlet>
            }>
        </Navigation>
    );
};

export default Dashboard;
