
const About = () => {
    return (
        <div className="bg-white">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20">
                <div className="text-center">
                    <h4 className="text-[40px] patrick-hand">A few things we’re great at</h4>
                    <p className="text-lg raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.</p>
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-5 mb-[127px]">
                    <div className="relative">
                        <img style={{ borderRadius: "35px" }} src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-261895.jpeg" alt="featured-image" />
                        <div style={{ borderRadius: "35px" }} className="absolute 2xl:top-64 xl:top-[200px] lg:top-60 md:top-44 top-40 left-[10%] bg-white w-[80%] mx-auto text-center">
                            <div className="p-5">
                                <h5 className="text-xl mb-2 patrick-hand">ABOUT US</h5>
                                <p className="raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.</p>
                            </div>
                            <button style={{ borderRadius: "0 0 35px 35px" }} className="w-full bg-[#F34D1B] py-4 raleway text-white">READ MORE</button>
                        </div>
                    </div>
                    <div className="relative xl:mt-0 lg:mt-0 md:mt-0 mt-[155px]">
                        <img style={{ borderRadius: "35px" }} src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-abacus-mathematics-addition-subtraction-1019470-1.jpeg" alt="featured-image" />
                        <div style={{ borderRadius: "35px" }} className="absolute 2xl:top-64 xl:top-[200px] lg:top-60 md:top-44 top-40 left-[10%] bg-white w-[80%] mx-auto text-center">
                            <div className="p-5">
                                <h5 className="text-xl mb-2 patrick-hand">OUR TEACHERS</h5>
                                <p className="raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.</p>
                            </div>
                            <button style={{ borderRadius: "0 0 35px 35px" }} className="w-full bg-[#85B719] py-4 raleway text-white">READ MORE</button>
                        </div>
                    </div>
                    <div className="relative xl:mt-0 lg:mt-[122px] md:mt-[168px] mt-[155px]">
                        <img style={{ borderRadius: "35px" }} src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/kids-girl-pencil-drawing-159823.jpeg" alt="featured-image" />
                        <div style={{ borderRadius: "35px" }} className="absolute 2xl:top-64 xl:top-[200px] lg:top-60 md:top-44 top-40 left-[10%] bg-white w-[80%] mx-auto text-center">
                            <div className="p-5">
                                <h5 className="text-xl mb-2 patrick-hand">OUR CLASSES</h5>
                                <p className="raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.</p>
                            </div>
                            <button style={{ borderRadius: "0 0 35px 35px" }} className="w-full bg-[#06A8F0] py-4 raleway text-white">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
