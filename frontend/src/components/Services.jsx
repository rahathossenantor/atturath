
const serviceData = [
    {
        id: 1,
        title: "ABOUT US",
        description: "Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.",
        imageUrl: "https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-261895.jpeg",
        btnBgColor: "#F34D1B"
    },
    {
        id: 2,
        title: "OUR TEACHERS",
        description: "Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.",
        imageUrl: "https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-abacus-mathematics-addition-subtraction-1019470-1.jpeg",
        btnBgColor: "#85B719"
    },
    {
        id: 3,
        title: "OUR CLASSES",
        description: "Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima.",
        imageUrl: "https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/kids-girl-pencil-drawing-159823.jpeg",
        btnBgColor: "#06A8F0"
    }
];

const Services = () => {
    return (
        <div className="bg-white">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 pb-20 pt-[60px]">
                <div className="text-center">
                    <h4 className="text-[40px] patrick-hand">A few things we’re great at</h4>
                    <p className="xl:text-xl lg:text-xl md:text-lg text-lg raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.</p>
                </div>
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                    {
                        serviceData.map((service) =>
                            <div key={service.id} className="border shadow-xl rounded-2xl">
                                <figure className="w-full">
                                    <div className="flex items-center justify-center p-5 pb-0">
                                        <img className="inline-block w-full rounded-xl rounded-b-none" src={service.imageUrl} alt="image" />
                                    </div>
                                </figure>
                                <div className="p-5 text-center">
                                    <h5 className="text-2xl mb-2 patrick-hand">{service.title}</h5>
                                    <p className="raleway text-[17px] mb-3">{service.description}</p>
                                    <button style={{backgroundColor: `${service.btnBgColor}`}} className="w-full py-2 raleway text-white rounded-full">READ MORE</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
