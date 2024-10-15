import { useEffect, useState } from "react";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    body: undefined
}

export const useFetch = (url, options = { ...DEFAULT_OPTIONS }) => { 
    options = { ...DEFAULT_OPTIONS, ...options };

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const request = async () => {
        if (error) setError(false);
        if (!loading) setLoading(true);

        try {
            const response = await fetch(url, options);

            if (response.ok) setData(await response.json());
            else throw new Error("Fetch Error");
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        request();
    }, [url]);

    return { data, error, loading, update: request };
}