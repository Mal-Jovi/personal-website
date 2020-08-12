// Jovi Sidhu - 2020
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import axios from 'axios';

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

var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var input = document.querySelector(".pokemon-input");
var pokemonName = document.querySelector(".pokemon-name");
var pokemonImage = document.querySelector(".pokemon-image");

function getPokemonData(props) {
    axios.get(apiUrl + props.name)
        .then(function (response) {
            pokemonName.innerHTML = response.data.forms[0].namel
            pokemonImage.src = response.data.sprites.front_default;
        })
        .catch(function (error) {
            pokemonName.innerHTML = "(An error has occured.)";
            pokemonImage.src = "";
        });
}

function FetchData(props){

    let currentName = '';
    let apiUrl = '';

    let responseArray = [];

    if (currentName !== props.name) {
        currentName = props.name;
        apiUrl = 'https://pokeapi.co/api/v2/pokemon/'.concat(currentName);
        axios({ method: 'get', url: `${apiUrl}` })
            .then((response) => {
                responseArray = response.data;
                const responseData = {
                    id: response.data.id,
                    name: response.data.name,
                };
                props.onChangeData(responseArray);
                console.log(responseArray);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Typography paragraph>
                Found Data For {}
            </Typography>    
        </div>
    );
}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: '',
            id: '',
            pokemonData: [],
        };

        this.handleName = this.handleName.bind(this);
    }

    handleName(data) {
        this.setState({
            pokemonName: data
        });
    }

    componentDidMount() {
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/'.concat(this.state.pokemonName);
        axios({ method: 'get', url: `${apiUrl}` })
            .then((response) => {
                this.setState({
                    pokemonData: response.data,
                });
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.handleName} />
                <br>
                </br>
                <Typography paragraph >
                    {console.log(this.state.pokemonData)}
                    Pokemon Name: {this.state.pokemonData.name}
                </Typography>
            </div>
        );
    }
}







export default Search;