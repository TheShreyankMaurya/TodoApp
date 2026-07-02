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
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
