
const SignUpSection = () => {
    return (
        <div className="sign-up">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-20">
                <div className="text-white">
                    <h3 className="text-6xl text-center annie">Sign up for our school</h3>
                    <form className="w-[80%] mx-auto mt-8 patrick-hand">
                        <div className="mb-4">
                            <label htmlFor="name">YOUR NAME (REQUIRED)</label>
                            <input required type="text" id="name" name="name" className="input open-sans bg-transparent w-full" />
                            <hr className="dotted-line" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">YOUR EMAIL (REQUIRED)</label>
                            <input required type="text" id="email" name="email" className="input open-sans bg-transparent w-full" />
                            <hr className="dotted-line" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject">SUBJECT</label>
                            <input type="text" id="subject" name="subject" className="input open-sans bg-transparent w-full" />
                            <hr className="dotted-line" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message">YOUR MESSAGE</label>
                            <textarea id="message" name="message" rows="7" className="textarea open-sans bg-transparent w-full"></textarea>
                            <hr className="dotted-line" />
                        </div>
                        <button className="py-[10px] open-sans px-14 rounded-full bg-[#7CAB17] text-white">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpSection;
