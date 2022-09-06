import React, { useState } from 'react';
import useToggleState from "./hooks/useToggleState";
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import ThemeContextProvider from "./contexts/ThemeContext";
import PageContent from './PageContent';
import NavBar from './Navbar';
import Form from "./Form";

const defaultTheme = createTheme();

const App = () =>
    <ThemeProvider theme={defaultTheme}>
        <StyledEngineProvider injectFirst>
            <ThemeContextProvider >
                <PageContent>
                    <NavBar />
                    <Form />
                </PageContent>
            </ThemeContextProvider>
        </StyledEngineProvider>
    </ThemeProvider>

export default App;
