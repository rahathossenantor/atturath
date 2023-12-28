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
                                <h2 className="text-4xl mb-3">AT-Turath Academy of Quran</h2>
                                <p className="text-lg">42/3 East Hajipara, Dhaka-1212, Bangladesh.</p>
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
                        <iframe className="xl:w-[700px] lg:w-full md:w-full w-full xl:h-[500px] lg:h-[500px] md:h-[500px] h-[350px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1825.8578449837034!2d90.4179433!3d23.7575159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8794ed5f1af%3A0x742fa3f8e9b63f00!2s42%2C%203%20E%20Hazipara%2C%20Dhaka%201219!5e0!3m2!1sen!2sbd!4v1703750877679!5m2!1sen!2sbd" allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
