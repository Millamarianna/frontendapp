import React, { useState } from 'react';
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css';


function App() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('one');
  const gridRef = useRef();
  const columns = [
    { field: "description", sortable: true, filter: true, floatingFilter: true },
    { field: "date", sortable: true, filter: true, floatingFilter: true },
    {
      field: "priority", sortable: true, filter: true, floatingFilter: true,
      cellStyle: params => params.value.toLowerCase() === "high" ? { color: 'red' } : { color: 'black' }
    }
  ]

  const handleChange = (event, value) => {
    setValue(value);
    };

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    const selected = gridRef.current.api.getSelectedNodes();
    if (selected.length > 0) {
      setTodos(todos.filter((todo, index) =>
        index !== selected[0].childIndex))
    }
    else {
      alert('Select a row first!');
    }

  }

  return (

    
    <div className="App">

    <Tabs value={value} onChange={handleChange}>
      <Tab value="one" label="Home" />
      <Tab value="two" label="Todos" />
    </Tabs>

    {value === 'one' && <div>Welcome!</div>}
    {value === 'two' && <div  className="App"><Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField variant="outlined" onChange={inputChanged} label="Description" name="description" value={todo.description} />
      <TextField variant="outlined" onChange={inputChanged} label="Date" name="date" value={todo.date} />
      <TextField variant="outlined" onChange={inputChanged} label="Priority" name="priority" value={todo.priority} />
      <Button onClick={addTodo} variant="contained">Add</Button>
      <Button onClick={deleteTodo} variant="outlined">Delete</Button>
     </Stack>

      <div className="ag-theme-material"
        style={{ height: '700px', width: '70%', margin: 'auto' }} >
        <AgGridReact
          ref={gridRef}
          animateRows={true}
          rowSelection="single"
          columnDefs={columns}
          rowData={todos} />
      </div>

      <table>
        <tbody>
          {
            todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date}</td><td>{todo.priority}</td></tr>)
          }
        </tbody>
      </table></div>}

     
      
    </div>
  );
};

export default App;