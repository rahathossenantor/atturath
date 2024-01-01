import like from "../assets/like.png";
import kid from "../assets/baby-boy.png";
import degree from "../assets/degree.png";
import love from "../assets/heart.png";

const Statics = () => {
    return (
        <div className="statistics">
            <div className="xl:py-20 lg:py-16 md:py-12 py-10 bg-[#00000061] text-white">
                <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-7 raleway">
                    <div className="flex flex-col items-center text-center">
                        <h5 className="text-2xl mb-2">happy parents</h5>
                        <div className="flex items-center gap-3">
                            <img className="inline-block w-12" src={like} alt="icon" />
                            <h4 className="text-4xl">100</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h5 className="text-2xl mb-2">happy children</h5>
                        <div className="flex items-center gap-3">
                            <img className="inline-block w-12" src={kid} alt="icon" />
                            <h4 className="text-4xl">100</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h5 className="text-2xl mb-2">happy teachers</h5>
                        <div className="flex items-center gap-3">
                            <img className="inline-block w-14" src={degree} alt="icon" />
                            <h4 className="text-4xl">100</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h5 className="text-2xl mb-2">happy hours</h5>
                        <div className="flex items-center gap-3">
                            <img className="inline-block w-[40px]" src={love} alt="icon" />
                            <h4 className="text-4xl">100</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statics;
