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
        <span onClick={() => changeDone(obj.id)}>
            {obj.done ? (
                <CheckCircleIcon
                    sx={{
                        color: "#4f46e5",
                        fontSize: 44,
                    }}
                />
            ) : (
                <RadioButtonUncheckedIcon
                    sx={{
                        color: "#cbd5e1",
                        fontSize: 44,
                    }}
                />
            )}
        </span>
    );
}
