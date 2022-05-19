import React, { useState } from "react";
import { Box, Button, Divider, Link, TextField, Typography, } from "@mui/material";
import Footer from "../../components/Footer";
import useAlert from "../../hooks/useAlert";
import { Container } from "./style";
import emailjs from "@emailjs/browser";
import Form from "../../components/Form";

interface EmailData {
    firstname: string;
    lastname: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {

    const { setMessage } = useAlert();

    const [emailData, setEmailData] = useState<any>({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: ""
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setMessage(null);

        if (!emailData?.firstname || !emailData?.lastname || !emailData?.email || !emailData?.subject || !emailData?.message) {
            setMessage({ type: "error", text: "All fields are required!" });
            return;
        }

        try {
            const response = await emailjs.sendForm("gmail", "template_mimbq0t", emailData, "YmtpLwzGpXZlIISa9");

            console.log("SUCCESS - ", response.text, response.status);

            setMessage({ type: "success", text: "Email successfully sent!" });

        } catch (error: Error | any) {
            console.log("FAILED - ", error);

            setMessage({ type: "error", text: "An error has occurred. Try again, please." });
        }

        setMessage({ type: "error", text: "Error! Try again in a few seconds, please." });
    }

    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Box sx={styles.container}>
                        <Typography sx={styles.title} variant="h4" component="h1">
                            Entre em contato
                        </Typography>
                        <Box sx={{ rowGap: 3 }}>
                            <TextField
                                name="firstname"
                                sx={{ marginBottom: "16px", marginRight: 3 }}
                                label="First Name"
                                variant="outlined"
                                onChange={handleInputChange}
                                value={emailData?.firstname}
                            />
                            <TextField
                                name="lastname"
                                sx={{ marginBottom: "16px", marginLeft: 3 }}
                                label="Last Name"
                                variant="outlined"
                                onChange={handleInputChange}
                                value={emailData?.lastname}
                            />
                        </Box>
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
                            <Button onSubmit={handleSubmit} sx={{ padding: 2.5 }} variant="contained" type="submit">
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

const styles = {
    container: {
        marginTop: "180px",
        width: "460px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
    },
    title: { marginBottom: "30px" },
    dividerContainer: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "16px",
        marginBottom: "26px",
    },
    input: { marginBottom: "16px" },
    actionsContainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
};