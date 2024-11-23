import React from "react";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Layout from "./components/Layout";
import TodoDetail from "./pages/TodoDetail";
import TodoList from "./pages/TodoList"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
            <Route path="/todo-detail" element={<TodoDetail />} />
          </Route>
        </Routes>
      </Router >
    </>
  )
};

export default App;