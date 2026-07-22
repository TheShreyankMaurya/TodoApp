import Typography from "@mui/material/Typography";
import ProgressBar from "./ProgressBar";
import dayjs from "dayjs";
import "./HeaderArea.css";

export default function AppHeader({ todo }) {
    const today = dayjs();
    return (
        <div className="AppHeader">
            <div className="AppHeaderInfo">
                <h1>Docket</h1>
                <Typography>{today.format("ddd, MMM D")}</Typography>
            </div>
            <div className="ProgressBar">
                <ProgressBar todo={todo}></ProgressBar>
            </div>
        </div>
    );
}
