import { Link } from "react-router-dom";
import PageTitle from "../../components/dashboard/PageTitle";
import TableData from "../../components/dashboard/TableData";

const teachers = [
    {
        _id: 1,
        name: "Mahmud Abdullah",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp",
        level: "Senior Teacher",
        subject: "Arabic",
        address: "Dhaka, Bangladesh"
    },
    {
        _id: 2,
        name: "Mahmud Abdullah",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp",
        level: "Senior Teacher",
        subject: "Arabic",
        address: "Dhaka, Bangladesh"
    },
    {
        _id: 3,
        name: "Mahmud Abdullah",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp",
        level: "Senior Teacher",
        subject: "Arabic",
        address: "Dhaka, Bangladesh"
    },
    {
        _id: 4,
        name: "Mahmud Abdullah",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp",
        level: "Senior Teacher",
        subject: "Arabic",
        address: "Dhaka, Bangladesh"
    },
    {
        _id: 5,
        name: "Mahmud Abdullah",
        email: "emailaddress@gmail.com",
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp",
        level: "Senior Teacher",
        subject: "Arabic",
        address: "Dhaka, Bangladesh"
    }
];

const ManageTeachers = () => {
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
                            teachers.map(teacher => <TableData key={teacher._id} tableData={teacher} path="teacher" deletorFn={handleDelete}></TableData>)
                        }
                    </table>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="join grid grid-cols-2">
                        <button className="join-item btn btn-outline">Previous</button>
                        <button className="join-item btn btn-outline">Next</button>
                    </div>
                    <Link to="/dashboard/add-teacher">
                        <button className="btn btn-outline">Add Teacher</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ManageTeachers;
