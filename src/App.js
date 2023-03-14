import React, { useState } from 'react';
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { DatePicker } from '@mui/x-date-pickers';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

function App() {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState('');
  const [tabvalue, setTabvalue] = useState('one');
  const gridRef = useRef();
  const columns = [
    { field: "description", sortable: true, filter: true, floatingFilter: true },
    { field: "date", sortable: true, filter: true, floatingFilter: true },
    { field: "priority", sortable: true, filter: true, floatingFilter: true,
    cellStyle: params => params.value.toLowerCase() === "high" ? { color: 'red' } : { color: 'black' }
    }
  ]
 
  const handleChange = (event, tabvalue) => {
    setTabvalue(tabvalue);
    };


    const addTodo = (event) => {
      setTodos([...todos, todo]);
      console.log(todo);
      console.log(date);
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

    <Tabs value={tabvalue} onChange={handleChange}>
      <Tab value="one" label="Home" />
      <Tab value="two" label="Todos" />
    </Tabs>

    {tabvalue === 'one' && <div>Welcome!</div>}
    {tabvalue === 'two' && <div  className="App"><Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <TextField variant="outlined" value={description} onChange={(event) => {setDescription(event.target.value); setTodo({ ...todo, [event.target.name]: event.target.value })}} label="Description" name="description" />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb" dateLibInstance={dayjs.utc}>
      <DatePicker format="DD/MM/YYYY" value={date} onChange={(newDate) => {setDate(newDate); setTodo({ ...todo, ['date']: newDate})}}/>
      </LocalizationProvider>
      <TextField variant="outlined" value={priority} onChange={(event) => {setPriority(event.target.value); setTodo({ ...todo, [event.target.name]: event.target.value })}} label="Priority" name="priority" />
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
            todos.map((todo, index) => <tr key={index}><td>{todo.description}</td><td>{todo.date.$D}</td><td>{todo.priority}</td></tr>)
          }
        </tbody>
      </table></div>}

     
      
    </div>
  );
};

export default App;