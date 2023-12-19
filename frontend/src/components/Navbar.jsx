import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="border text-center">
            {
                ["welcome", "teachers", "contact"].map((txt, idx) => 
                <Link key={idx}><button className="btn mx-2 bg-[#85B719] text-white text-lg uppercase">{txt}</button></Link>)
            }
        </div>
    );
};

export default Navbar;
