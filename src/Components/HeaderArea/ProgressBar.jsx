import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { TodoInfo } from "../TodoInfo";

export default function ProgressBar({ todo }) {
    let progress = (TodoInfo(todo).done / TodoInfo(todo).total) * 100;
    return (
        <div>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    width: 400,
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
            <p>
                {TodoInfo(todo).done}/{TodoInfo(todo).total} done
            </p>
        </div>
    );
}
