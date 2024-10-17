import { useEffect, useState } from "react";


const useFilteredTodos = (todos, searchTerm) => {

    const [filteredTodos, setFilteredTodos] = useState([]);
  
    useEffect(() => {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = todos.filter(todo => 
        todo.toLowerCase().includes(lowercasedSearchTerm)
      );
      setFilteredTodos(filtered);
    }, [todos, searchTerm]);

    return filteredTodos;
}

export default useFilteredTodos;