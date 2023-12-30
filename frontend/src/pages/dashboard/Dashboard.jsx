import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import Navigation from "../../components/Navigation";
import { NavLink, Outlet } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import Footer from "../../components/Footer";

const navItems =
    <>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/"><FaHome className="text-xl"></FaHome> Home</NavLink></li>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard/manage-teachers"><FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher> Manage Teachers</NavLink></li>
        <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard/manage-students"><PiStudentBold className="text-xl"></PiStudentBold> Manage Students</NavLink></li>
    </>

const Dashboard = () => {
    return (
        <Navigation
            navLinks={navItems}
            mainContent={
                <>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            }>
        </Navigation>
    );
};

export default Dashboard;
