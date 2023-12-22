const teacher =
    <div style={{ borderRadius: "35px" }} className="bg-white text-center border shadow-xl">
        <div className="w-[120px] avatar">
            <div className="rounded-full">
                <img src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/cropped-pexels-photo-325924-150x150.jpeg" />
            </div>
        </div>
        <div className="p-5">
            <p className="raleway text-lg">Do you sometimes have the feeling that you’re running into the same obstacles over and over again?</p>
        </div>
        <div style={{ borderRadius: "0 0 35px 35px" }} className="bg-[#F34D1B] py-4 text-white">
            <h4 className="patrick-hand text-xl">JOHN DOE</h4>
            <p className="raleway"><i>English teacher</i></p>
        </div>
    </div>

const AllTeachers = () => {
    return (
        <div className="bg-white">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-10">
                <div className="text-center mb-5">
                    <h4 className="text-[40px] patrick-hand">Teachers</h4>
                    <p className="xl:text-xl lg:text-xl md:text-lg text-lg raleway">Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his nemore temporibus consequuntur, vim ad prima vivendum consetetur.</p>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
                    {teacher}
                    {teacher}
                    {teacher}
                    {teacher}
                    {teacher}
                    {teacher}
                    {teacher}
                </div>
            </div>
        </div>
    );
};

export default AllTeachers;
