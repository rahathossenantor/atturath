import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="flex items-center justify-between pt-5">
                <div className="text-white">
                    <h2 className="xl:text-6xl lg:text-5xl md:text-5xl text-4xl titan-one">Atturath</h2>
                    <h4 className="xl:text-2xl lg:text-[22px] md:text-[21px] text-[21px] patrick-hand txt-shadow">KINDERGARDEN</h4>
                </div>
                <div className="xl:block lg:block md:block hidden text-right">
                    <ul className="raleway text-white">
                        <li><h4 className="xl:text-2xl lg:text-[22px] md:text-[21px] text-[21px] patrick-hand mb-1 txt-shadow">CONTACT</h4></li>
                        <li className="flex items-center gap-2"><FaPhoneAlt></FaPhoneAlt> <a href="">+1-202-555-0163</a></li>
                        <li className="flex items-center gap-2"><FaLocationDot></FaLocationDot> <span>843 San Carlos St.</span></li>
                    </ul>
                </div>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
