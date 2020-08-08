// Jovi Sidhu
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Search from './Search';          //Good example of how to reference a component from the same folder

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    title: {
        flexGrow: 1,    //specifies how much the item will grow relative to the rest of the flexible items inside the same container.
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fullWidth: {
        width: `calc(100% - ${drawerWidth}px)`,
    },
}));

function MainContent() {
    const classes = useStyles();

    return (
        <main className={classes.fullWidth}>
            <div className={classes.toolbar} />
            <div className={classes.title}>
                <Typography variant='h6'>Title</Typography>
            </div>
            <div className={classes.content}>
                <Typography paragraph>
                    This is placeholder text
                </Typography>
            </div>
        </main>
    );
}

export default MainContent;
