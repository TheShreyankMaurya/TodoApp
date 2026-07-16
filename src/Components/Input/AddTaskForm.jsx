import { useState } from "react";
import "./AddTaskForm.css";
import Button from "@mui/material/Button";

export default function AddTaskForm() {
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add to the docket..."
                value={newTodo}
                onChange={updateTodoValue}
            />
            &nbsp;&nbsp;&nbsp;
            <button className="AddTaskFormButton">+</button>
        </div>
    );
}
