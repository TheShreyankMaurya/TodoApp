import Divider from "@mui/material/Divider";
import AppHeader from "./HeaderArea/AppHeader";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTaskForm from "./Input/AddTaskForm";
import TaskList from "./List/TaskList";
import AppFooter from "./Footer/AppFooter";

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

            <AddTaskForm addNewTodo={addNewTodo}></AddTaskForm>

            <br />

            <Divider
                sx={{
                    borderColor: "#D8DEE2",
                }}
            ></Divider>

            <TaskList todo={todo} setTodo={setTodo}></TaskList>

            <br />

            <AppFooter todo={todo} setTodo={setTodo}></AppFooter>
        </>
    );
}
