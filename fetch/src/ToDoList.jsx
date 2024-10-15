import React, { useState } from "react";
import _useFetch from "./hooks/_useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const ToDoList = () => {
    const [url] = useState(API_URL);
    const { data, loading, error } = _useFetch(url);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            data && Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                       data && data.map((item) => (
                        <tr key={item.id}>
                           {
                            Object.keys(item).map((key) => (
                                <td key={key}>{item[key]}</td>
                            ))
                           }
                        </tr>
                       ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;