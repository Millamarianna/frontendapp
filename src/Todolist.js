import React, { useState } from "react";
import DeleteItem from './DeleteItem';

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
            
            </div>
            <div className="ps-2 pe-2">
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item, index) => 
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.desc}</td>
                        <td><DeleteItem todos={todos} i={todos.indexOf(item)} setTodos={setTodos} /></td>
                    </tr>)}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Todolist;