
const JoinForm = () => {
    return (
        <div className="bg-white">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-10">
                <div className="sign-up text-white xl:p-10 lg:p-10 md:p-7 p-5 xl:w-[80%] lg:w-[90%] mx-auto rounded-[40px]">
                    <h3 className="xl:text-6xl lg:text-6xl md:text-6xl text-5xl text-center annie mb-5">Join our school</h3>
                    <form className="raleway">
                        <div className="flex flex-col items-center mb-5">
                            <label className="text-[17px] mb-2" htmlFor="name">Your Name (required)</label>
                            <input required className="w-full rounded-full bg-[#ffffff66] outline-none p-3 border h-9" type="text" id="name" name="name" />
                        </div>
                        <div className="flex flex-col items-center mb-5">
                            <label className="text-[17px] mb-2" htmlFor="email">Your Email (required)</label>
                            <input required className="w-full rounded-full bg-[#ffffff66] outline-none p-3 border h-9" type="email" id="email" name="email" />
                        </div>
                        <div className="flex flex-col items-center mb-5">
                            <label className="text-[17px] mb-2" htmlFor="subject">Subject</label>
                            <input className="w-full rounded-full bg-[#ffffff66] outline-none p-3 border h-9" type="text" id="subject" name="subject" />
                        </div>
                        <div className="flex flex-col items-center mb-5">
                            <label className="text-[17px] mb-2" htmlFor="message">Your Message</label>
                            <textarea rows={5} className="textarea textarea-bordered w-full bg-[#ffffff66] rounded-[40px] p-3" id="message" name="message" ></textarea>
                        </div>
                        <button className="bg-[#A2DAF5] py-3 px-9 rounded-full">SEND</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinForm;
