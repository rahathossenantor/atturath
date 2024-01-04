import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import useData from "../../hooks/useData";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageStudents = () => {
    const { data: students, loading, refetch } = useData("students");
    const axiosSecure = useAxiosSecure();

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/students/${_id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Student has been deleted.`,
                                icon: "success",
                                timer: 2000
                            });
                        } else {
                            Swal.fire({
                                title: "Failed!",
                                text: `Something went wrong!`,
                                icon: "error",
                                timer: 2000
                            });
                        }
                    })
            }
        });
    };

    return (
        <>
            <PageTitle title="Manage Students"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10 raleway">
                <div className="overflow-x-auto">
                    <table className="table">
                        {
                            students.length != 0 &&
                            students.slice(0, 5).map(student =>
                                <TableData
                                    key={student._id}
                                    tableData={student}
                                    path="student"
                                    deletorFn={handleDelete}>
                                </TableData>)
                        }
                    </table>
                    {loading && <Loader />}
                    {(!students.length && !loading) && <NoDataFound />}
                </div>
                <div className="flex justify-between gap-5 mt-10">
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
