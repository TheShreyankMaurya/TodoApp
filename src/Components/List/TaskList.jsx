import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import TaskCheckbox from "./TaskCheckbox";

export default function TaskList({ todo, setTodo }) {
    return (
        <List>
            {todo.map((obj) => (
                <ListItem
                    key={obj.id}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 90,
                        borderBottom: "1px solid #eee",
                        gap: 3,
                    }}
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
                </ListItem>
            ))}
        </List>
    );
}
