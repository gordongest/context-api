import React from "react";
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
import formStyles from "./styles/FormStyles";

const Form = ({ classes }) =>
    <main className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography variant="h5">Sign In</Typography>
            <Select value="english">
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="french">French</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
            </Select>
            <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" name="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" name="password" />
                </FormControl>
                <FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
                <Button
                    className={classes.submit}
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    Sign In
                </Button>
            </form>
        </Paper>
    </main>

export default withStyles(formStyles)(Form);
