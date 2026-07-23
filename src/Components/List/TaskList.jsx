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
        <List
            sx={{
                padding: 0,
                margin: 0,
            }}
        >
            {todo.map((obj) => (
                <ListItem
                    key={obj.id}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: 60,
                        px: 3,
                        borderBottom: "1px solid #EEF2F5",
                        "&:hover": {
                            backgroundColor: "#F8FAFC",
                        },
                    }}
                    onMouseEnter={() => setIsHovered(obj.id)}
                    onMouseLeave={() => setIsHovered(null)}
                >
                    <Typography
                        sx={{
                            width: 40,
                            fontSize: 13,
                            color: "#B8C2CC",
                            fontFamily: "monospace",
                            textAlign: "center",
                        }}
                    >
                        {obj.tokenNumber}
                    </Typography>

                    <Box
                        sx={{
                            width: 16,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: 24,
                                borderLeft: "2px dashed #D8DEE2",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            width: 40,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <TaskCheckbox
                            todo={todo}
                            setTodo={setTodo}
                            obj={obj}
                        ></TaskCheckbox>
                    </Box>

                    <Box
                        sx={{
                            width: 40,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <PriorityPicker
                            priorityCount={obj.priority}
                            setTodo={setTodo}
                            obj={obj}
                            location={"list"}
                            id={obj.id}
                        ></PriorityPicker>
                    </Box>

                    <Typography
                        sx={{
                            flex: 1,
                            ml: 1,
                            fontSize: 15,
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            color: obj.done ? "#94A3B8" : "#1E293B",
                            textDecoration: obj.done ? "line-through" : "none",
                        }}
                    >
                        {obj.text}
                    </Typography>

                    <Box
                        sx={{
                            width: 70,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {obj.dueDate && <DueDateBadge dueDate={obj.dueDate} />}
                    </Box>

                    <Box
                        sx={{
                            width: 36,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {isHovered === obj.id && (
                            <TaskActions
                                todo={todo}
                                setTodo={setTodo}
                                id={obj.id}
                            />
                        )}
                    </Box>
                </ListItem>
            ))}
        </List>
    );
}
