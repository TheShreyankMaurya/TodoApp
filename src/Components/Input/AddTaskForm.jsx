import { useState } from "react";
import "./AddTaskForm.css";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import IconButton from "@mui/material/IconButton";

export default function AddTaskForm({ addNewTodo }) {
    const [newTodo, setNewTodo] = useState("");
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    function setAddNewTodo() {
        addNewTodo(newTodo, 2, date);
        setNewTodo("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Add to the docket..."
                value={newTodo}
                onChange={updateTodoValue}
            />
            &nbsp;&nbsp;&nbsp;
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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

                <DatePicker
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    open={open}
                    onClose={() => setOpen(false)}
                    slotProps={{
                        textField: {
                            sx: { display: "none" },
                        },
                    }}
                />
            </LocalizationProvider>
            &nbsp;&nbsp;&nbsp;
            <button className="AddTaskFormButton" onClick={setAddNewTodo}>
                +
            </button>
        </div>
    );
}
