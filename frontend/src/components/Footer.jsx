
const Footer = () => {
    return (
        <div className="bg-[#7CAB17]">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 pt-10">
                <footer className="flex justify-between items-center gap-5 text-white">
                    <div>
                        <ul className="flex gap-5 open-sans">
                            <li className="text-[17px]"><a href="">Welcome</a></li>
                            <li className="text-[17px]"><a href="">Teachers</a></li>
                            <li className="text-[17px]"><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://colibriwp-work.colibriwp.com/school-ii/wp-content/uploads/2019/02/house.png" alt="image" />
                    </div>
                </footer>
                <p className="raleway text-center text-white py-5">Copyright © 2023 - All rights reserved by Atturath Kindergarden.</p>
            </div>
        </div>
    );
};

export default Footer;
