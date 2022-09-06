import React from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import NavBar from './Navbar';
import Form from "./Form";

const defaultTheme = createTheme();

const App = () =>
    <ThemeProvider theme={defaultTheme}>
        <StyledEngineProvider injectFirst>
            <NavBar />
            <Form />
        </StyledEngineProvider>
    </ThemeProvider>

export default App;
