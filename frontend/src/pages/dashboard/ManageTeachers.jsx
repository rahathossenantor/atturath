import Student from "../../components/Student";

import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import useData from "../../hooks/useData";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


// student's data
const students = [
    {
        "id": 1,
        "name": "John Doe",
        "score": 85,
        "percentage": 85,
        "grade": "A",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "score": 92,
        "percentage": 92,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "score": 78,
        "percentage": 78,
        "grade": "B",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        "id": 4,
        "name": "Alice Brown",
        "score": 95,
        "percentage": 95,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        "id": 5,
        "name": "Chris Davis",
        "score": 89,
        "percentage": 89,
        "grade": "A",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        "id": 6,
        "name": "Eva White",
        "score": 76,
        "percentage": 76,
        "grade": "C",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        "id": 7,
        "name": "Michael Black",
        "score": 84,
        "percentage": 84,
        "grade": "B",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        "id": 8,
        "name": "Sophia Green",
        "score": 91,
        "percentage": 91,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        "id": 9,
        "name": "David Wilson",
        "score": 79,
        "percentage": 79,
        "grade": "C+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        "id": 10,
        "name": "Olivia Hall",
        "score": 88,
        "percentage": 88,
        "grade": "B+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
        "id": 11,
        "name": "Mark Turner",
        "score": 87,
        "percentage": 87,
        "grade": "B+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        "id": 12,
        "name": "Emily Davis",
        "score": 93,
        "percentage": 93,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        "id": 13,
        "name": "Tom White",
        "score": 80,
        "percentage": 80,
        "grade": "B-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        "id": 14,
        "name": "Lily Harris",
        "score": 96,
        "percentage": 96,
        "grade": "A+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        "id": 15,
        "name": "Daniel Smith",
        "score": 82,
        "percentage": 82,
        "grade": "B",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        "id": 16,
        "name": "Ava Wilson",
        "score": 75,
        "percentage": 75,
        "grade": "C-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
        "id": 17,
        "name": "Justin Brown",
        "score": 88,
        "percentage": 88,
        "grade": "B+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        "id": 18,
        "name": "Mia Johnson",
        "score": 94,
        "percentage": 94,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        "id": 19,
        "name": "Ryan Green",
        "score": 81,
        "percentage": 81,
        "grade": "B-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        "id": 20,
        "name": "Isabella Turner",
        "score": 89,
        "percentage": 89,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/20.jpg"
    }
];
const classOne = students.filter(student => student.class === 1);


const ManageTeachers = () => {
    const { data: teachers, loading, refetch } = useData("teachers");
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
                axiosSecure.delete(`/teachers/${_id}`)
                    .then(res => {
                        if (res.data?.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Teacher has been deleted.`,
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
            <PageTitle title="Manage Teachers"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-10 raleway">
                {/* <div className="overflow-x-auto">
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
                    {loading && <Loader />}
                    {(!teachers.length && !loading) && <NoDataFound />}
                </div> */}

                <div className="mx-auto overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#FFFFFF0D]">
                                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                                    Student
                                </th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Level</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Subject</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Email</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Address</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classOne.map(student => <Student key={student.id} student={student} />)
                            }
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between gap-5 mt-10">
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
