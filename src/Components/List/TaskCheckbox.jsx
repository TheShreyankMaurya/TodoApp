import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function TaskCheckbox({ todo, setTodo, obj }) {
    function changeDone(id) {
        setTodo((prevTodos) =>
            prevTodos.map((obj) => {
                if (obj.id === id) {
                    return { ...obj, done: !obj.done };
                } else {
                    return obj;
                }
            }),
        );
    }

    return (
        <span
            onClick={() => changeDone(obj.id)}
            style={{
                display: "flex",
                cursor: "pointer",
            }}
        >
            {obj.done ? (
                <CheckCircleIcon
                    size="small"
                    sx={{
                        color: "#4F52E0",
                        fontSize: 28,
                    }}
                />
            ) : (
                <RadioButtonUncheckedIcon
                    size="small"
                    sx={{
                        color: "#C7D2DA",
                        fontSize: 28,
                    }}
                />
            )}
        </span>
    );
}
