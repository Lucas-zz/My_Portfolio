import { Box, SxProps } from "@mui/material";

const styles: SxProps = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

interface Props {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit }: Props) {
    return (
        <Box sx={styles} component="form" onSubmit={onSubmit}>
            {children}
        </Box>
    );
}