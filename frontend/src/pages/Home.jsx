import About from "../components/About";
import Featured from "../components/Featured";
import Features from "../components/Features";
import Footer from "../components/Footer";
import SignUpSection from "../components/SignUpSection";

const Home = () => {
    return (
        <>
            <Featured></Featured>
            <About></About>
            <Features></Features>
            <SignUpSection></SignUpSection>
            <Footer></Footer>
        </>
    );
};

export default Home;
