import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: {},
    body: undefined
}

const _useFetch = (url, options = { ...DEFAULT_OPTIONS }) => {
    options = { ...DEFAULT_OPTIONS, ...options };
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, options);

            if (response.ok) setData(await response.json());
            else throw new Error("Fetch error");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, error, loading, update: fetchData };

}


export default _useFetch;