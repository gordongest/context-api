import React, { useContext } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, InputBase, Switch
} from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from "./contexts/Theme.Context";
import navbarStyles from "./styles/NavbarStyles";

const NavBar = ({ classes }) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={classes.root}>
            <AppBar position="static" color={isDarkTheme ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <span>🇫🇷</span>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="search..."
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