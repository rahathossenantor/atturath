import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 h-screen flex justify-center items-center">
            <div className="text-center raleway">
                <div>
                    <img className="inline-block 2xl:w-3/6 xl:w-5/12 lg:w-3/6 md:w-4/6 w-full" src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="page-not-found" />
                </div>
                <div>
                    <h3 className="text-[35px] my-3">We Are Sorry, Page Not Found!</h3>
                    <p className="mb-5">Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, <br />
                        moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>
                    <div className="flex items-center justify-center">
                        <Link to="/"><button className="cursor-pointer text-lg px-5 py-[10px] rounded-lg bg-[#68E2FD]">Go back &nbsp; <FaArrowRight className="inline-block"></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
