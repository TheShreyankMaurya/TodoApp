import { useState } from "react";
import "./AddTaskForm.css";
import Button from "@mui/material/Button";

export default function AddTaskForm({ addNewTodo }) {
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    function setAddNewTodo() {
        addNewTodo(newTodo, 2);
        setNewTodo("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Add to the docket..."
                value={newTodo}
                onChange={updateTodoValue}
            />
            &nbsp;&nbsp;&nbsp;
            <button className="AddTaskFormButton" onClick={setAddNewTodo}>
                +
            </button>
        </div>
    );
}
