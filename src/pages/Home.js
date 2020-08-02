// Jovi Sidhu - 2020
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from '../components/TopMenu';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));

function Home() {
    const classes = makeStyles();

    return (
        <div className={classes.root}>
            <TopMenu />
            <SideMenu />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Home;
