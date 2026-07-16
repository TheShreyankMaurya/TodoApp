import Typography from "@mui/material/Typography";
import ProgressBar from "./ProgressBar";

export default function AppHeader({ todo }) {
    let date = new Date();
    return (
        <div>
            <>
                <h1>Docket</h1>
                <Typography>
                    {date.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    })}
                </Typography>
            </>
            <ProgressBar todo={todo}></ProgressBar>
        </div>
    );
}
