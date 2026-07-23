import Typography from "@mui/material/Typography";

export default function EmptyTaskState() {
    return (
        <div
            style={{
                height: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: "#94a3b8",
                }}
            >
                Nothing on the docket yet.
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    color: "#94a3b8",
                    mt: 1,
                }}
            >
                Add your first item above.
            </Typography>
        </div>
    );
}
