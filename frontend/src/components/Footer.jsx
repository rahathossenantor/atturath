import logo1 from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-white raleway border">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <div>
                    <footer className="footer py-10 text-base-content">
                        <nav className="gap-[2px]">
                            <header className="text-2xl text-black font-medium mb-2">Keep In Touch</header>
                            <a href="https://maps.app.goo.gl/25wimnNM4E58CzDL7" target="_blank" rel="noreferrer" className="text-lg flex gap-2 items-center"><FaLocationDot></FaLocationDot> <span className="link-hover">42/3 East Hajipara, Dhaka-1212, Bangladesh.</span></a>
                            <a href="https://api.whatsapp.com/send/?phone=%2B8801966498505&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-lg flex gap-2 items-center"><FaPhone></FaPhone> <span className="link-hover">+880 1966-498505</span></a>
                            <a href="https://api.whatsapp.com/send/?phone=%2B8801829669921&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-lg flex gap-2 items-center"><FaPhone></FaPhone> <span className="link-hover">+880 1829-669921</span></a>
                            <a href="mailto:atturathacademy@gmail.com" target="_blank" rel="noreferrer" className="text-lg flex gap-2 items-center"><MdEmail></MdEmail> <span className="link-hover">atturathacademy@gmail.com</span></a>
                        </nav>
                        <nav className="gap-[2px]">
                            <header className="text-2xl text-black font-medium mb-2">Useful Links</header>
                            <Link to="/about" className="text-lg link-hover">About Us</Link>
                            <Link to="/teachers" className="text-lg link-hover">Teachers</Link>
                            <Link to="/students" className="text-lg link-hover">Students</Link>
                            <Link to="/contact" className="text-lg link-hover">Contact</Link>
                        </nav>
                        <nav className="gap-[2px]">
                            <header className="text-2xl text-black font-medium mb-2">Legal</header>
                            <a href="" className="text-lg link-hover">Terms of use</a>
                            <a href="" className="text-lg link-hover">Privacy policy</a>
                            <a href="" className="text-lg link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                    <footer className="footer py-4 border-t text-base-content border-base-300">
                        <aside className="items-center grid-flow-col gap-5">
                            <a><img src={logo1} className="inline-block w-[65px]" alt="logo" /></a>
                            <p className="text-base"><span className="font-semibold">AT-Turath Academy of Quran</span><br />—where young minds embrace the wisdom of the Quran!</p>
                        </aside>
                        <nav className="md:place-self-center md:justify-self-end 2xl:grid xl:grid lg:grid md:grid hidden">
                            <div className="grid grid-flow-col gap-4">
                                <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </nav>
                    </footer>
                    <footer className="footer footer-center py-3 text-base-content border-t">
                        <aside>
                            <p className="text-base">Copyright © 2023 - All right reserved | Made by <a className="font-semibold link-hover" href="https://rahathossen.com/" target="_blank" rel="noreferrer">Md Rahat Hossen Antor</a></p>
                        </aside>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;
