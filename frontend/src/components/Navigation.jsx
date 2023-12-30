import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import PropTypes from "prop-types";

const Navigation = ({ navLinks, mainContent }) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="bg-white sticky z-10 top-0 border">
                    <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                        <div className="navbar w-full p-0 justify-between">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex gap-2">
                                <img src={logo1} alt="logo" className="w-16" />
                                <img src={logo2} alt="logo" className="w-24" />
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal p-0 raleway">
                                    {/* Navbar menu content */}
                                    {navLinks}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main content */}
                {mainContent}
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-base-200">
                    {/* Sidebar content */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

Navigation.propTypes = {
    navLinks: PropTypes.node.isRequired,
    mainContent: PropTypes.node.isRequired
};

export default Navigation;
