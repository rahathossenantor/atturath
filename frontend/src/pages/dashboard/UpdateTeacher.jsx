import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const imgApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const UpdateTeacher = () => {
    const teacherData = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {
        const teacher = {
            name: data.name,
            email: data.email,
            level: data.position,
            subject: data.subject,
            address: data.address,
            image: teacherData.image
        };

        const imageFile = { image: data.photo[0] };

        if (imageFile.image) {
            const res = await axiosPublic.post(imgApi, imageFile, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            if (res.data.success) {
                teacher.image = res.data.data.display_url;

                // send student's updated data to the server
                const teacherRes = await axiosSecure.patch(`/teachers/${teacherData._id}`, teacher);
                if (teacherRes.data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "Teacher's data updated!",
                        icon: "success",
                        confirmButtonText: "Close",
                        timer: 2000
                    });
                } else {
                    Swal.fire({
                        title: "Failed!",
                        text: "Something went wrong!",
                        icon: "error",
                        confirmButtonText: "Close",
                        timer: 2000
                    });
                }
            } else {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "error",
                    confirmButtonText: "Close",
                    timer: 2000
                });
            }
        } else {
            // send teacher's updated data to the server
            const teacherRes = await axiosSecure.patch(`/teachers/${teacherData?._id}`, teacher);
            if (teacherRes.data.modifiedCount) {
                Swal.fire({
                    title: "Success!",
                    text: "Teacher's data updated!",
                    icon: "success",
                    confirmButtonText: "Close",
                    timer: 2000
                });
            } else {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "error",
                    confirmButtonText: "Close",
                    timer: 2000
                });
            }
        }
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="border shadow-xl 2xl:p-20 xl:p-20 lg:p-10 md:p-10 p-5 my-10 rounded-md raleway">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Update <span className="text-[#FD8E3C]">Teacher</span></h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* first row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-3 mb-3">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="name" className="font-semibold text-lg">Teacher&apos;s Name: <span className="text-red-600">*</span></label>
                            <input {...register("name", { required: true })} defaultValue={teacherData.name} type="text" placeholder="Teacher's name" id="name" name="name" className="input input-bordered w-full" />
                            {errors.name && <span className="text-red-600 mt-1 inline-block">Name is required</span>}
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="email" className="font-semibold text-lg">Teacher&apos;s Email: <span className="text-red-600">*</span></label>
                            <input {...register("email", { required: true })} defaultValue={teacherData.email} type="email" placeholder="Teacher's email" id="email" name="email" className="input input-bordered w-full" />
                            {errors.email && <span className="text-red-600 mt-1 inline-block">Email is required</span>}
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-3 mb-3">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="position" className="font-semibold text-lg">Select Position: <span className="text-red-600">*</span></label>
                            <select {...register("position", { required: true })} defaultValue={teacherData.level} id="position" name="position" className="input input-bordered w-full">
                                <option value="" hidden >Select position</option>
                                <option value="Senior Teacher">Senior</option>
                                <option value="Matter Expert">Matter Expert</option>
                                <option value="Junior Teacher">Junior Teacher</option>
                            </select>
                            {errors.position && <span className="text-red-600 mt-1 inline-block">Class is required</span>}
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="subject" className="font-semibold text-lg">Select Subject: <span className="text-red-600">*</span></label>
                            <select {...register("subject", { required: true })} defaultValue={teacherData.subject} id="subject" name="subject" className="input input-bordered w-full">
                                <option value="" hidden >Select subject</option>
                                <option value="Quran">Quran</option>
                                <option value="Arabic">Arabic</option>
                                <option value="English">English</option>
                                <option value="Math">Math</option>
                            </select>
                            {errors.subject && <span className="text-red-600 mt-1 inline-block">Subject is required</span>}
                        </div>
                    </div>
                    {/* third row */}
                    <div className="mb-3">
                        <label htmlFor="address" className="font-semibold text-lg">Address: <span className="text-red-600">*</span></label>
                        <input {...register("address", { required: true })} defaultValue={teacherData.address} type="text" placeholder="Teachers's address" id="address" name="address" className="input input-bordered w-full" />
                        {errors.address && <span className="text-red-600 mt-1 inline-block">Address is required</span>}
                    </div>
                    {/* fourth row */}
                    <div className="mb-3">
                        <label htmlFor="photo" className="font-semibold text-lg">Teacher&apos;s Image:</label>
                        <input {...register("photo")} type="file" name="photo" id="photo" className="file-input file-input-bordered w-full" />
                    </div>
                    <input type="submit" value="Update Teacher" className="btn btn-block btn-outline normal-case text-lg" />
                </form>
            </div>
        </div>
    );
};

export default UpdateTeacher;
