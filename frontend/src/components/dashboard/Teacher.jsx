
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
                    <h5 className="text-lg">Dhaka, Bangladesh <img className="inline-block w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/125px-Flag_of_Bangladesh.svg.png" alt="country" /></h5>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <button className="btn text-base py-[9px] px-7">Update</button>
                </td>
                <td className="flex items-center justify-start p-[10px]">
                    <button className="btn text-base py-[9px] px-7">Delete</button>
                </td>
            </tr>
        </tbody>
    );
};

export default Teacher;
