// Jovi Sidhu - 2020

import React from 'react';
import axios from 'axios';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        //Axios requests go here
        //This method runs after the componenet has been updated to the DOM, and is a good place to 
        //register API calls.
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/{12}/';

        axios({ method: 'get', url: `${apiUrl}` })
            .then(response => {
                this.setState({
                    posts: response.data
                })
            });
    }

    render() {
        return (
            console.log(this.posts)
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