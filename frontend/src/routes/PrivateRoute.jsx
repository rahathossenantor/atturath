import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return (
            <Loader></Loader>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} replace to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;
