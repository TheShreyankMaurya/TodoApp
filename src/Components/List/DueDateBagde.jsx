import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

export default function DueDateBadge({ dueDate }) {
    function checkDueDate() {
        const isOverDue = dueDate.isBefore(dayjs(), "day");
        return isOverDue;
    }

    return (
        <Typography
            sx={{
                fontSize: 26,
                backgroundColor: checkDueDate() ? "#fdeaea" : "#f1f4f6",
                color: checkDueDate() ? "#D62839" : "#7c8a94",
                borderRadius: 10,
                paddingLeft: 5,
                paddingRight: 5,
            }}
        >
            {dueDate.format("MMM DD")}
        </Typography>
    );
}
