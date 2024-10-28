import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import TodoDetail from "./pages/TodoDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="todos/:id" element={<TodoDetail />}/>
        </Route>
      </Routes>
    </Router>
  )
};

export default App;