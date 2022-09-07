import React, { useContext } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { withStyles } from "@mui/styles";
import { LanguageContext } from "./contexts/Language.Context";
import useInputState from "./hooks/useInputState";
import { words } from './words';
import formStyles from "./styles/FormStyles";

const Form = ({ classes }) => {
    const [email, setEmail, resetEmail] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");
    const { language, setLanguage } = useContext(LanguageContext);
    const { signInText, emailText, passwordText, rememberMeText } = words[language];

    const handleClick = () => console.log("bing!");

    const handleChange = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{signInText}</Typography>
                <Select className={classes.select} value={language} onChange={handleChange}>
                    <MenuItem value="english">{words[language].languageText.english}</MenuItem>
                    <MenuItem value="french">{words[language].languageText.french}</MenuItem>
                    <MenuItem value="spanish">{words[language].languageText.spanish}</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{emailText}</InputLabel>
                        <Input value={email} onChange={setEmail} id="email" name="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{passwordText}</InputLabel>
                        <Input value={password} onChange={setPassword} type="password" id="password" name="password" />
                    </FormControl>
                    <FormControlLabel control={<Checkbox color="primary" />} label={rememberMeText} />
                    <Button
                        className={classes.submit}
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        onClick={handleClick}
                    >
                        {signInText}
                    </Button>
                </form>
            </Paper>
        </main>
    )
}

export default withStyles(formStyles)(Form);
