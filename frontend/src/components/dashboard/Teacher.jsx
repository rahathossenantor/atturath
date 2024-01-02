import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Teacher = () => {
    return (
        <tbody>
            <tr className="flex flex-col xl:flex-row justify-between border">
                <td className="flex-1 p-[10px]">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-24 rounded border">
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/muslim-businessman-avatar-10233732-8264139.png?f=webp" alt="image" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Muhammad Abdullah</h3>
                        </div>
                    </div>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <h5 className="text-lg">Senior Teacher</h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <h5 className="text-lg">Arabic</h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <h5 className="text-lg">emailaddress@gmail.com</h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <h5 className="text-lg">Dhaka, Bangladesh</h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <Link className="xl:mx-3" to={`/dashboard/update-student/`}>
                        <button className="p-[10px] bg-green-500 rounded-sm">
                            <FiEdit3 className="text-xl text-white"></FiEdit3>
                        </button>
                    </Link>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <button className="p-[10px] xl:mr-3 bg-red-500 rounded-sm">
                        <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

export default Teacher;
