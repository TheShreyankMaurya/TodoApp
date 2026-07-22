import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TaskCheckbox from "./TaskCheckbox";
import Divider from "@mui/material/Divider";
import TaskActions from "./TaskActions";
import { useState } from "react";
import DueDateBadge from "./DueDateBagde";
import PriorityPicker from "../Input/PriorityPicker";
import { TodoInfo } from "../TodoInfo";
import EmptyTaskState from "./EmptyTaskState";

export default function TaskList({ todo, setTodo }) {
    const [isHovered, setIsHovered] = useState(null);

    let total = TodoInfo(todo).total;

    if (total === 0) {
        return <EmptyTaskState />;
    }

    return (
        <List>
            {todo.map((obj) => (
                <ListItem
                    key={obj.id}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 90,
                        borderBottom: "2px solid #E4E9EC",
                        gap: 3,
                        "&:hover": {
                            backgroundColor: "#F7F9FA",
                        },
                    }}
                    onMouseEnter={() => setIsHovered(obj.id)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <Typography
                        sx={{
                            width: 70,
                            color: "#a0acb8",
                            fontSize: 20,
                            fontFamily: "monospace",
                        }}
                    >
                        {obj.tokenNumber}
                    </Typography>

                    <Box
                        sx={{
                            height: 55,
                            borderLeft: "2px dashed #d7dde5",
                        }}
                    />

                    <TaskCheckbox
                        todo={todo}
                        setTodo={setTodo}
                        obj={obj}
                    ></TaskCheckbox>

                    <PriorityPicker
                        priorityCount={obj.priority}
                        setTodo={setTodo}
                        obj={obj}
                        location={"list"}
                        id={obj.id}
                    ></PriorityPicker>

                    <Typography
                        sx={{
                            flex: 1,
                            fontSize: 26,
                            color: obj.done ? "#94a3b8" : "#1e293b",
                            textDecoration: obj.done ? "line-through" : "none",
                        }}
                    >
                        {obj.text}
                    </Typography>

                    {obj.dueDate !== null && (
                        <DueDateBadge dueDate={obj.dueDate}></DueDateBadge>
                    )}

                    {isHovered === obj.id && (
                        <TaskActions
                            todo={todo}
                            setTodo={setTodo}
                            id={obj.id}
                        ></TaskActions>
                    )}
                </ListItem>
            ))}
        </List>
    );
}
