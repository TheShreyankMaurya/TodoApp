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
            >
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
            </IconButton>
        </div>
    );
}
