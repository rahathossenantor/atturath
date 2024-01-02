import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStudentsData = () => {
    const axiosPublic = useAxiosPublic();

    const { data = [], isPending: loading, refetch } = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
            const res = await axiosPublic.get("/students");
            return res.data;
        }
    });

    return { data, loading, refetch };
};

export default useStudentsData;
