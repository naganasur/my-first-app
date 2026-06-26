import { useState } from "react";
function TodoApp(){
    const[todos,setTodos] = useState([]);
    const[input,setInput]= useState("");

    const handleAdd = () => {
        if(input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setInput("");

    };
    const handleDelete = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    const handletoggle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo,completed:!todo.completed}: todo
                     )
                 )
    };

    const allstrike = () => {
  setTodos(
    todos.map((todo) => ({ ...todo, completed: true }))
  );
};

    return(
        <div>
            <h2>My Todo List</h2>
            <input
            type="text"
            value={input}
            placeholder="add a new todo"
            onChange={(e) => setInput(e.target.value)}
            ></input>
            <button onClick={handleAdd}>Add</button>
            <button onClick={allstrike}>strike all</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={{textDecoration: todo.completed ? "line-through":"none"}}
                            onClick = {() => handletoggle(todo.id)}
                                >
                                     {todo.text}
                        </span>
                            
                       
                    <button onClick = { () => handleDelete(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp