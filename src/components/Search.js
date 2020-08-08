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



class SearchBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    //Here we avoided using a 'const classes = useStyles();' hook by simplying refering to useStyles directly, 
    //this works for now, may have unforseen consequences
    //TODO: Read further on this
    render() {
        return (
            < form className={useStyles.root} noValidate autoComplete="off" value={this.props.value} onSubmit={this.props.onSubmit}>    
                <TextField id="standard-basic" label="enter pokemon name" />
            </ form>
        );
    }

}

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonName: "d", 
            posts: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = givenData => 
        this.setState({
            pokemonName: givenData.target.value,
        });


    render() {
        return (
            <div>
                <SearchBar value={this.state.pokemonName} onSubmit={() => this.handleSubmit} />
                <br>
                </br>
                <Typography paragraph >
                    Pokemon Name: {this.state.pokemonName}
                </Typography>
            </div>
        );
    }
}

export default Search;