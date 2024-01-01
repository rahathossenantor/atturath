import { Link } from "react-router-dom";
import PageTitle from "../../components/dashboard/PageTitle";
import Student from "../../components/dashboard/Student";

const ManageStudents = () => {
    return (
        <>
            <PageTitle title="Manage Students"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10 raleway">
                <div className="overflow-x-auto my-5">
                    <table className="table">
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                        <Student></Student>
                    </table>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="join grid grid-cols-2">
                        <button className="join-item btn btn-outline">Previous</button>
                        <button className="join-item btn btn-outline">Next</button>
                    </div>
                    <Link to="/dashboard/add-student">
                        <button className="btn btn-outline">Add Student</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ManageStudents;
