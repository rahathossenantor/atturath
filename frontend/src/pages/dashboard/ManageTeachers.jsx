import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";
import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

const ManageTeachers = () => {
    const { data: teachers } = useData("teachers");

    const handleDelete = (_id) => {
        console.log(_id);
    };

    return (
        <>
            <PageTitle title="Manage Teachers"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10 raleway">
                <div className="overflow-x-auto my-5">
                    <table className="table">
                        {
                            teachers.length != 0 &&
                            teachers.slice(0, 5).map(teacher =>
                                <TableData
                                    key={teacher._id}
                                    tableData={teacher}
                                    path="teacher"
                                    deletorFn={handleDelete}>
                                </TableData>
                            )
                        }
                    </table>
                </div>
                <div className="flex justify-between gap-5">
                    {
                        (teachers.length > 5) ?
                            <div className="join grid grid-cols-2">
                                <button className="join-item btn btn-outline">Previous</button>
                                <button className="join-item btn btn-outline">Next</button>
                            </div> : ""
                    }
                    <Link to="/dashboard/add-teacher">
                        <button className="btn btn-outline">Add Teacher</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ManageTeachers;
