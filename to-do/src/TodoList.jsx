import { useState } from "react";
import useFilteredTodos from "./hooks/useFilteredTodos";


const TodoList = () => {
  const [todos] = useState([
    'Comprare latte',
    'Studiare',
    'Leggere',
    'Pulire cucina'
  ]);

  const [searchTerm, setSarchTerm] = useState('');
  const filteredTodos = useFilteredTodos(todos, searchTerm);


  return (
    <div>
      <input type="text" placeholder="Cerca to-do..." value={searchTerm} onChange={e => setSarchTerm(e.target.value)} />
      <ul>
        {
          todos && todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
