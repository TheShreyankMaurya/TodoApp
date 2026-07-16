import Divider from "@mui/material/Divider";
import AppHeader from "./HeaderArea/AppHeader";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./Input/AddTaskForm";

export default function TodoList() {
    let [todo, setTodo] = useState([
        {
            id: uuidv4(),
            tokenNumber: "001",
            done: false,
            priority: 0,
            text: "Sample Task",
        },
    ]);

    return (
        <>
            <AppHeader todo={todo}></AppHeader>
            <br />
            <Divider
                sx={{
                    borderStyle: "dashed",
                    borderColor: "#D8DEE2",
                }}
            ></Divider>
            <br />
            <AddTaskForm></AddTaskForm>
        </>
    );
}

// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// function TodoList() {
//     let [todos, setTodos] = useState([
//         { task: "sample task", id: uuidv4(), isDone: false },
//     ]);
//     let [newTodo, setNewTodo] = useState("");

//     let styles = {
//         textDecoration: todos.isDone == true ? "line-through" : "",
//     };

//     function addNewTask() {
//         setTodos((prevTodo) => {
//             return [
//                 ...prevTodo,
//                 { task: newTodo, id: uuidv4(), isDone: false },
//             ];
//         });

//         setNewTodo("");
//     }

//     let updateTodoValue = (event) => {
//         setNewTodo(event.target.value);
//     };

//     let deleteTodo = (id) => {
//         setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
//     };

//     let changeDone = (id) => {
//         setTodos((prevTodos) =>
//             prevTodos.map((todo) => {
//                 if (todo.id === id) {
//                     return { ...todo, isDone: !todo.isDone };
//                 } else {
//                     return todo;
//                 }
//             }),
//         );
//     };

//     let allDone = (id) => {
//         setTodos((prevTodos) =>
//             prevTodos.map((todo) => {
//                 return { ...todo, isDone: true };
//             }),
//         );
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Add a task"
//                 value={newTodo}
//                 onChange={updateTodoValue}
//             />
//             <button onClick={addNewTask}>Add Task</button>

//             <hr />

//             <h4>Tasks Todo</h4>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id}>
//                         <span>
//                             <span
//                                 style={{
//                                     textDecorationLine: todo.isDone
//                                         ? "line-through"
//                                         : "none",
//                                 }}
//                             >
//                                 {todo.task}
//                             </span>
//                             &nbsp;&nbsp;&nbsp;
//                             <button onClick={() => deleteTodo(todo.id)}>
//                                 Delete
//                             </button>
//                             &nbsp;&nbsp;&nbsp;
//                             <button onClick={() => changeDone(todo.id)}>
//                                 Done
//                             </button>
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={allDone}>Done All</button>
//         </div>
//     );
// }

// export default TodoList;
