import {axiosInstance} from '../lib/axios';
import { useQuery } from '@tanstack/react-query';

export const useProduct = () => {
    const { data, isLoading } = useQuery ({
        queryFn: async () => {
            const productResponse = await axiosInstance.get("/products")

            return productResponse 
        },
    })

return {
    data,
    isLoading
}
}

