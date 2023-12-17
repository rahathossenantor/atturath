import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="flex justify-between mt-5">
            <div>
                <h2 className="text-5xl titan-one">Atturath</h2>
                <h4 className="text-2xl patrick-hand">Kindergarden</h4>
            </div>
            <div className="text-right">
                <h4 className="text-2xl patrick-hand mb-2">CONTACT</h4>
                <ul className="raleway">
                    <li className="flex items-center gap-2"><FaPhoneAlt></FaPhoneAlt> <a href="">+1-202-555-0163</a></li>
                    <li className="flex items-center gap-2"><FaLocationDot></FaLocationDot> <span>843 San Carlos St.</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
