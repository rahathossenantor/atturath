import PageTitle from "../../components/dashboard/PageTitle";

const ManageTeachers = () => {
    return (
        <>
            <PageTitle title="Manage Teachers"></PageTitle>
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <div className="overflow-x-auto my-5">
                    <table className="table raleway">
                        <tbody>
                            <tr className="flex flex-col xl:flex-row justify-between border">
                                <td className="flex-1 p-[10px]">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-325924-150x150.jpeg" alt="booking-image" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Ms. John Doe</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Senior Teacher</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">English</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">email@gmail.com</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Dhaka, Bangladesh</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Update</button>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="flex flex-col xl:flex-row justify-between border">
                                <td className="flex-1 p-[10px]">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-325924-150x150.jpeg" alt="booking-image" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Ms. John Doe</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Senior Teacher</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">English</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">email@gmail.com</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Dhaka, Bangladesh</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Update</button>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="flex flex-col xl:flex-row justify-between border">
                                <td className="flex-1 p-[10px]">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-325924-150x150.jpeg" alt="booking-image" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Ms. John Doe</h3>
                                        </div>
                                    </div>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Senior Teacher</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">English</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">email@gmail.com</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <h5 className="text-lg">Dhaka, Bangladesh</h5>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Update</button>
                                </td>
                                <td className="flex items-center justify-start p-[10px]">
                                    <button className="btn text-base py-[9px] px-7">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageTeachers;
