// Jovi Sidhu - 2020
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import Card from './Card'

const useStyles = makeStyles((theme) => ({
    root: {
        '& >*': {
            margin: theme.spacing(1),
            width: '25ch',
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
        this.props.onChange(this.state.searchedWord);

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
            </div>
        );
    }
}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: '',
            id: '',
            image: '',
            pokemonData: [],
        };

        this.handleName = this.handleName.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    handleName(data) {
        this.setState({
            pokemonName: data
        });
    }

    handleData(event) {
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/'.concat(event.toLowerCase());
        axios({ method: 'get', url: `${apiUrl}` })
            .then((response) => {
                this.setState({
                    pokemonData: response.data,
                    id: response.data.id,
                    image: response.data.sprites.front_default,
                });
            }, (error) => {
                console.log(error);
            });
    }

    //Made Redundant by Card.js
    /*renderResult() {
        if (this.state.pokemonName !== '') {
            return (
                <Typography paragraph >
                    {console.log(this.state.pokemonData)}
                    Pokemon Name: {this.state.pokemonData.name}
                    <br>
                    </br>
                    <img src={this.state.image} />
                </Typography>
            ); 
        }
    }*/

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.handleName} onChange={this.handleData}/>
                <br>
                </br>

                {/*make sure there is a response such that pokemonData is not just an empty array, as to avoid any 'undefined' access errors in Card.js*/}
                {this.state.pokemonData.length !== 0 ? <Card givenData={this.state.pokemonData} /> : console.log("hello")}
            </div>
        );
    }
}







export default Search;