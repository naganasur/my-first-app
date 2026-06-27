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

const deleteall = () =>{
        setTodos([])
    };

const completedcounter = todos.filter((todo)=> todo.completed).length;


const [editingId , setEditingId] = useState(null);
const handleEditChange = (id, e) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: e.target.value } : todo
    )
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
            <button onClick={deleteall}>deleteall todos</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
  {editingId === todo.id ? (
    <input
      type="text"
      value={todo.text}
      onChange={(e) => handleEditChange(todo.id, e)}

    />
  ) : (
    <span
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => handletoggle(todo.id)}
    >
      {todo.text}
    </span>
  )}

  <button onClick={() => setEditingId(todo.id)}>Edit</button>
  <button onClick={() => setEditingId(null)}>Save</button>
  <button onClick={() => handleDelete(todo.id)}>Delete</button>
</li>

                ))}
            </ul>
            <p>{completedcounter} of {todos.length} completed </p>
           
        </div>
    );
    
}
export default TodoApp