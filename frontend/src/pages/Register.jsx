import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const imgApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errStatus, setErrStatus] = useState("");
    const { emailPassRegister } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // get image from user and post it to the imagebb server for direct url
        const imageFile = { image: data.image[0] };
        const imgRes = await axiosPublic.post(imgApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        emailPassRegister(data.email, data.password)
            .then((res) => {
                if (imgRes.data.success) {
                    updateProfile(res.user, {
                        displayName: data?.name,
                        photoURL: imgRes.data.data.display_url
                    })
                        .then(() => {
                        }).catch((err) => {
                            setErrStatus(err.message);
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

                // post user data to the database
                const userInfo = {
                    name: data.name,
                    email: data.email
                };
                axiosPublic.post("/users", userInfo)
                    .then(() => {
                        reset();
                        Swal.fire({
                            title: "Success!",
                            text: "Registration successful!",
                            icon: "success",
                            confirmButtonText: "Close",
                            timer: 2000
                        });
                        navigate("/");
                    })
                    .catch((err) => {
                        setErrStatus(err.message);
                    });
            })
            .catch((err) => {
                setErrStatus(err.message);
            });
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 raleway xl:py-10 lg:py-5 py-5 xl:px-0 lg:px-5 md:px-5 px-5">
            <main className="flex max-w-full flex-auto flex-col">
                <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden">
                    <section className="w-full max-w-xl">
                        {/* Header */}
                        <header className="mb-5 text-center">
                            <h1 className="mb-1 inline-flex items-center space-x-2 text-3xl font-bold">
                                <span>Register Acount</span>
                            </h1>
                        </header>
                        {/* END Header */}
                        {/* Form */}
                        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                            <div className="grow p-5 md:px-16 md:py-12">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-sm font-medium">Name <span className="text-red-600">*</span></label>
                                        <input {...register("name", { required: true })} type="text" id="name" name="name" placeholder="Enter your name" className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500" />
                                        {errors.name && <span className="text-red-600 mt-1 inline-block">Name is required</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-sm font-medium">Email <span className="text-red-600">*</span></label>
                                        <input {...register("email", { required: true })} type="email" id="email" name="email" placeholder="Enter your email" className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500" />
                                        {errors.email && <span className="text-red-600 mt-1 inline-block">Email is required</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="text-sm font-medium">Password <span className="text-red-600">*</span></label>
                                        <input {...register("password", { required: true })} type="password" id="password" name="password" placeholder="Enter your password" className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500" />
                                        {errors.password && <span className="text-red-600 mt-1 inline-block">Password is required</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="image" className="text-sm font-medium">Image <span className="text-red-600">*</span></label>
                                        <input {...register("image", { required: true })} type="file" name="image" id="image" className="file-input file-input-bordered w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500" />
                                        {errors.image && <span className="text-red-600 mt-1 inline-block">Image is required</span>}
                                    </div>
                                    <div>
                                        <button type="submit" className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                            <span>Register</span>
                                        </button>
                                        {/* Divider: With Label */}
                                        <div className="my-5 flex items-center">
                                            <span aria-hidden="true" className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75" />
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                                or sign up with
                                            </span>
                                            <span aria-hidden="true" className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75" />
                                        </div>
                                        {/* END Divider: With Label */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <a href="" className="btn flex gap-1"><FaGoogle className="text-lg" /> Google</a>
                                            <a href="" className="btn flex gap-1"><FaFacebook className="text-lg" /> Facebook</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="grow bg-gray-50 p-5 text-center text-sm md:px-16 dark:bg-gray-700/50">Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Login</Link>
                            </div>
                            {
                                errStatus && <p className="text-red-500 text-center py-1">{errStatus}</p>
                            }
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Register;
