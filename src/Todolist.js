import React, { useState } from "react";
import TodoTable from './TodoTable';

function Todolist() {
    const [task, setTask] = useState({date: '', desc: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTask({...task, [event.target.name]: event.target.value});
        };

    const addTodo = () => setTodos([...todos, task]);


    return (
        <div className="bg-light">
            <div className="bg-dark text-light p-3 fs-2">Simple Todolist</div>
            <div className="border border-2 m-2"> 
                <div className="text-start ps-3">Add todo:</div>
                <div>
                Description: <input type="text" name="desc" onChange={inputChanged} value={task.desc} />
                Date: <input type="text" name="date" onChange={inputChanged} value={task.date} />
                <button onClick={addTodo}>Add</button>
                </div>
            </div>
            <div>
            <TodoTable todos={todos} setTodos={setTodos} />
            </div>
            
        </div>
    );
}

export default Todolist;