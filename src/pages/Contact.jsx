import { useState } from "react";
import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  Button,
  Snackbar
} from "@mui/material";
import TextField from "@mui/material/TextField";
import emailSent from "../assets/emailcat.PNG";
import { styled } from "@mui/system";
import { pagesState } from "../state";
import { Link } from "react-router-dom";

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "600px",
  width: "100%"
}));

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const pageContent = pagesState.contact;

  const onSubmit = () => {
    const currentErrors = {
      name: !name.length,
      email: !email.length,
      subject: !subject.length,
      message: !message.length
    };
    setErrors(currentErrors);
    const hasErrors = !!Object.values(currentErrors).filter(Boolean).length;
    if (!hasErrors) {
      setIsLoading(true);
      fetch("https://formsubmit.co/ajax/59c70ed31285e6a10eae3a9704582e65", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          subject,
          email,
          message
        })
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setSubmitted(true);
          setIsLoading(false);
        })
        .catch((error) => {
          // console.log(error);
          setIsAlertOpen(true);
          setIsLoading(false);
        });
    } else {
      // do nothing
    }
  };

  // TODO: make sure form interaction and validation is ADA compliant
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isAlertOpen}
        autoHideDuration={6000}
        onClose={() => setIsAlertOpen(false)}
      >
        <Alert
          onClose={() => setIsAlertOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {pageContent.form.failureMessage}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography color="primary" variant="h1" fontSize="5rem">
          {pageContent.title}
        </Typography>
        {submitted ? (
          <Box>
            <Typography>{pageContent.form.successMessage}</Typography>
            <Link to="/">
              <Typography>Back to homepage</Typography>
            </Link>
            <StyledImg src={emailSent} alt="message sent" />
          </Box>
        ) : (
          <Box
            id="contact-form"
            component="form"
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: "1rem",
              width: "100%",
              maxWidth: "600px"
            }}
          >
            <TextField
              error={errors.name}
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              variant="standard"
              value={name}
            />
            <TextField
              error={errors.email}
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
            />
            <TextField
              error={errors.subject}
              id="subject"
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
              sx={{ gridColumnStart: "span 2" }}
              variant="standard"
            />
            <TextField
              error={errors.message}
              id="message"
              label="Message"
              multiline
              onChange={(e) => setMessage(e.target.value)}
              sx={{ gridColumnStart: "span 2" }}
              variant="standard"
            />
            {!isLoading && (
              <Button
                onClick={onSubmit}
                variant="outlined"
                sx={{ gridColumnStart: "span 2" }}
              >
                Send
              </Button>
            )}
          </Box>
        )}
        <div aria-live="assertive">
          {isLoading && (
            <Box sx={{ paddingTop: "1rem" }}>
              <CircularProgress />
            </Box>
          )}
        </div>
      </Box>
    </>
  );
};

export default Contact;
