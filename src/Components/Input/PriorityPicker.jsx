import OutlinedFlagRoundedIcon from "@mui/icons-material/OutlinedFlagRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function PriorityPicker({
    priorityCount,
    setPriorityCount,
    style,
    setTodo,
    obj,
    location,
    id,
}) {
    let content;

    switch (priorityCount) {
        case 0:
            content = (
                <Tooltip
                    title="Priority : No priority set (click to change)"
                    placement="top"
                    arrow
                    enterDelay={800}
                    enterNextDelay={800}
                >
                    <OutlinedFlagRoundedIcon
                        sx={{
                            color: "#C7D2DA",
                            fontSize: 25,
                        }}
                    ></OutlinedFlagRoundedIcon>
                </Tooltip>
            );
            break;
        case 1:
            content = (
                <Tooltip
                    title="Priority : Low (click to change)"
                    placement="top"
                    arrow
                    enterDelay={800}
                    enterNextDelay={800}
                >
                    <FlagRoundedIcon
                        sx={{ color: "#3F9142", fontSize: 25 }}
                    ></FlagRoundedIcon>
                </Tooltip>
            );
            break;
        case 2:
            content = (
                <Tooltip
                    title="Priority : Medium (click to change)"
                    placement="top"
                    arrow
                    enterDelay={800}
                    enterNextDelay={800}
                >
                    <FlagRoundedIcon
                        sx={{ color: "#E3A008", fontSize: 25 }}
                    ></FlagRoundedIcon>
                </Tooltip>
            );
            break;
        case 3:
            content = (
                <Tooltip
                    title="Priority : High (click to change)"
                    placement="top"
                    arrow
                    enterDelay={800}
                    enterNextDelay={800}
                >
                    <FlagRoundedIcon
                        sx={{ color: "#D62839", fontSize: 25 }}
                    ></FlagRoundedIcon>
                </Tooltip>
            );
            break;
    }

    function changePriority(id) {
        if (location === "list") {
            setTodo((prevTodos) =>
                prevTodos.map((obj) => {
                    if (obj.id === id) {
                        return {
                            ...obj,
                            priority: obj.priority === 3 ? 0 : obj.priority + 1,
                        };
                    } else {
                        return obj;
                    }
                }),
            );
        } else {
            setPriorityCount((prevVal) => (prevVal === 3 ? 0 : prevVal + 1));
        }
    }

    return location === "list" ? (
        <span
            onClick={() => changePriority(id)}
            style={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {content}
        </span>
    ) : (
        <IconButton onClick={() => changePriority(id)} sx={style}>
            {content}
        </IconButton>
    );
}
