import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { TodoInfo } from "../TodoInfo";
import Typography from "@mui/material/Typography";
import "./ProgressBar.css";

export default function ProgressBar({ todo }) {
    const { total, done, remaining } = TodoInfo(todo);

    const progress = total === 0 ? 0 : (done / total) * 100;

    return (
        <div className="progressContainer">
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    flex: 1,
                    height: 5,
                    borderRadius: 10,

                    [`&.${linearProgressClasses.colorPrimary}`]: {
                        backgroundColor: "#e9eff2",
                    },

                    [`& .${linearProgressClasses.bar}`]: {
                        borderRadius: 10,
                        background: "linear-gradient(90deg, #4F52E0, #878aea)",
                    },
                }}
            ></LinearProgress>
            <Typography>
                {TodoInfo(todo).done}/{TodoInfo(todo).total} done
            </Typography>
        </div>
    );
}
