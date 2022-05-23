import { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import useAlert from "../../hooks/useAlert";
import { Container } from "./style";
import emailjs from "@emailjs/browser";
import Form from "../../components/Form";

// interface EmailData {
//     firstname: string;
//     lastname: string;
//     email: string;
//     subject: string;
//     message: string;
// }

export default function ContactPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location]);

    const { setMessage } = useAlert();

    const [isLoading, setLoading] = useState(false);

    const [emailData, setEmailData] = useState<any>({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleInputChange(e: any) {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        setMessage(null);

        if (!emailData?.firstname || !emailData?.lastname || !emailData?.email || !emailData?.subject || !emailData?.message) {
            setMessage({ type: "error", text: "All fields are required!" });
            return;
        }

        setLoading(true);

        try {

            setLoading(true);
            const response = await emailjs.send("service_1p88pcp", "template_mimbq0t", {
                ...emailData
            }, "YmtpLwzGpXZlIISa9");

            console.log("SUCCESS - ", response.text, response.status);

            setLoading(false);
            setMessage({ type: "success", text: "Email successfully sent!" });

            return

        } catch (error: Error | any) {
            console.log("FAILED - ", error);

            setMessage({ type: "error", text: "An error has occurred. Try again, please." });
        }

        setMessage({ type: "error", text: "Error! Try again in a few seconds, please." });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Box sx={styles.container}>
                    <Typography sx={styles.title} variant="h4" component="h1">
                        Get in touch.
                    </Typography>
                    <Grid container>
                        <Grid item xs={6} sx={{ pr: "5px" }}>
                            <TextField
                                name="firstname"
                                sx={{ mb: "16px" }}
                                label="First Name"
                                variant="outlined"
                                onChange={handleInputChange}
                                value={emailData?.firstname}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sx={{ pl: "5px" }}>
                            <TextField
                                name="lastname"
                                sx={{ mb: "16px" }}
                                label="Last Name"
                                variant="outlined"
                                onChange={handleInputChange}
                                value={emailData?.lastname}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <TextField
                        name="email"
                        sx={styles.input}
                        label="Email"
                        type="email"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={emailData?.email}
                    />
                    <TextField
                        name="subject"
                        sx={styles.input}
                        label="Subject"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={emailData?.subject}
                    />
                    <TextField
                        name="message"
                        sx={styles.input}
                        label="Message"
                        multiline
                        rows={8}
                        variant="outlined"
                        onChange={handleInputChange}
                        value={emailData?.message}
                    />
                    <Box sx={styles.actionsContainer}>
                        {isLoading
                            ?
                            <LoadingButton sx={styles.sendButton} loading variant="contained">
                                Submit
                            </LoadingButton>
                            :
                            <Button onSubmit={handleSubmit} sx={styles.sendButton} variant="contained" type="submit">
                                Submit
                            </Button>
                        }
                    </Box>
                </Box>
            </Form>
        </Container>
    );
}

const styles = {
    container: {
        mt: "80px",
        mb: "80px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
    },
    title: {
        marginBottom: "50px",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
    },
    dividerContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        mt: "16px",
        mb: "26px",
    },
    input: {
        marginBottom: "16px",
        '&:placeholder': {
            fontFamily: [
                '"Abel"', 'sans-serif'
            ].join(',')
        }
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    sendButton: {
        pt: "15px",
        pb: "15px",
        pl: "40px",
        pr: "40px",
        backgroundColor: "#111",
        fontFamily: [
            '"Abel"', 'sans-serif'
        ].join(','),
        fontSize: 16,
        '&:hover': {
            backgroundColor: "#333"
        }
    },
};