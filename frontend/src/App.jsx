import { FaChalkboardTeacher, FaEnvelope, FaHome, FaUtensils } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
// import NavigationBar from "./components/navigationBar/NavigationBar";

const navItems =
  <>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/dashboard"><FaUtensils></FaUtensils> Dashboard</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/teachers"><FaChalkboardTeacher className="text-xl"></FaChalkboardTeacher> Teachers</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/students"><PiStudentBold className="text-[21px]"></PiStudentBold> Students</NavLink></li>
    <li className="text-[17px] hover:text-[#06A8F0] rounded-lg"><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
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
