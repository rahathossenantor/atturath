import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
    const authData = useContext(AuthContext);
    return authData;
};

export default useAuth;
