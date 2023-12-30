import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
    return (
        <section className="w-full h-full py-24 text-white bg-gradient-to-r from-[#000000cc] to-[#00000066]">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <h2 className="text-5xl font-semibold raleway">{title}</h2>
            </div>
        </section>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default PageTitle;
