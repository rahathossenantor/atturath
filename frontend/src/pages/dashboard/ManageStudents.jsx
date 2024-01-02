import { Link } from "react-router-dom";
import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";

const students = [
    {
        _id: 1,
        name: "Imteaj Alam Monna",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/concierge-man-avatar-10107430-8179553.png?f=webp",
        level: "Class VI",
        subject: "Arabic",
        address: "Toronto, Canada"
    },
    {
        _id: 2,
        name: "Imteaj Alam Monna",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/concierge-man-avatar-10107430-8179553.png?f=webp",
        level: "Class VI",
        subject: "Arabic",
        address: "Toronto, Canada"
    },
    {
        _id: 3,
        name: "Imteaj Alam Monna",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/concierge-man-avatar-10107430-8179553.png?f=webp",
        level: "Class VI",
        subject: "Arabic",
        address: "Toronto, Canada"
    },
    {
        _id: 4,
        name: "Imteaj Alam Monna",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/concierge-man-avatar-10107430-8179553.png?f=webp",
        level: "Class VI",
        subject: "Arabic",
        address: "Toronto, Canada"
    },
    {
        _id: 5,
        name: "Imteaj Alam Monna",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/concierge-man-avatar-10107430-8179553.png?f=webp",
        level: "Class VI",
        subject: "Arabic",
        address: "Toronto, Canada"
    }
];

const ManageStudents = () => {
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
