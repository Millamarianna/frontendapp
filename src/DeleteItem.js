function DeleteItem(props) {

    return <button onClick={() => props.setTodos(props.todos.filter((todo, index) => index !== props.i))}>Delete</button>
    ;
}

export default DeleteItem;