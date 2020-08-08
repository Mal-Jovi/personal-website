// Jovi Sidhu - 2020
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& >*': {
            margin: theme.spacing(1),
            width: '25ch'
        },
    },
}));





class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: ''
        };

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(data) {
        this.setState({
            pokemonName: data
        });
    }


    render() {
        return (
            <div>
                <SearchBar onSubmit={this.handleEvent} />
                <br>
                </br>
                <Typography paragraph >
                    Pokemon Name: {this.state.pokemonName}
                </Typography>
            </div>
        );
    }
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedWord: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit(this.state.searchedWord);

        this.setState({
            searchedWord: ''
        });
    }

    handleChange(event) {
        this.setState({
            searchedWord: event.target.value
        });
    }

    //Here we avoided using a 'const classes = useStyles();' hook by simplying refering to useStyles directly, 
    //this works for now, may have unforseen consequences
    //TODO: Read further on this
    render() {
        return (
            <div>
                <form className={useStyles.root} noValidate autoComplete="off" onSubmit={this.handleSubmit} >
                    <TextField id="standard-basic"
                        label="enter pokemon name"
                        value={this.state.searchedWord}
                        onChange={this.handleChange} />
                </ form>
                <h4>
                    {this.state.searchedWord}
                </h4>
            </div>
        );
    }

}

function fetchData() {

}

export default Search;