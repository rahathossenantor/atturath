import cap from "../assets/degree.png";

const Address = () => {
    return (
        <div className="bg-white border">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col justify-center gap-5 py-10">
                    <div style={{ border: "15px solid white" }} className="text-center rounded-[40px] shadow-2xl p-5 bg-[#85B719] text-white xl:w-4/12 lg:w-full flex items-center justify-center">
                        <div>
                            <div className="patrick-hand">
                                <h4 className="text-xl mb-2">LOREM IPSUM SIN</h4>
                                <h2 className="text-4xl mb-3">Colibri Kindergarten</h2>
                                <p className="text-lg">(540) 372-4410 3 Melanie Hollow Ln Fredericksburg, Virginia(VA), 22405</p>
                            </div>
                            <div className="mt-3">
                                <img className="inline-block w-14" src={cap} alt="icon" />
                            </div>
                            <div className="raleway mt-3">
                                <p>office@yourwebsite.com</p>
                                <p>jobs@yourwebsite.com</p>
                                <p>school@yourwebite.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe className="xl:w-[700px] lg:w-full md:w-full w-full xl:h-[500px] lg:h-[500px] md:h-[500px] h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.245763333374!2d90.40013466421065!3d23.789727992853017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1703406660254!5m2!1sen!2sbd" allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
