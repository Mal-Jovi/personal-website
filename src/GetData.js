// Jovi Sidhu - 2020

import React from 'react';
import axios from 'axios';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        //Axios requests go here
        //This method runs after the componenet has been updated to the DOM, and is a good place to 
        //register API calls.
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';

        axios({ method: 'get', url: `${apiUrl}` })
            .then(response => this.posts = response)
            .then(info => console.log(info.data));
    }

    render() {
        return (
            <div>
                {console.log(this.posts)}
            </div>
        );
    }
}



class AnotherRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ''
        }
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({
            post: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { post } = this.state;

        axios({
            method: 'post',
            url: `$apiUrl}/posts`,
            data: post
        })
    }
}

export default GetData;