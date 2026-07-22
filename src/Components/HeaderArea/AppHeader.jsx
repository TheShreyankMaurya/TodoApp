import Typography from "@mui/material/Typography";
import ProgressBar from "./ProgressBar";
import dayjs from "dayjs";

export default function AppHeader({ todo }) {
    const today = dayjs();
    return (
        <div>
            <>
                <h1>Docket</h1>
                <Typography>{today.format("ddd, MMM D")}</Typography>
            </>
            <ProgressBar todo={todo}></ProgressBar>
        </div>
    );
}
