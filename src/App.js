import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './Context/Todo';
import { CartProvider } from './Context/Cart';
import TodoList from './components/Todolist';
import TodoForm from './components/TodoForm';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ShoppingCart from './components/Shoppingcart';
import ItemForm from './components/itemform';
import Navbar from './components/Navbar';
import BlogPosts from './Pages/Blogpage';

function App() {
  return (
    <Router>
      <Navbar/>
      <TodoProvider>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="todoapp" element={<TodoList/>}/>
            <Route exact path="shoppingapp" element={<ShoppingCart/>}/>
            <Route exact path="blogapp" element={<BlogPosts/>}/>
          </Routes>
        </CartProvider>
      </TodoProvider>
    </Router>
  );
}

export default App;
