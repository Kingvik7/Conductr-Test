import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap"


  function TodoList() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const inputRef = useRef(null);
    const listRef = useRef(null);
  
    const handleAddTodo = (event) => {
      event.preventDefault();
      const newTodo = event.target.elements.todo.value;
      setTodos([...todos, newTodo]);
      event.target.reset();
    };
  
    const handleCompleteTodo = (index) => {
      const completedTodo = todos[index];
      setCompletedTodos([...completedTodos, completedTodo]);
      setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };
  
    const handleDeleteTodo = (index) => {
      setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };
  
    const handleDeleteCompletedTask = (index) => {
      setCompletedTodos((prevCompletedTodos) =>
        prevCompletedTodos.filter((_, i) => i !== index)
      );
    };
  
    useEffect(() => {
      const list = listRef.current;
      const newestItem = list.lastChild;
      if (newestItem) {
        gsap.from(newestItem, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      }
    }, [todos]);

  return (
    <div>
      <p className="text-white mb-2 text-3xl mt-28 ">Your todos</p>
      <p className="text-gray-500 mt-4 text-sm">Pending</p>
      <ul className="mt-1 list" ref={listRef}>
        {todos.map((todo, index) => (
          <li key={index} className="flex my-2 todo-item ">
          <input
            type="checkbox"
            className="checkbox-custom" 
            id={`checkbox-${index}`}
            onClick={() => handleCompleteTodo(index)}
          />
          <label htmlFor={`checkbox-${index}`} className="checkbox-label w-auto">
            {todo}
          </label>
          <button className="text-end pl-4" onClick={() => handleDeleteTodo(index)}>
          <svg className="trash" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4H3.33333H14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 3.99999V13.3333C12.6667 13.6869 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.6869 14.6667 11.3333 14.6667H4.66666C4.31304 14.6667 3.9739 14.5262 3.72385 14.2761C3.4738 14.0261 3.33333 13.6869 3.33333 13.3333V3.99999M5.33333 3.99999V2.66666C5.33333 2.31304 5.4738 1.9739 5.72385 1.72385C5.9739 1.4738 6.31304 1.33333 6.66666 1.33333H9.33333C9.68695 1.33333 10.0261 1.4738 10.2761 1.72385C10.5262 1.9739 10.6667 2.31304 10.6667 2.66666V3.99999"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 7.33334V11.3333"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 7.33334V11.3333"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 
</button>
        </li>
        ))}
      </ul>
      <p className="text-gray-500 mt-4 text-sm">Completed</p>
      
      <ul>
        {completedTodos.map((completedTodo, index) => (
            <div className="flex flex-row my-2 todo-item">
                <svg className="checkbox-custom-completed opacity-25" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="14" height="14" rx="2" fill="#FFE800"/>
<path d="M3 7.6L5.54545 10L10 4" stroke="#222222"/>
</svg>

          <li className="text-zinc-600 line-through w-auto" key={index}>{completedTodo}</li>
   

          <button className="text-end pl-4" onClick={() => handleDeleteCompletedTask(index)}><svg className="trash" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 4H3.33333H14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 3.99999V13.3333C12.6667 13.6869 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.6869 14.6667 11.3333 14.6667H4.66666C4.31304 14.6667 3.9739 14.5262 3.72385 14.2761C3.4738 14.0261 3.33333 13.6869 3.33333 13.3333V3.99999M5.33333 3.99999V2.66666C5.33333 2.31304 5.4738 1.9739 5.72385 1.72385C5.9739 1.4738 6.31304 1.33333 6.66666 1.33333H9.33333C9.68695 1.33333 10.0261 1.4738 10.2761 1.72385C10.5262 1.9739 10.6667 2.31304 10.6667 2.66666V3.99999"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 7.33334V11.3333"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33333 7.33334V11.3333"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
          </div>
        ))}
      </ul>
      <p className="text-white mb-2 text-3xl mt-28 ">New todo</p> 
      <form onSubmit={handleAddTodo}>
        <div className="rounded-sm overflow-hidden">
            <input className=" p-1 text-gray-500" type="text" name="todo" ref={inputRef} placeholder="Add a to-do" />
            <button className="bg-yellow-300 p-1 px-3 rounded-r-sm text-gray-500" type="submit"><p className="hover:rotate-90 transition-all text-md">+</p>
            </button>
        </div>
      </form>
    </div>
  );
}

export default TodoList;
