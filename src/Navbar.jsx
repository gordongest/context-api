import React, { useContext } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, InputBase, Switch
} from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from "./contexts/Theme.Context";
import { LanguageContext } from "./contexts/Language.Context";
import { words } from './words';
import navbarStyles from "./styles/NavbarStyles";

const NavBar = ({ classes }) => {
    const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { emoji, searchText } = words[language];

    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>{emoji}</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleDarkTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={`${searchText}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(navbarStyles)(NavBar);