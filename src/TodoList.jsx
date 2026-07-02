import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    function addNewTask() {
        setTodos((prevTodo) => {
            return [...prevTodo, { task: newTodo, id: uuidv4() }];
        });

        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>

            <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>
                            {todo.task}
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
