// Jovi Sidhu - 2020
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Grid } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: `linear-gradient(#d3d3d3, red)`,
        color: 'black',
    },
    bigAvatar: {
        margin: 30,
        width: 100,
        height: 100,
    },
}));  

function SideMenu() {
    const classes = useStyles();

    return (
        <Drawer
            open={true}
            variant='permanent'
            anchor='left'
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Grid container justify='center' alignItems='center'>
                <Avatar
                    src='https://avatars3.githubusercontent.com/u/20745856?s=460&u=a5ea4e99b6cd612b42cb294d13a17a8562f912dc&v=4'
                    className={classes.bigAvatar}
                />
            </Grid>
            <List>
                <ListItem button key={'GitHub Repo'} onClick={() => window.open("https://github.com/Mal-Jovi/personal-website", " _blank")}>
                    <ListItemIcon>
                        <GitHubIcon style={{ color: 'black' }}/>
                    </ListItemIcon>
                    <ListItemText primary={'Pokedex Github'} />
                </ListItem>
                <ListItem button key={'Made By Jovi'} onClick={() => window.open("https://jovisidhu.dev", " _blank")}>
                    <ListItemIcon>
                        < AccountCircle style={{ color: 'black' }}/>
                    </ListItemIcon>
                    <ListItemText primary={'Made By Jovi'} />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideMenu;
