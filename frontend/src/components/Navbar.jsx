import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-center open-sans">
            <NavLink className="px-[25px] py-[19px] rounded-2xl rounded-b-none mx-2 text-[17px] bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/">WELCOME</NavLink>
            <NavLink className="px-[25px] py-[19px] rounded-2xl rounded-b-none mx-2 text-[17px] bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/teachers">TEACHERS</NavLink>
            <NavLink className="px-[25px] py-[19px] rounded-2xl rounded-b-none mx-2 text-[17px] bg-[#85B719] text-white hover:bg-white hover:text-[#85B719] inline-block" to="/contact">CONTACT</NavLink>
        </div>
    );
};

export default Navbar;
