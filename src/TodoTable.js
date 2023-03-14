import React from "react";
import DeleteItem from './DeleteItem';

function TodoTable(props) {
    return (
        <div className="ps-2 pe-2">
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map((item, index) => 
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.desc}</td>
                        <td><DeleteItem todos={props.todos} i={props.todos.indexOf(item)} setTodos={props.setTodos} /></td>
                    </tr>)}
                </tbody>
            </table>
            </div>
    )
}

export default TodoTable;