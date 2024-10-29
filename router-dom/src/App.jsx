import React from "react";
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import TodoList from "./pages/TodoList"

const App = () => {
  return (
    <>
    <TodoList />
    </>
  )
};

export default App;