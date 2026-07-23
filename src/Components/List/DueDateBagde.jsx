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
                minWidth: 62,
                textAlign: "center",
                fontSize: 12,
                px: 1.2,
                py: 0.3,
                borderRadius: "999px",
                backgroundColor: checkDueDate() ? "#FDEAEA" : "#F3F5F7",
                color: checkDueDate() ? "#D62839" : "#7C8A94",
            }}
        >
            {dueDate.format("MMM DD")}
        </Typography>
    );
}
