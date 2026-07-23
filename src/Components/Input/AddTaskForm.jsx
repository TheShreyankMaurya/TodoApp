import { useState } from "react";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import PriorityPicker from "./PriorityPicker";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import "./Input.css";

export default function AddTaskForm({
    addNewTodo,
    todo,
    priorityCount,
    setPriorityCount,
}) {
    const [newTodo, setNewTodo] = useState("");
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let priorityStyle = {
        width: 45,
        height: 45,
        border: "2px solid #dbe3e7",
        borderRadius: 2,
        color: "#B9C2C8",
    };

    function setAddNewTodo() {
        if (newTodo.trim().length === 0) {
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        addNewTodo(newTodo, priorityCount, date);
        setNewTodo("");
        setDate(null);
        setPriorityCount(0);
    }

    return (
        <div className="add-task-container">
            {showAlert && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    Please enter some task!
                </Alert>
            )}
            <input
                type="text"
                placeholder="Add to the docket..."
                value={newTodo}
                onChange={updateTodoValue}
                required
                name="Task"
                className="task-input"
            />

            <PriorityPicker
                priorityCount={priorityCount}
                setPriorityCount={setPriorityCount}
                style={priorityStyle}
                id={null}
            ></PriorityPicker>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Tooltip
                    title="Due Date"
                    placement="top"
                    arrow
                    enterDelay={800}
                    enterNextDelay={800}
                >
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            border: "2px solid #dbe3e7",
                            borderRadius: 2,
                            backgroundColor: date && "#eef0fe",
                            color: date ? "#4f52e0" : "#8996a0",
                        }}
                    >
                        <CalendarMonthOutlinedIcon></CalendarMonthOutlinedIcon>
                    </IconButton>
                </Tooltip>

                <DatePicker
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    open={open}
                    onClose={() => setOpen(false)}
                    slotProps={{
                        textField: {
                            sx: {
                                position: "absolute",
                                width: 0,
                                height: 0,
                                opacity: 0,
                                pointerEvents: "none",
                            },
                        },
                    }}
                />
            </LocalizationProvider>

            <Tooltip
                title="Add Task"
                placement="top"
                arrow
                enterDelay={800}
                enterNextDelay={800}
            >
                <IconButton
                    onClick={setAddNewTodo}
                    size="medium"
                    sx={{
                        border: "2px solid #4F52E0",
                        borderRadius: 2,
                        backgroundColor: "#4F52E0",
                        color: "#FFF",
                        "&:hover": {
                            backgroundColor: "#7A7DF0",
                            color: "#FFF",
                        },
                    }}
                >
                    <AddIcon></AddIcon>
                </IconButton>
            </Tooltip>
        </div>
    );
}
