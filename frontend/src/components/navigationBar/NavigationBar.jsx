import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.jpg";
import "./NavigationBar.css";

const navLinks =
    <>
        <NavLink to="/"><li className="text-lg px-3 hover:text-[#06A8F0]">Home</li></NavLink>
        <NavLink to="/about"><li className="text-lg px-3 hover:text-[#06A8F0]">About Us</li></NavLink>
        <NavLink to="/teachers"><li className="text-lg px-3 hover:text-[#06A8F0]">Teachers</li></NavLink>
        <NavLink to="/students"><li className="text-lg px-3 hover:text-[#06A8F0]">Students</li></NavLink>
        <NavLink to="/contact"><li className="text-lg px-3 hover:text-[#06A8F0]">Contact</li></NavLink>
    </>

const logo =
    <>
        <img src={logo1} alt="logo" className="w-16" />
        <img src={logo2} alt="logo" className="w-24" />
    </>

const NavigationBar = () => {
    return (
        <div className="bg-white w-full sticky z-10 top-0 border">
            <div className="md:container md:mx-auto xl:px-0 lg:px-5 md:px-5 px-5">
                <div className="navbar p-0 md:justify-between">
                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[16px] raleway">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-row-reverse">
                        <div className="dropdown flex-1 text-right">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 raleway text-left">
                                {navLinks}
                            </ul>
                        </div>
                        <a href="/" className="xl:hidden lg:hidden md:hidden flex items-center justify-center gap-3">
                            {logo}
                        </a>
                    </div>
                    <div className="navbar-end 2xl:flex xl:flex lg:flex md:flex hidden">
                        <a href="/" className="flex items-center justify-center gap-3">
                            {logo}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
