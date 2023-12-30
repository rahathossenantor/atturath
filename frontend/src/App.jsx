import { FaChalkboardTeacher, FaHome } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const navItems =
  <>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/"><FaHome className="text-xl"></FaHome> Home</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard"><MdOutlineSpaceDashboard className="text-xl"></MdOutlineSpaceDashboard> Dashboard</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/teachers"><FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher> Teachers</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/students"><PiStudentBold className="text-xl"></PiStudentBold> Students</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/contact"><FaRegEnvelope className="text-xl"></FaRegEnvelope> Contact</NavLink></li>
  </>

const App = () => {
  return (
    <div className="app">
      {/* <NavigationBar></NavigationBar> */}

      <Navigation navLinks={navItems} mainContent={
        <>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      }></Navigation>

    </div>
  );
};

export default App;
