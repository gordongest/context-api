import React from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeContextProvider } from "./contexts/Theme.Context";
import { LanguageContextProvider } from "./contexts/Language.Context";
import PageContent from './PageContent';
import NavBar from './Navbar';
import Form from "./Form";

const defaultTheme = createTheme();

const App = () =>
    <ThemeProvider theme={defaultTheme}>
        <StyledEngineProvider injectFirst>
            <ThemeContextProvider>
                <PageContent>
                    <LanguageContextProvider>
                        <NavBar />
                        <Form />
                    </LanguageContextProvider>
                </PageContent>
            </ThemeContextProvider>
        </StyledEngineProvider>
    </ThemeProvider>

export default App;
