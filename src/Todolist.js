import React, { useState } from "react";

function Todolist() {
    const [task, setTask] = useState({date: '', desc: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTask({...task, [event.target.name]: event.target.value});
        };

    const addTodo = () => setTodos([...todos, task]);

    return (
        <div class="bg-light">
            <div class="bg-dark text-light p-3 fs-2">Simple Todolist</div>
            <div class="border border-2 m-2"> 
                <div class="text-start ps-3">Add todo:</div>
                <div>
                Description: <input type="text" name ="desc" onChange={inputChanged} value={task.desc} />
                Date: <input type="text" name="date" onChange={inputChanged} value={task.date} />
                <button onClick={addTodo}>Add</button>
                </div>
            </div>
            <div>
            
            </div>
            <div class="ps-2 pe-2">
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((task, index) => 
                    <tr key={index}>
                        <td>{task.date}</td>
                        <td>{task.desc}</td>
                    </tr>)}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Todolist;
