import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [errStatus, setErrStatus] = useState("");
    const { emailPassLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const destination = location.state ? location.state : "/";

    const onSubmit = async (data) => {
        emailPassLogin(data.email, data.password)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Login successful!",
                    icon: "success",
                    confirmButtonText: "Close",
                    timer: 2000
                });
                reset();
                navigate(destination);
            })
            .catch(err => setErrStatus(err.message));
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 raleway xl:py-10 lg:py-5 py-5 xl:px-0 lg:px-5 md:px-5 px-5">
            <main className="flex max-w-full flex-auto flex-col">
                <div className="relative mx-auto flex w-full items-center justify-center overflow-hidden">
                    <section className="w-full max-w-xl">
                        {/* Header */}
                        <header className="mb-5 text-center">
                            <h1 className="mb-1 inline-flex items-center space-x-2 text-3xl font-bold">
                                <span>Login to your acount</span>
                            </h1>
                        </header>
                        {/* END Header */}
                        {/* Form */}
                        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                            <div className="grow p-5 md:px-16 md:py-12">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                    <div>
                                        <div className="mb-5 flex items-center justify-between space-x-2">
                                            <label className="flex items-center">
                                                <input type="checkbox" id="remember_me" name="remember_me" className="size-4 rounded border border-gray-200 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-blue-500 dark:focus:border-blue-500" />
                                                <span className="ml-2 text-sm">Remember me</span>
                                            </label>
                                            <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Forgot Password?</a>
                                        </div>
                                        <button type="submit" className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                            <span>Login</span>
                                        </button>
                                        {/* Divider: With Label */}
                                        <div className="my-5 flex items-center">
                                            <span aria-hidden="true" className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75" />
                                            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                                                or login with
                                            </span>
                                            <span aria-hidden="true" className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75" />
                                        </div>
                                        {/* END Divider: With Label */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <a className="btn flex gap-1"><FaGoogle className="text-lg" /> Google</a>
                                            <a className="btn flex gap-1"><FaFacebook className="text-lg" /> Facebook</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="grow bg-gray-50 p-5 text-center text-sm md:px-16 dark:bg-gray-700/50">Don&apos;t have an account? <Link to="/register" className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Register</Link>
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

export default Login;
