const formStyles = (theme) => ({
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    select: {
      marginTop: theme.spacing(3)
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        marginTop: theme.spacing(3)
    }
});

export default formStyles;
