// Jovi Sidhu - 2020
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
//import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& >*': {
            margin: theme.spacing(1),
            width: '25ch'
        },
    },
}));

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

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        //Axios requests go here
        //This method runs after the componenet has been updated to the DOM, and is a good place to 
        //register API calls.

    }

    handleSearch(props) {
        const givenName = this.props.name;
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'.concat(givenName);
        console.log(apiUrl);
    }

    render() {
        return (
            <div>
                <Typography paragraph>
                    Found Data For {this.state.posts[0]}
                </Typography>    
            </div>
        );
    }
}

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
                <FetchData name={this.state.pokemonName} />
            </div>
        );
    }
}







export default Search;