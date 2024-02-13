import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Student = ({ student }) => {
    return (
        <tr className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">
                <div className="flex space-x-3 items-center">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={student.image}
                        width={32}
                        height={32}
                        alt={student.name}
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">{student.grade}</td>
            <td className="p-5 text-sm md:text-xl text-center">{student.percentage}%</td>
            <td className="p-5 text-sm md:text-xl text-center">{student.name}</td>
            <td className="p-5 text-sm md:text-xl text-center">{student.name}</td>
            <td className="p-5 text-sm md:text-xl text-center">
                <div>
                    <button className="p-[10px] bg-green-500 rounded-sm">
                        <FiEdit3 className="text-xl text-white"></FiEdit3>
                    </button>
                    <button className="p-[10px] bg-red-500 rounded-sm">
                        <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default Student;
