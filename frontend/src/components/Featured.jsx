import heroImage from "../assets/dp.jpg";

const Featured = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="flex items-center justify-center relative rounded-[30px] shadow-xl xl:my-20 lg:my-16 md:my-16 my-10 xl:h-auto lg:h-auto md:h-auto h-[250px]">
                <img style={{border: "10px solid white"}} className="inline-block w-full h-full rounded-[30px] object-cover" src={heroImage} alt="kids" />
                <h3 className="xl:block lg:block md:block hidden xl:text-5xl lg:text-5xl md:text-4xl text-[26px] text-white absolute bottom-5 left-5 txt-shadow patrick-hand">—Where young minds embrace the wisdom of the Quran!</h3>
            </div>
        </div>
    );
};

export default Featured;
