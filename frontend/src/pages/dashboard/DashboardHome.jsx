import PageTitle from "../../components/dashboard/PageTitle";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    return (
        <>
            <PageTitle title="Manage Dashboard"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10">
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5 raleway">
                    <Link to="/dashboard/add-student"><button className="w-full py-5 rounded-xl text-[19px] font-semibold text-white bg-red-500">Admit New Student</button></Link>
                    <Link to="/dashboard/add-teacher"><button className="w-full py-5 rounded-xl text-[19px] font-semibold text-white bg-green-500">Add New Teacher</button></Link>
                    <Link to="/dashboard/add-course"><button className="w-full py-5 rounded-xl text-[19px] font-semibold text-white bg-yellow-500">Add New Course</button></Link>
                    <Link to="/"><button className="w-full py-5 rounded-xl text-[19px] font-semibold text-white bg-blue-500">Go To Home</button></Link>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
