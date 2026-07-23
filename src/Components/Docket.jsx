import Divider from "@mui/material/Divider";
import AppHeader from "./HeaderArea/AppHeader";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./Input/AddTaskForm";
import TaskList from "./List/TaskList";
import AppFooter from "./Footer/AppFooter";
import "./Docket.css";

export default function TodoList() {
    const tokenCount = useRef(1);

    function getTokenNumber() {
        tokenCount.current += 1;
        return tokenCount.current;
    }

    const [todo, setTodo] = useState([
        {
            id: uuidv4(),
            tokenNumber: tokenCount.current.toString().padStart(3, "0"),
            done: false,
            priority: 0,
            text: "Sample Task",
            dueDate: null,
        },
    ]);

    const addNewTodo = (newText, newPriority, newDueDate) => {
        setTodo((prevVal) => [
            ...prevVal,
            {
                id: uuidv4(),
                tokenNumber: getTokenNumber().toString().padStart(3, "0"),
                done: false,
                priority: newPriority,
                text: newText,
                dueDate: newDueDate,
            },
        ]);
    };

    const [priorityCount, setPriorityCount] = useState(0);

    return (
        <div className="docket">
            <AppHeader todo={todo}></AppHeader>

            <Divider
                sx={{
                    borderStyle: "dashed",
                    borderColor: "#D8DEE2",
                }}
            ></Divider>

            <AddTaskForm
                addNewTodo={addNewTodo}
                todo={todo}
                priorityCount={priorityCount}
                setPriorityCount={setPriorityCount}
            ></AddTaskForm>

            <Divider
                sx={{
                    borderColor: "#eef2f4",
                    borderWidth: "0.5px",
                }}
            ></Divider>

            <TaskList todo={todo} setTodo={setTodo}></TaskList>

            <AppFooter todo={todo} setTodo={setTodo}></AppFooter>
        </div>
    );
}
