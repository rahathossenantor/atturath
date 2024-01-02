import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";
import useStudentsData from "../../hooks/useStudentsData";
import { Link } from "react-router-dom";

const ManageStudents = () => {
    const { data: students } = useStudentsData();

    const handleDelete = (_id) => {
        console.log(_id);
    };

    return (
        <>
            <PageTitle title="Manage Students"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10 raleway">
                <div className="overflow-x-auto my-5">
                    <table className="table">
                        {
                            students.map(student => <TableData key={student._id} tableData={student} path="student" deletorFn={handleDelete}></TableData>)
                        }
                    </table>
                </div>
                <div className="flex justify-between gap-5">
                    {
                        (students.length > 5) ?
                            <div className="join grid grid-cols-2">
                                <button className="join-item btn btn-outline">Previous</button>
                                <button className="join-item btn btn-outline">Next</button>
                            </div> : ""
                    }
                    <Link to="/dashboard/add-student">
                        <button className="btn btn-outline">Add Student</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ManageStudents;
