import React from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, InputBase, Switch
} from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import navbarStyles from "./styles/NavbarStyles";

const NavBar = ({ toggleTheme, classes }) =>
    <div className={classes.root}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                    <span>🇫🇷</span>
                </IconButton>
                <Typography className={classes.title} variant="h6" color="inherit">
                    App Title
                </Typography>
                <Switch color={"error"} onChange={toggleTheme} />
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

export default withStyles(navbarStyles)(NavBar);