
const Featured = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="flex items-center justify-center relative rounded-[70px] shadow-xl xl:my-20 lg:my-16 md:my-16 my-10">
                <img style={{border: "15px solid white"}} className="inline-block rounded-[70px]" src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/kids-2835430_1920-1.jpg" alt="kids" />
                <h3 className="xl:text-5xl lg:text-5xl md:text-4xl text-3xl text-white absolute bottom-8 left-8 txt-shadow patrick-hand">Learning with fun is our goal!</h3>
            </div>
        </div>
    );
};

export default Featured;
