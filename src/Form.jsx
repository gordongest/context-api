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

const Form = ({ classes }) => (
  <main className={classes.main}>
    <h1>form</h1>
  </main>
);
export default withStyles(formStyles)(Form);
