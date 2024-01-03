import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useData = (url) => {
    const axiosPublic = useAxiosPublic();

    const { data = [], isPending: loading, refetch } = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const res = await axiosPublic.get(`/${url}`);
            return res.data;
        }
    });

    return { data, loading, refetch };
};

export default useData;
