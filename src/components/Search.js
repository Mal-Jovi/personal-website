// Jovi Sidhu - 2020

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& >*': {
            margin: theme.spacing(1),
            width: '25ch'
        },
    },
}));

function SearchBar() {

    const classes = useStyles();

    return (
        < form className={classes.root} noValidate autoComplete="off" >
            <TextField id="standard-basic" label="enter pokemon name" />
        </ form>
    );
}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: "",
            posts: [],
        }
    }

    render() {
        return (
            <SearchBar />
        );
    }
}
