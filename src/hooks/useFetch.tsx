import { useState } from "react";
import axios from "axios";

export default function useFetch<T>(endpoint: string) {
    const [data, setData] = useState([] as T);

    const fetch = async () => {
        try {
            const response = await axios.get("api/" + endpoint);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        data,
        fetch,
    };
}
