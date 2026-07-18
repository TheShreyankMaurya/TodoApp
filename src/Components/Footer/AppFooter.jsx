import { TodoInfo } from "../TodoInfo";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";

export default function AppFooter({ todo, setTodo }) {
    function clearCompleted() {
        setTodo(todo.filter((obj) => obj.done == false));
    }

    return (
        <div>
            <span style={{ color: "#94a3b8" }}>
                {TodoInfo(todo).remaining} remaining
            </span>
            &nbsp;&nbsp;&nbsp;
            {TodoInfo(todo).done > 0 ? (
                <Button
                    onClick={clearCompleted}
                    variant="text"
                    startIcon={<ClearIcon />}
                    size="small"
                    sx={{
                        color: "#8a8dee",
                        "&:hover": {
                            backgroundColor: "#F7F9FA",
                        },
                        textTransform: "none",
                        fontSize: 15,
                    }}
                >
                    Clear completed
                </Button>
            ) : null}
        </div>
    );
}
