import badge from "../assets/medal.png";
import fork from "../assets/fork.png";
import gradCap from "../assets/mortarboard.png";

const Features = () => {
    return (
        <div className="bg-[#A2DAF5]">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20">
                <div className="border bg-white xl:p-8 lg:p-8 md:p-6 p-4 flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse flex-col-reverse items-center gap-5 xl:rounded-[60px] lg:rounded-[60px] md:rounded-[40px] rounded-[30px]">
                    <div>
                        <h4 className="text-4xl patrick-hand mb-5">Welcome</h4>
                        <p className="raleway text-lg">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum.</p>
                        <div className="mt-5">
                            <div className="flex items-center gap-3 mb-5">
                                <div>
                                    <img className="w-14 inline-block" src={badge} alt="icon" />
                                </div>
                                <div>
                                    <h5 className="patrick-hand text-2xl mb-2">MISSION</h5>
                                    <p className="raleway xl:text-[17px] md:text-[17px]">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-5">
                                <div>
                                    <img className="w-14 inline-block" src={fork} alt="icon" />
                                </div>
                                <div>
                                    <h5 className="patrick-hand text-2xl mb-2">PROGRAM</h5>
                                    <p className="raleway xl:text-[17px] md:text-[17px]">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-5">
                                <div>
                                    <img className="w-14 inline-block" src={gradCap} alt="icon" />
                                </div>
                                <div>
                                    <h5 className="patrick-hand text-2xl mb-2">VISION</h5>
                                    <p className="raleway xl:text-[17px] md:text-[17px]">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur.</p>
                                </div>
                            </div>
                        </div>
                        <button className="py-[10px] px-6 rounded-full bg-[#7CAB17] text-white">TAKE A TOUR</button>
                    </div>
                    <div>
                        <img className="inline-block rounded-[40px]" src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-child-1864718_1280-1-1.jpg" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
