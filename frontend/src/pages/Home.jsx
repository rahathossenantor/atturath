import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <Header></Header>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;
