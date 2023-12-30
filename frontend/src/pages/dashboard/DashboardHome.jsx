import PageTitle from "../../components/dashboard/PageTitle";

const DashboardHome = () => {
    return (
        <>
            <PageTitle title="Manage Dashboard"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10">
                <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-5 raleway">
                    <button className="w-full py-5 rounded-xl text-lg text-white bg-green-500">Admit New Student</button>
                    <button className="w-full py-5 rounded-xl text-lg text-white bg-red-500">Add New Teacher</button>
                    <button className="w-full py-5 rounded-xl text-lg text-white bg-yellow-500">Add New Course</button>
                    <button className="w-full py-5 rounded-xl text-lg text-white bg-blue-500">Go to Home</button>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
