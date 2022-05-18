import { Box, SxProps } from "@mui/system";

const styles: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "55px",
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