import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTeachersData = () => {
    const axiosPublic = useAxiosPublic();

    const { data = [], isPending: loading, refetch } = useQuery({
        queryKey: ["teachers"],
        queryFn: async () => {
            const res = await axiosPublic.get("/teachers");
            return res.data;
        }
    });

    return { data, loading, refetch };
};

export default useTeachersData;
