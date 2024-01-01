import PropTypes from "prop-types";

const SectionHeader = ({title}) => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 xl:my-20 lg:my-16 md:my-16 my-10">
            <div style={{border: "10px solid white"}} className="text-center rounded-[30px] shadow-xl py-10 sign-up">
                <h3 className="py-10 text-5xl annie font-semibold text-white">{title}</h3>
            </div>
        </div>
    );
};

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default SectionHeader;
