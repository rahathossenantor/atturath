import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-center open-sans mt-3">
            <NavLink className="2xl:px-[25px] xl:px-[22px] lg:px-5 md:px-4 px-3 xl:py-[18px] lg:py-4 md:py-[15px] py-3 xl:mx-2 lg:mx-[6px] mx-1 rounded-2xl rounded-b-none bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/">WELCOME</NavLink>
            <NavLink className="2xl:px-[25px] xl:px-[22px] lg:px-5 md:px-4 px-3 xl:py-[18px] lg:py-4 md:py-[15px] py-3 xl:mx-2 lg:mx-[6px] mx-1 rounded-2xl rounded-b-none bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/teachers">TEACHERS</NavLink>
            <NavLink className="2xl:px-[25px] xl:px-[22px] lg:px-5 md:px-4 px-3 xl:py-[18px] lg:py-4 md:py-[15px] py-3 xl:mx-2 lg:mx-[6px] mx-1 rounded-2xl rounded-b-none bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/contact">CONTACT</NavLink>
        </div>
    );
};

export default Navbar;
