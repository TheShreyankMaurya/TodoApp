import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function TaskActions({ todo, setTodo, id }) {
    function deleteTodo(id) {
        setTodo(todo.filter((obj) => obj.id !== id));
    }

    return (
        <div>
            <IconButton
                onClick={() => {
                    deleteTodo(id);
                }}
                size="small"
                sx={{
                    color: "#94A3B8",
                    p: 0.5,
                    "&:hover": {
                        color: "#D62839",
                        backgroundColor: "#FEECEC",
                    },
                }}
            >
                <DeleteOutlineOutlinedIcon
                    sx={{ fontSize: 25 }}
                ></DeleteOutlineOutlinedIcon>
            </IconButton>
        </div>
    );
}
