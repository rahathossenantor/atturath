import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TableData = ({ tableData, path, deletorFn }) => {
    return (
        <tbody>
            <tr className="flex flex-col xl:flex-row justify-between border">
                <td className="flex-1 p-[10px]">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-24 rounded border">
                                <img src={tableData.image} alt="avatar" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{tableData.name}</h3>
                        </div>
                    </div>
                </td>
                <td className="flex items-center justify-start p-[10px] xl:w-[170px]">
                    <h5 className="text-lg">{tableData.level}</h5>
                </td>
                <td className="flex items-center justify-start p-[10px] xl:w-[110px]">
                    <h5 className="text-lg">{tableData.subject}</h5>
                </td>
                <td className="flex items-center justify-start p-[10px] xl:w-[300px] xl:overflow-x-scroll">
                    <h5 className="text-lg">{tableData.email}</h5>
                </td>
                <td className="flex items-center justify-start p-[10px] xl:w-[200px] xl:overflow-x-scroll">
                    <h5 className="text-lg">{tableData.address}</h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <Link className="xl:mx-3" to={`/dashboard/update-${path}/${tableData._id}`}>
                        <button className="p-[10px] bg-green-500 rounded-sm">
                            <FiEdit3 className="text-xl text-white"></FiEdit3>
                        </button>
                    </Link>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <button onClick={() => deletorFn(tableData._id)} className="p-[10px] xl:mr-3 bg-red-500 rounded-sm">
                        <RiDeleteBin6Line className="text-xl text-white"></RiDeleteBin6Line>
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

TableData.propTypes = {
    tableData: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    deletorFn: PropTypes.func.isRequired
};

export default TableData;
