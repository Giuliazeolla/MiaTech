import { createRoot } from 'react-dom/client'
import './index.css'
import TodoProvider from './provider/TodoProvider'
import TodoList from './TodoList'

createRoot(document.getElementById('root')).render(
    <TodoProvider>
    <TodoList />
    </TodoProvider>
)
